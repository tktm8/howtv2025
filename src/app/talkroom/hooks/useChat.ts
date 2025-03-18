import { useState, useCallback, useEffect } from 'react';
import { Message, ChatRoom } from '../types';

export const useChat = (userId: string) => {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // チャットルーム一覧を取得
  const fetchRooms = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO: APIからチャットルーム一覧を取得する
      const response = await fetch(`/api/chat/rooms?userId=${userId}`);
      if (!response.ok) throw new Error('チャットルームの取得に失敗しました');
      const data = await response.json();
      setRooms(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  // メッセージ一覧を取得
  const fetchMessages = useCallback(async (roomId: string) => {
    if (!roomId) return;
    try {
      setIsLoading(true);
      // TODO: APIからメッセージ一覧を取得する
      const response = await fetch(`/api/chat/messages?roomId=${roomId}`);
      if (!response.ok) throw new Error('メッセージの取得に失敗しました');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // メッセージを送信
  const sendMessage = useCallback(async (content: string) => {
    if (!selectedRoomId || !content.trim()) return;
    
    try {
      const response = await fetch('/api/chat/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId: selectedRoomId,
          content,
          senderId: userId,
        }),
      });

      if (!response.ok) throw new Error('メッセージの送信に失敗しました');
      
      const newMessage = await response.json();
      setMessages(prev => [...prev, newMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
    }
  }, [selectedRoomId, userId]);

  // ルーム選択時の処理
  const selectRoom = useCallback((roomId: string) => {
    setSelectedRoomId(roomId);
    setError(null);
    fetchMessages(roomId);
  }, [fetchMessages]);

  // 初回マウント時にチャットルーム一覧を取得
  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  // エラーをクリア
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    rooms,
    messages,
    selectedRoomId,
    isLoading,
    error,
    sendMessage,
    selectRoom,
    clearError,
  };
};

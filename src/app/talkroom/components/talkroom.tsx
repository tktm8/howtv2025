'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';
import { useChat } from '../hooks/useChat';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { formatMessageTime } from '../utils/date';

const ChatUI: React.FC = () => {
  // TODO: 実際のユーザーIDを認証システムから取得する
  const {
    rooms,
    messages,
    selectedRoomId,
    isLoading,
    error,
    sendMessage,
    selectRoom,
    clearError,
  } = useChat('user123');

  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex flex-1">
        {/* --- 左サイドバー: チャットルーム一覧 --- */}
        <aside className="w-[280px] bg-gray-50 border-r border-gray-100 flex flex-col">
          {/* ユーザー情報など */}
          <div className="p-6 flex items-center gap-3">
            <div className="bg-[#114260] rounded-full p-2">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium text-gray-800 text-lg">ユーザー名</span>
          </div>

          {/* ルーム一覧 */}
          <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
            {isLoading && !rooms.length ? (
              <LoadingSpinner />
            ) : (
              rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => selectRoom(room.id)}
                  className={`w-full flex items-center px-5 py-4 rounded-lg
                    text-left transition-all duration-200
                    ${
                      selectedRoomId === room.id
                        ? 'bg-[#114260] text-white font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  <div className="flex-1 min-w-0">
                    <p className="truncate">{room.name}</p>
                    {room.lastMessage && (
                      <p className="text-sm opacity-70 truncate">
                        {room.lastMessage}
                      </p>
                    )}
                  </div>
                  {room.lastMessageTime && (
                    <span className="text-xs opacity-50 ml-2">
                      {formatMessageTime(room.lastMessageTime)}
                    </span>
                  )}
                </button>
              ))
            )}
          </nav>
        </aside>

        {/* --- 右側: 選択したチャットルームの画面 --- */}
        <main className="flex-1 flex flex-col">
          {selectedRoomId ? (
            <>
              {/* ヘッダー部分 */}
              <header className="border-b border-gray-100 py-6 px-8 flex items-center justify-between">
                <h2 className="font-medium text-xl text-gray-800">
                  {rooms.find((r) => r.id === selectedRoomId)?.name}
                </h2>
              </header>

              {/* メッセージ表示部分 */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-md rounded-2xl p-4 ${
                          msg.isMine
                            ? 'bg-[#114260] text-white ml-auto'
                            : 'bg-gray-50'
                        }`}
                      >
                        {!msg.isMine && (
                          <div className="text-sm mb-1 font-medium text-[#114260]">
                            {msg.senderName}
                          </div>
                        )}
                        <p className="text-base leading-relaxed break-words">
                          {msg.content}
                        </p>
                        <div className="text-xs mt-2 text-right opacity-70">
                          {formatMessageTime(msg.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* 入力欄 */}
              <div className="border-t border-gray-100 p-6">
                <form className="flex items-center gap-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="メッセージを入力..."
                    className="flex-1 bg-gray-50 border-0 rounded-xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#114260] transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className="bg-[#114260] text-white px-8 py-4 rounded-xl hover:bg-[#1a5075] transition-all duration-200 flex items-center gap-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    送信
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              チャットルームを選択してください
            </div>
          )}
        </main>
      </div>

      {/* エラーメッセージ */}
      {error && <ErrorMessage message={error} onClose={clearError} />}
    </div>
  );
};

export default ChatUI;

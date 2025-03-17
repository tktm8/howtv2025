'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';

// モックのチャットルームリスト
const mockChatRooms = [
  { id: 1, name: 'Talk 1' },
  { id: 2, name: 'Talk 2' },
  { id: 3, name: 'Talk 3' },
];

// モックのチャットメッセージ
// isMine: 自分のメッセージなら true、相手なら false
const mockMessages = [
  { id: 1, user: 'Alice', content: 'こんにちは！', time: '10:00', isMine: false },
  { id: 2, user: 'Me', content: 'こんにちは、元気ですか？', time: '10:01', isMine: true },
  { id: 3, user: 'Alice', content: '元気ですよ！', time: '10:02', isMine: false },
  { id: 4, user: 'Me', content: 'それは良かったです！', time: '10:03', isMine: true },
  { id: 5, user: 'Alice', content: '今日の予定はありますか？', time: '10:05', isMine: false },
];

const ChatUI: React.FC = () => {
  // 現在選択されているチャットルームID
  const [selectedRoomId, setSelectedRoomId] = useState<number>(1);

  return (
    // 画面全体を使う & flex で左右分割
    <div className="w-screen h-screen flex overflow-hidden">
      {/* --- 左サイドバー: チャットルーム一覧 --- */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* ユーザー情報など */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
          <User className="w-5 h-5" />
          <span className="font-semibold">ユーザー名</span>
        </div>
        
        {/* ルーム一覧 */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {mockChatRooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoomId(room.id)}
              className={`w-full flex items-center px-3 py-2 rounded-md 
                text-left hover:bg-gray-100 dark:hover:bg-gray-700
                ${
                  selectedRoomId === room.id
                    ? 'bg-gray-200 dark:bg-gray-700 font-bold'
                    : ''
                }`}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              {room.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* --- 右側: 選択したチャットルームの画面 --- */}
      <main className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        {/* ヘッダー部分 */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <h2 className="font-semibold">
            {mockChatRooms.find((r) => r.id === selectedRoomId)?.name} チャット
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {new Date().toLocaleString()}
          </span>
        </header>

        {/* メッセージ表示部分 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs rounded-lg p-2 ${
                  msg.isMine
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-100'
                }`}
              >
                {/* 相手のメッセージにはユーザー名を表示 */}
                {!msg.isMine && (
                  <div className="text-xs mb-1 font-semibold">{msg.user}</div>
                )}
                <p className="text-sm">{msg.content}</p>
                <div className="text-xs mt-1 text-right opacity-70">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 入力欄 */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
          <form className="flex items-center">
            <input
              type="text"
              placeholder="メッセージを入力..."
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors flex items-center gap-1"
            >
              <Send className="w-4 h-4" />
              送信
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChatUI;

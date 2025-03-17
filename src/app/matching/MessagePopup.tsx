'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MessagePopupProps {
  onClose: () => void;
}

const MessagePopup: React.FC<MessagePopupProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSend = () => {
    // 送信処理などを挟んだ後、ページ遷移
    router.push('/');
  };

  return (
    // 親コンテナ: 画面全体を覆う
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* オーバーレイ部分: 半透明 & ぼかし */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />

      {/* ポップアップ本体: relative でオーバーレイより上に配置 */}
      <div className="relative bg-white rounded p-6 shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">メッセージ送信</h2>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded mb-4"
          placeholder="あいさつしてみましょう！"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            閉じる
          </button>
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;

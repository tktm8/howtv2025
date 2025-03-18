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
    router.push('/talkroom');
  };

  return (
    // 親コンテナ: 画面全体を覆う
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* オーバーレイ部分: 半透明 & ぼかし */}
      <div className="absolute inset-0 bg-[#114260]/10 backdrop-blur-md" />

      {/* ポップアップ本体: relative でオーバーレイより上に配置 */}
      <div className="relative bg-white rounded-lg p-6 shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4 text-[#114260]">メッセージ送信</h2>
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-200 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#114260] focus:border-transparent"
          placeholder="あいさつしてみましょう！"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="border-2 border-[#114260] text-[#114260] hover:bg-gray-50 py-2 px-6 rounded-lg transition-colors"
          >
            閉じる
          </button>
          <button
            onClick={handleSend}
            className="bg-[#114260] hover:bg-[#1a5b8c] text-white py-2 px-6 rounded-lg transition-colors"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;

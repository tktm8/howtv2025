'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { frontendUsers, backendUsers, User } from '../../matching/data';
import { User as UserIcon, Star, Layers, Trophy } from 'lucide-react';
import MessagePopup from '../../matching/MessagePopup';

// 参加コンペのモックデータ
type CompetitionHistory = {
  id: number;
  title: string;
  date: string;   // 開催日や参加日
  result: string; // 優勝, 準優勝, 参加 などの結果
};

// すべてのユーザーをまとめておく（フロント/バックエンド両方）
const allUsers = [...frontendUsers, ...backendUsers];

// コンペ履歴のモックデータ
const mockCompetitionHistory: CompetitionHistory[] = [
  { id: 101, title: 'フロントエンド実装コンペ', date: '2024/12/10', result: '優勝' },
  { id: 102, title: 'アルゴリズム最適化チャレンジ', date: '2025/01/20', result: '準優勝' },
  { id: 103, title: 'UIデザインワークショップ', date: '2025/02/05', result: '参加' },
];

export default function UserPage() {
  const params = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // params.id の存在と型をチェック
  if (!params.id || typeof params.id !== 'string') {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">ユーザーIDが指定されていません</h1>
      </div>
    );
  }
  
  const userId = parseInt(params.id, 10);

  // ユーザーを検索
  const user: User | undefined = allUsers.find((u) => u.uid === userId);

  // ユーザーが見つからなかった場合
  if (!user) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">ユーザーが見つかりませんでした</h1>
        <p>ID: {userId} に該当するユーザーが存在しません。</p>
      </div>
    );
  }

  // 優勝数を計算（モックデータから "優勝" をカウント）
  const winCount = mockCompetitionHistory.filter((comp) => comp.result === '優勝').length;

  return (
    <div className="min-h-screen p-8 bg-white font-[family-name:var(--font-geist-sans)]">
      {/* ページタイトル */}
      <h1 className="text-4xl font-bold mb-12 text-center text-[#114260]">ユーザーページ</h1>

      {/* 2カラムのカード配置（画面幅が狭いときは1カラム） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* --- ユーザー情報カード --- */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(17,66,96,0.1)] hover:shadow-[0_4px_25px_rgba(17,66,96,0.15)] transition-shadow duration-300 overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#114260] to-[#1a5c8f] p-4">
            <h2 className="text-2xl font-semibold text-white">ユーザー情報</h2>
          </div>
          <div className="p-8">
            
            {/* 名前 */}
            <div className="flex items-center text-[#114260] mb-6">
              <UserIcon className="w-6 h-6 mr-3 text-[#114260]" />
              <span className="text-lg font-medium">{user.name}</span>
            </div>
            
            {/* 参加数 */}
            <div className="flex items-center text-[#114260] mb-6">
              <Star className="w-6 h-6 mr-3 text-[#114260]" />
              <span className="text-lg">参加数: {user.experience}</span>
            </div>

            {/* 優勝数 */}
            <div className="flex items-center text-[#114260] mb-6">
              <Trophy className="w-6 h-6 mr-3 text-[#114260]" />
              <span className="text-lg">優勝数: {winCount}</span>
            </div>
            
            {/* スキル一覧 */}
            <div className="flex items-center text-[#114260] mb-4">
              <Layers className="w-6 h-6 mr-3 text-[#114260]" />
              <span className="text-lg">スキル:</span>
            </div>
            <ul className="ml-9 space-y-2 text-[#114260]">
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

              {/* メッセージ送信用ボタン */}
            <div className="mt-8">
              <button
                className="bg-gradient-to-r from-[#114260] to-[#1a5c8f] hover:from-[#1a5c8f] hover:to-[#114260] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-lg w-full"
                onClick={() => setIsPopupOpen(true)}
              >
                メッセージを送る
              </button>
            </div>
          </div>
        </div>

        {/* --- 参加コンペ履歴カード --- */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(17,66,96,0.1)] hover:shadow-[0_4px_25px_rgba(17,66,96,0.15)] transition-shadow duration-300 overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#114260] to-[#1a5c8f] p-4">
            <h2 className="text-2xl font-semibold text-white">参加コンペ履歴</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 gap-6">
              {mockCompetitionHistory.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(17,66,96,0.08)] hover:shadow-[0_2px_15px_rgba(17,66,96,0.12)] transition-shadow duration-300 border border-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium mb-3 text-[#114260]">
                      {comp.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-[#114260] bg-opacity-10 px-3 py-1.5 text-sm font-medium text-[#114260]">
                      {comp.result}
                    </span>
                  </div>
                  <p className="text-[#114260] text-opacity-80">
                    参加日: {comp.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>

      {/* MessagePopup のオーバーレイ表示 */}
      {isPopupOpen && <MessagePopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}

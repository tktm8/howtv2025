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
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* ページタイトル */}
      <h1 className="text-3xl font-bold mb-8 text-center">ユーザーページ</h1>

      {/* 2カラムのカード配置（画面幅が狭いときは1カラム） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* --- ユーザー情報カード --- */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">ユーザー情報</h2>
            
            {/* 名前 */}
            <div className="flex items-center text-gray-700 dark:text-gray-200 mb-3">
              <UserIcon className="w-5 h-5 mr-2" />
              <span className="text-base">{user.name}</span>
            </div>
            
            {/* 参加数 */}
            <div className="flex items-center text-gray-700 dark:text-gray-200 mb-3">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-base">参加数: {user.experience}</span>
            </div>

            {/* 優勝数 */}
            <div className="flex items-center text-gray-700 dark:text-gray-200 mb-3">
              <Trophy className="w-5 h-5 mr-2" />
              <span className="text-base">優勝数: {winCount}</span>
            </div>
            
            {/* スキル一覧 */}
            <div className="flex items-center text-gray-700 dark:text-gray-200 mb-2">
              <Layers className="w-5 h-5 mr-2" />
              <span className="text-base">スキル:</span>
            </div>
            <ul className="ml-7 list-disc text-gray-600 dark:text-gray-300 text-sm">
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            {/* メッセージ送信用ボタン */}
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => setIsPopupOpen(true)}
              >
                メッセージを送る
              </button>
            </div>
          </div>
        </div>

        {/* --- 参加コンペ履歴カード --- */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">参加コンペ履歴</h2>
            <div className="grid grid-cols-1 gap-4">
              {mockCompetitionHistory.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium mb-1 text-gray-800 dark:text-gray-100">
                      {comp.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-1 text-xs font-medium text-blue-800 dark:text-blue-100">
                      {comp.result}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
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

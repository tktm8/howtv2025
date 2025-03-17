'use client';

import React from 'react';
import { User } from '../../matching/data'; // 既存のUser型をインポート
import { User as UserIcon, Star, Layers, Trophy } from 'lucide-react';

// ユーザーが参加したコンペの型（サンプル）
type CompetitionHistory = {
  id: number;
  title: string;
  date: string;      // 開催日や参加日
  result: string;    // 優勝, 準優勝, 参加 などの結果
};

const MyPage: React.FC = () => {
  // サンプルのユーザー情報
  const user: User = {
    uid: 1,
    name: '山田 太郎',
    skills: ['React', 'TypeScript', 'Node.js'],
    experience: 5, // 参加数として扱う
  };

  // ユーザーが参加したコンペの履歴（ダミーデータ）
  const competitionHistory: CompetitionHistory[] = [
    {
      id: 101,
      title: 'フロントエンド実装コンペ',
      date: '2024/12/10',
      result: '優勝',
    },
    {
      id: 102,
      title: 'アルゴリズム最適化チャレンジ',
      date: '2025/01/20',
      result: '準優勝',
    },
    {
      id: 103,
      title: 'UIデザインワークショップ',
      date: '2025/02/05',
      result: '参加',
    },
  ];

  // コンペ履歴から優勝数を算出
  const winCount = competitionHistory.filter((comp) => comp.result === '優勝').length;

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* ページタイトル */}
      <h1 className="text-3xl font-bold mb-8 text-center">マイページ</h1>

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
          </div>
        </div>

        {/* --- 参加コンペ履歴カード --- */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">参加コンペ履歴</h2>
            <div className="grid grid-cols-1 gap-4">
              {competitionHistory.map((comp) => (
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
    </div>
  );
};

export default MyPage;

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
    <div className="min-h-screen p-8 bg-white font-[family-name:var(--font-geist-sans)]">
      {/* ページタイトル */}
      <h1 className="text-4xl font-bold mb-12 text-center" style={{ color: '#114260' }}>マイページ</h1>

      {/* 2カラムのカード配置（画面幅が狭いときは1カラム） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* --- ユーザー情報カード --- */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#114260' }}>ユーザー情報</h2>
            
            {/* 名前 */}
            <div className="flex items-center mb-4">
              <UserIcon className="w-6 h-6 mr-3" style={{ color: '#114260' }} />
              <span className="text-lg font-medium text-gray-800">{user.name}</span>
            </div>
            
            {/* 参加数 */}
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 mr-3" style={{ color: '#114260' }} />
              <span className="text-lg text-gray-700">参加数: {user.experience}</span>
            </div>

            {/* 優勝数 */}
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 mr-3" style={{ color: '#114260' }} />
              <span className="text-lg text-gray-700">優勝数: {winCount}</span>
            </div>
            
            {/* スキル一覧 */}
            <div className="flex items-center mb-3">
              <Layers className="w-6 h-6 mr-3" style={{ color: '#114260' }} />
              <span className="text-lg text-gray-700">スキル:</span>
            </div>
            <ul className="ml-9 grid gap-2 text-gray-600 text-base">
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- 参加コンペ履歴カード --- */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#114260' }}>参加コンペ履歴</h2>
            <div className="grid grid-cols-1 gap-5">
              {competitionHistory.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium mb-2" style={{ color: '#114260' }}>
                      {comp.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white" style={{ backgroundColor: '#114260' }}>
                      {comp.result}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
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

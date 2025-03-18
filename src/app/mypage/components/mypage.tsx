"use client";

import React from "react";
import { User } from "../../matching/data"; // 既存のUser型をインポート
import { User as UserIcon, Star, Layers, Trophy } from "lucide-react";

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
    name: "山田 太郎",
    skills: ["React", "TypeScript", "Node.js"],
    experience: 5, // 参加数として扱う
  };

  // ユーザーが参加したコンペの履歴（ダミーデータ）
  const competitionHistory: CompetitionHistory[] = [
    {
      id: 101,
      title: "フロントエンド実装コンペ",
      date: "2024/12/10",
      result: "優勝",
    },
    {
      id: 102,
      title: "アルゴリズム最適化チャレンジ",
      date: "2025/01/20",
      result: "準優勝",
    },
    {
      id: 103,
      title: "UIデザインワークショップ",
      date: "2025/02/05",
      result: "参加",
    },
  ];

  // コンペ履歴から優勝数を算出
  const winCount = competitionHistory.filter(
    (comp) => comp.result === "優勝"
  ).length;

  return (
    <div className="min-h-screen p-8 bg-white font-[family-name:var(--font-geist-sans)]">
      {/* ページタイトル */}
      <h1 className="text-4xl font-bold mb-12 text-center text-[#114260]">
        マイページ
      </h1>

      {/* 2カラムのカード配置（画面幅が狭いときは1カラム） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* --- ユーザー情報カード --- */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(17,66,96,0.1)] hover:shadow-[0_4px_25px_rgba(17,66,96,0.15)] transition-shadow duration-300 overflow-hidden">
          {/* グラデーションヘッダー */}
          <div className="bg-gradient-to-r from-[#114260] to-[#1a5c8f] p-4">
            <h2 className="text-2xl font-semibold text-white">ユーザー情報</h2>
          </div>
          <div className="p-8">
            {/* 名前 */}
            <div className="flex items-center text-[#114260] mb-6">
              <UserIcon className="w-6 h-6 mr-3" />
              <span className="text-lg font-medium">{user.name}</span>
            </div>
            
            {/* 参加数 */}
            <div className="flex items-center text-[#114260] mb-6">
              <Star className="w-6 h-6 mr-3" />
              <span className="text-lg">参加数: {user.experience}</span>
            </div>
            
            {/* 優勝数 */}
            <div className="flex items-center text-[#114260] mb-6">
              <Trophy className="w-6 h-6 mr-3" />
              <span className="text-lg">優勝数: {winCount}</span>
            </div>
            
            {/* スキル一覧 */}
            <div className="flex items-center text-[#114260] mb-4">
              <Layers className="w-6 h-6 mr-3" />
              <span className="text-lg">スキル:</span>
            </div>
            <ul className="ml-9 space-y-2 text-[#114260]">
              {user.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- 参加コンペ履歴カード --- */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(17,66,96,0.1)] hover:shadow-[0_4px_25px_rgba(17,66,96,0.15)] transition-shadow duration-300 overflow-hidden">
          {/* グラデーションヘッダー */}
          <div className="bg-gradient-to-r from-[#114260] to-[#1a5c8f] p-4">
            <h2 className="text-2xl font-semibold text-white">参加コンペ履歴</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 gap-6">
              {competitionHistory.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(17,66,96,0.08)] hover:shadow-[0_2px_15px_rgba(17,66,96,0.12)] transition-shadow duration-300 border border-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium mb-3 text-[#114260]">
                      {comp.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-[#114260] bg-opacity-10 px-3 py-1.5 text-sm font-medium text-white">
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
    </div>
  );
};

export default MyPage;

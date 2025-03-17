'use client';

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js のコンポーネントを登録
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// data.ts から各種データ・関数をインポート
import { skillOptions, User, frontendUsers, backendUsers, findTop3Matches } from "./data";

interface SimilarityChartProps {
  matches: { user: User; similarity: number }[];
  title: string;
}

const SimilarityChart: React.FC<SimilarityChartProps> = ({ matches, title }) => {
  const data = {
    labels: matches.map((match) => match.user.name),
    datasets: [
      {
        label: "類似度 (%)",
        data: matches.map((match) =>
          parseFloat((match.similarity * 100).toFixed(1))
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default function SkillMatcher() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [topFrontend, setTopFrontend] = useState<{ user: User; similarity: number }[]>([]);
  const [topBackend, setTopBackend] = useState<{ user: User; similarity: number }[]>([]);

  // スキル選択のトグル処理
  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  // マッチング実行時の処理
  const handleMatch = () => {
    const dummyUser: User = {
      uid: 999,
      name: "新規ユーザー",
      skills: selectedSkills,
      experience: 0,
    };
    setTopFrontend(findTop3Matches(dummyUser, frontendUsers));
    setTopBackend(findTop3Matches(dummyUser, backendUsers));
  };

  // クリアボタンの処理：チェック状態をリセット
  const handleClear = () => {
    setSelectedSkills([]);
  };

  // 候補者のスキルを表示（ユーザー選択スキルはハイライト）
  const renderSkills = (userSkills: string[]) => {
    return userSkills.map((skill, idx) => (
      <span
        key={idx}
        style={{
          backgroundColor: selectedSkills.includes(skill) ? "yellow" : "transparent",
          padding: "2px 4px",
          borderRadius: "4px",
          marginRight: "4px",
        }}
      >
        {skill}
      </span>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">スキルマッチング デモ</h1>

      {/* スキル選択用チェックボックス */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {skillOptions.map((skill) => (
          <label key={skill} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedSkills.includes(skill)}
              onChange={() => toggleSkill(skill)}
            />
            {skill}
          </label>
        ))}
      </div>

      {/* マッチング実行とクリアボタンを横並びに配置 */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={handleMatch}
          disabled={selectedSkills.length === 0}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          マッチング実行
        </button>
        <button
          onClick={handleClear}
          className="bg-green-300 text-white py-2 px-4 rounded"
        >
          クリア
        </button>
      </div>

      {/* 横並びのコンテナ */}
      <div className="flex gap-8 w-full max-w-4xl">
        {/* FrontEnd セクション */}
        <div className="flex-1">
          <h2 className="font-bold mb-2">FrontEnd 上位3名</h2>
          {topFrontend.map((match, idx) => (
            <div key={idx} className="p-2 border rounded mb-2">
              <p>
                <strong>{match.user.name}</strong> (経験 {match.user.experience} 回)
              </p>
              <p>スキル: {renderSkills(match.user.skills)}</p>
              <p>類似度: {(match.similarity * 100).toFixed(1)}%</p>
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
                onClick={() => {}}
              >
                気になる
              </button>
            </div>
          ))}
          {topFrontend.length > 0 && (
            <div className="mt-4">
              <SimilarityChart matches={topFrontend} title="FrontEnd 類似度" />
            </div>
          )}
        </div>

        {/* BackEnd セクション */}
        <div className="flex-1">
          <h2 className="font-bold mb-2">BackEnd 上位3名</h2>
          {topBackend.map((match, idx) => (
            <div key={idx} className="p-2 border rounded mb-2">
              <p>
                <strong>{match.user.name}</strong> (経験 {match.user.experience} 回)
              </p>
              <p>スキル: {renderSkills(match.user.skills)}</p>
              <p>類似度: {(match.similarity * 100).toFixed(1)}%</p>
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
                onClick={() => {}}
              >
                気になる
              </button>
            </div>
          ))}
          {topBackend.length > 0 && (
            <div className="mt-4">
              <SimilarityChart matches={topBackend} title="BackEnd 類似度" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

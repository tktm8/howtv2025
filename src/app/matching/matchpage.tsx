'use client';

import { useState } from "react";
import { frontendUsers, backendUsers, skillOptions, User } from "./data";

// ベクトル化 + 類似度関数はそのまま利用
function vectorize(skills: string[]): number[] {
  return skillOptions.map((skill) => (skills.includes(skill) ? 1 : 0));
}

function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return magA && magB ? dotProduct / (magA * magB) : 0;
}

function findTop3Matches(user: User, dataset: User[]) {
  const userVec = vectorize(user.skills);
  const similarities = dataset.map((candidate) => {
    const candidateVec = vectorize(candidate.skills);
    return {
      user: candidate,
      similarity: cosineSimilarity(userVec, candidateVec),
    };
  });
  return similarities.sort((a, b) => b.similarity - a.similarity).slice(0, 3);
}

export default function SkillMatcher() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [topFrontend, setTopFrontend] = useState<any[]>([]);
  const [topBackend, setTopBackend] = useState<any[]>([]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

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

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">スキルマッチング</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
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

      <button
        onClick={handleMatch}
        disabled={selectedSkills.length === 0}
        className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50 mb-8"
      >
        マッチング実行
      </button>

      <div className="flex gap-10 w-full max-w-4xl">
        <div className="flex-1">
          <h2 className="font-bold mb-2">FrontEnd 上位3名</h2>
          {topFrontend.map((item, idx) => (
            <div key={idx} className="p-2 border rounded mb-2">
              <p><strong>{item.user.name}</strong> (経験 {item.user.experience} 回)</p>
              <p>スキル: {item.user.skills.join(", ")}</p>
              <p>類似度: {(item.similarity * 100).toFixed(1)}%</p>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h2 className="font-bold mb-2">BackEnd 上位3名</h2>
          {topBackend.map((item, idx) => (
            <div key={idx} className="p-2 border rounded mb-2">
              <p><strong>{item.user.name}</strong> (経験 {item.user.experience} 回)</p>
              <p>スキル: {item.user.skills.join(", ")}</p>
              <p>類似度: {(item.similarity * 100).toFixed(1)}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

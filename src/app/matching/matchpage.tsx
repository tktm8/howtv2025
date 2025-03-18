import React, { useState } from "react";
import Link from "next/link";
import {
  skillCategories,
  skillOptions,
  User,
  frontendUsers,
  backendUsers,
  findTop3Matches,
} from "./data";
import MessagePopup from "./MessagePopup";

export default function SkillMatcher() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [topFrontend, setTopFrontend] = useState<{ user: User; similarity: number }[]>([]);
  const [topBackend, setTopBackend] = useState<{ user: User; similarity: number }[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  // クリアボタンの処理
  const handleClear = () => {
    setSelectedSkills([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-white">
      <h1 className="text-3xl font-bold mb-2 text-[#114260]">スキルマッチング</h1>
      <p className="text-sm text-gray-600 mb-8">やりたいことを選択してください</p>

      {/* スキル選択エリア */}
      <div className="flex gap-8 max-w-4xl w-full mb-8">
        {/* Frontend Skills */}
        <div className="flex-1 p-6 rounded-lg border-2 border-[#114260] transition-all hover:shadow-md">
          <h3 className="text-[#114260] font-bold mb-4 flex items-center justify-between">
            <span>フロントエンド</span>
            <span className="text-sm bg-[#114260] text-white px-2 py-1 rounded-full">
              {selectedSkills.filter(skill => skillCategories.frontend.includes(skill)).length} 個選択中
            </span>
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skillCategories.frontend.map((skill) => (
              <label
                key={skill}
                className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-200 cursor-pointer
                  ${selectedSkills.includes(skill)
                    ? "bg-[#114260] text-white shadow-md transform scale-105"
                    : "hover:bg-gray-50 hover:scale-102"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => toggleSkill(skill)}
                  className="w-4 h-4 accent-[#114260]"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="flex-1 p-6 rounded-lg border-2 border-[#114260] transition-all hover:shadow-md">
          <h3 className="text-[#114260] font-bold mb-4 flex items-center justify-between">
            <span>バックエンド</span>
            <span className="text-sm bg-[#114260] text-white px-2 py-1 rounded-full">
              {selectedSkills.filter(skill => skillCategories.backend.includes(skill)).length} 個選択中
            </span>
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {skillCategories.backend.map((skill) => (
              <label
                key={skill}
                className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-200 cursor-pointer
                  ${selectedSkills.includes(skill)
                    ? "bg-[#114260] text-white shadow-md transform scale-105"
                    : "hover:bg-gray-50 hover:scale-102"
                  }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => toggleSkill(skill)}
                  className="w-4 h-4 accent-[#114260]"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* マッチング実行とクリアボタン */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={handleMatch}
          disabled={selectedSkills.length === 0}
          className="bg-[#114260] hover:bg-[#1a5b8c] text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:hover:bg-[#114260]"
        >
          マッチング実行
        </button>
        <button
          onClick={handleClear}
          className="border-2 border-[#114260] text-[#114260] hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors"
        >
          クリア
        </button>
      </div>

      {/* 横並びのコンテナ */}
      <div className="flex gap-8 w-full max-w-4xl">
        {/* FrontEnd セクション */}
        <div className="flex-1">
          <h2 className="font-bold mb-2 text-[#114260]">フロントエンド マッチング度上位3名</h2>
          {topFrontend.map((match, idx) => (
            <div key={idx} className="p-4 border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-lg font-semibold text-[#114260]">
                    {match.user.name}
                  </p>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <span>経験値:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < match.user.experience
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#114260]">
                    {(match.similarity * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">類似度</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {match.user.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-md text-sm transition-all duration-200 ${
                      selectedSkills.includes(skill)
                        ? "bg-[#114260] text-white shadow-md transform scale-105"
                        : "bg-[#114260]/20 text-[#114260]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* ボタン2つを横並びに配置 */}
              <div className="flex gap-3 mt-4">
                <button
                  className="flex-1 bg-[#114260] hover:bg-[#1a5b8c] text-white py-2 px-4 rounded-lg transition-colors"
                  onClick={() => setIsPopupOpen(true)}
                >
                  気になる
                </button>
                <Link
                  href={`/user/${match.user.uid}`}
                  className="flex-1 text-center border-2 border-[#114260] text-[#114260] hover:bg-gray-50 py-2 px-4 rounded-lg transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* BackEnd セクション */}
        <div className="flex-1">
          <h2 className="font-bold mb-2 text-[#114260]">バックエンド マッチング度上位3名</h2>
          {topBackend.map((match, idx) => (
            <div key={idx} className="p-4 border rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-lg font-semibold text-[#114260]">
                    {match.user.name}
                  </p>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <span>経験値:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < match.user.experience
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-[#114260]">
                    {(match.similarity * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">類似度</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {match.user.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-md text-sm transition-all duration-200 ${
                      selectedSkills.includes(skill)
                        ? "bg-[#114260] text-white shadow-md transform scale-105"
                        : "bg-[#114260]/20 text-[#114260]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* ボタン2つを横並びに配置 */}
              <div className="flex gap-3 mt-4">
                <button
                  className="flex-1 bg-[#114260] hover:bg-[#1a5b8c] text-white py-2 px-4 rounded-lg transition-colors"
                  onClick={() => setIsPopupOpen(true)}
                >
                  気になる
                </button>
                <Link
                  href={`/user/${match.user.uid}`}
                  className="flex-1 text-center border-2 border-[#114260] text-[#114260] hover:bg-gray-50 py-2 px-4 rounded-lg transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ポップアップの表示 */}
      {isPopupOpen && <MessagePopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}

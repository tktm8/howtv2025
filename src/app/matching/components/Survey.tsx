"use client";

import { useState } from "react";
import { interestOptions, skillOptions } from "../data";

const Survey: React.FC = () => {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [interest, setInterest] = useState("");

  const handleSelectSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前を入力"
        />
      </div>

      <div>
        <div>
          <label>コンペ参加数</label>
        </div>
        <select
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
        >
          <option value={0}>未経験</option>
          <option value={0.5}>1年未満</option>
          <option value={1}>1年以上</option>
          <option value={2}>2年以上</option>
          <option value={3}>3年以上</option>
        </select>
      </div>

      <div className="p-4">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Identification
        </h3>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {skillOptions.map((skill, index) => (
            <li
              key={skill}
              className={`w-full border-gray-200 dark:border-gray-600 ${
                index !== skillOptions.length - 1
                  ? "border-b sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="flex items-center ps-3">
                <input
                  id={`${skill}-checkbox`}
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleSelectSkill(skill)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={`${skill}-checkbox`}
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {skill}
                </label>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 p-2 border rounded-lg">
          <strong>選択されたスキル:</strong> {JSON.stringify(selectedSkills)}
        </div>
      </div>

      <div className="p-4">
        {interestOptions.map((i) => (
          <label key={i} className="flex items-center space-x-2">
            <input
              type="checkbox"
              onChange={() => setInterest(i)}
              checked={interest == i}
            />
            <span>{i}</span>
          </label>
        ))}
      </div>
      <div className="p-4">
        <strong>選択された興味：{interest}</strong>
      </div>

      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 me-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          送信
        </button>
      </div>
    </>
  );
};

export default Survey;

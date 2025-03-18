// スキルカテゴリー
export const skillCategories = {
  frontend: ["React", "Vue", "Angular", "Svelte", "Next.js", "JavaScript", "TypeScript", "CSS", "HTML"],
  backend: ["Node.js", "Express", "Rails", "Laravel", "Django", "Go", "PHP", "Python", "Ruby"]
};

// 全スキルオプション
export const skillOptions = [...skillCategories.frontend, ...skillCategories.backend];

// ユーザー型定義
export type User = {
  uid: number;        // ユーザーID
  name: string;       // 名前
  skills: string[];   // スキルリスト
  experience: number; // 経験値（例：コンペ参加回数）
};

// フロントエンドユーザー（バックエンド技術を一部保有）
export const frontendUsers: User[] = [
  { uid: 1, name: "Bob1", skills: ["Node.js", "Angular", "Laravel"], experience: 5 },
  { uid: 2, name: "Alice2", skills: ["Python", "Vue"], experience: 5 },
  { uid: 3, name: "Mary3", skills: ["Python", "Next.js", "Go", "CSS"], experience: 4 },
  { uid: 4, name: "Emma4", skills: ["PHP", "HTML"], experience: 0 },
  { uid: 5, name: "James5", skills: ["CSS", "TypeScript", "Ruby"], experience: 3 },
  { uid: 6, name: "Rick6", skills: ["Vue"], experience: 2 },
  { uid: 7, name: "Olivia7", skills: ["Express", "Python", "CSS", "TypeScript"], experience: 4 },
  { uid: 8, name: "Liam8", skills: ["Svelte"], experience: 2 },
  // 【修正】Sophia9: もともと ["PHP", "Node.js"] だったが、バックエンドスキルのみだったため "React"（フロントエンド）を追加
  { uid: 9, name: "Sophia9", skills: ["React", "Node.js"], experience: 5 },
  { uid: 10, name: "Mason10", skills: ["Python", "Vue", "Django", "Next.js"], experience: 3 },
  { uid: 11, name: "Isabella11", skills: ["CSS"], experience: 1 },
  { uid: 12, name: "Jacob12", skills: ["React", "JavaScript", "Next.js"], experience: 0 },
  { uid: 13, name: "Mia13", skills: ["Django", "Vue"], experience: 2 },
  { uid: 14, name: "Ethan14", skills: ["PHP", "HTML", "Laravel", "CSS"], experience: 3 },
  { uid: 15, name: "Amelia15", skills: ["React", "Node.js", "Express"], experience: 1 },
  { uid: 16, name: "Michael16", skills: ["Vue", "JavaScript"], experience: 4 },
  // 【修正】Charlotte17: もともと ["Python"] だったが、バックエンドのみなので "Vue"（フロントエンド）を追加
  { uid: 17, name: "Charlotte17", skills: ["Vue", "Python"], experience: 5 },
  { uid: 18, name: "Benjamin18", skills: ["React", "Django", "CSS"], experience: 2 },
  { uid: 19, name: "Ava19", skills: ["Next.js", "Vue", "Express", "Node.js"], experience: 0 },
  // 【修正】Daniel20: もともと ["Python", "Ruby"] だったため、フロントエンドスキル "Angular" を追加
  { uid: 20, name: "Daniel20", skills: ["Angular", "Python", "Ruby"], experience: 3 },
];

// バックエンドユーザー（フロントエンド技術を一部保有）
export const backendUsers: User[] = [
  { uid: 21, name: "David1", skills: ["Django", "Node.js"], experience: 4 },
  { uid: 22, name: "Sarah2", skills: ["Python", "Svelte", "Go"], experience: 2 },
  { uid: 23, name: "Andrew3", skills: ["Ruby"], experience: 1 },
  { uid: 24, name: "Madison4", skills: ["React", "Vue", "Next.js", "Express"], experience: 0 },
  { uid: 25, name: "Joseph5", skills: ["JavaScript", "Go"], experience: 5 },
  { uid: 26, name: "Abigail6", skills: ["PHP", "CSS", "TypeScript"], experience: 3 },
  // 【修正】Joshua7: もともと ["Next.js"] だったため、バックエンドスキル "Node.js" を追加
  { uid: 27, name: "Joshua7", skills: ["Next.js", "Node.js"], experience: 2 },
  { uid: 28, name: "Lily8", skills: ["Svelte", "HTML", "Express", "Python"], experience: 4 },
  { uid: 29, name: "Christopher9", skills: ["Node.js", "Vue", "React"], experience: 1 },
  { uid: 30, name: "Natalie10", skills: ["PHP"], experience: 2 },
  // 【修正】Ryan11: もともと ["TypeScript", "HTML"] だったため、バックエンドスキル "Express" を追加
  { uid: 31, name: "Ryan11", skills: ["TypeScript", "HTML", "Express"], experience: 0 },
  { uid: 32, name: "Sophia12", skills: ["Express", "React", "Django", "PHP"], experience: 5 },
  { uid: 33, name: "Ethan13", skills: ["Laravel", "Node.js", "JavaScript"], experience: 3 },
  { uid: 34, name: "Grace14", skills: ["Python"], experience: 1 },
  { uid: 35, name: "Daniel15", skills: ["CSS", "HTML", "PHP", "Node.js"], experience: 4 },
  { uid: 36, name: "Victoria16", skills: ["React", "Ruby"], experience: 2 },
  { uid: 37, name: "Matthew17", skills: ["Rails", "Go", "Django"], experience: 5 },
  // 【修正】Ella18: もともと ["Next.js"] だったため、バックエンドスキル "Django" を追加
  { uid: 38, name: "Ella18", skills: ["Next.js", "Django"], experience: 3 },
  // 【修正】Luke19: もともと ["HTML", "JavaScript"] だったため、バックエンドスキル "PHP" を追加
  { uid: 39, name: "Luke19", skills: ["HTML", "JavaScript", "PHP"], experience: 0 },
  { uid: 40, name: "Jessica20", skills: ["Svelte", "Go", "TypeScript", "Vue"], experience: 1 },
];


// ユーザーのスキルをベクトル化する関数
export function vectorize(skills: string[]): number[] {
  return skillOptions.map((skill) => (skills.includes(skill) ? 1 : 0));
}

// コサイン類似度を計算する関数
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return magA && magB ? dotProduct / (magA * magB) : 0;
}

// ユーザーとデータセットのマッチングを行い、上位3名を返す関数
export function findTop3Matches(user: User, dataset: User[]) {
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

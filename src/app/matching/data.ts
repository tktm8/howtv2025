export const skillOptions = [
    "React", "Vue", "Angular", "Svelte", "Next.js", "JavaScript", "TypeScript", "CSS", "HTML",
    "Node.js", "Express", "Rails", "Laravel", "Django", "Go", "PHP", "Python", "Ruby"
  ];
  
  export type User = {
    uid: number; // ユーザーID
    name: string; // 名前
    skills: string[]; // スキル
    experience: number; // コンペ参加回数
  };
  
  // フロントエンドユーザー（バックエンド技術を一部保有）
  const frontendUsers: User[] = [
    { uid: 1, name: "Bob1", skills: ["Node.js", "Angular", "Laravel", "Svelte", "JavaScript"], experience: 5 },
    { uid: 2, name: "Alice2", skills: ["Python", "Vue", "Rails", "Ruby", "CSS"], experience: 5 },
    { uid: 3, name: "Mary3", skills: ["Python", "Next.js", "Go", "CSS", "Django", "JavaScript"], experience: 4 },
    { uid: 4, name: "Emma4", skills: ["PHP", "HTML", "Next.js", "Go"], experience: 0 },
    { uid: 5, name: "James5", skills: ["CSS", "TypeScript", "Ruby", "Python"], experience: 3 },
    { uid: 6, name: "Rick6", skills: ["Vue", "Rails", "Django", "PHP", "Next.js"], experience: 2 },
    { uid: 7, name: "Olivia7", skills: ["Express", "Python", "CSS", "TypeScript", "React"], experience: 4 },
    { uid: 8, name: "Liam8", skills: ["Svelte", "Django", "HTML", "JavaScript", "Rails"], experience: 2 },
    { uid: 9, name: "Sophia9", skills: ["PHP", "Node.js", "Express", "Angular", "Ruby"], experience: 5 },
    { uid: 10, name: "Mason10", skills: ["Python", "Vue", "Django", "Next.js", "React"], experience: 3 },
    { uid: 11, name: "Isabella11", skills: ["CSS", "Express", "Go", "Node.js", "Svelte"], experience: 1 },
    { uid: 12, name: "Jacob12", skills: ["React", "JavaScript", "Next.js", "Rails", "TypeScript"], experience: 0 },
    { uid: 13, name: "Mia13", skills: ["Django", "Vue", "Angular", "Go", "Python"], experience: 2 },
    { uid: 14, name: "Ethan14", skills: ["PHP", "HTML", "Laravel", "CSS", "TypeScript"], experience: 3 },
    { uid: 15, name: "Amelia15", skills: ["React", "Node.js", "Express", "Svelte", "Rails"], experience: 1 },
    { uid: 16, name: "Michael16", skills: ["Vue", "JavaScript", "Next.js", "Django", "PHP"], experience: 4 },
    { uid: 17, name: "Charlotte17", skills: ["Python", "Rails", "Express", "Go", "Angular"], experience: 5 },
    { uid: 18, name: "Benjamin18", skills: ["React", "Django", "CSS", "Svelte", "PHP"], experience: 2 },
    { uid: 19, name: "Ava19", skills: ["Next.js", "Vue", "Express", "Node.js", "JavaScript"], experience: 0 },
    { uid: 20, name: "Daniel20", skills: ["Python", "Ruby", "Laravel", "HTML", "React"], experience: 3 },
  ];
  
  // バックエンドユーザー（フロントエンド技術を一部保有）
  const backendUsers: User[] = [
    { uid: 1, name: "David1", skills: ["Django", "Node.js", "Express", "React", "Vue"], experience: 4 },
    { uid: 2, name: "Sarah2", skills: ["Python", "Svelte", "Go", "PHP", "JavaScript"], experience: 2 },
    { uid: 3, name: "Andrew3", skills: ["Ruby", "Rails", "CSS", "TypeScript", "Node.js"], experience: 1 },
    { uid: 4, name: "Madison4", skills: ["React", "Vue", "Next.js", "Express", "Laravel"], experience: 0 },
    { uid: 5, name: "Joseph5", skills: ["JavaScript", "Go", "Svelte", "Rails", "Django"], experience: 5 },
    { uid: 6, name: "Abigail6", skills: ["PHP", "CSS", "TypeScript", "React", "Django"], experience: 3 },
    { uid: 7, name: "Joshua7", skills: ["Next.js", "JavaScript", "Vue", "Go", "Angular"], experience: 2 },
    { uid: 8, name: "Lily8", skills: ["Svelte", "HTML", "Express", "Python", "Django"], experience: 4 },
    { uid: 9, name: "Christopher9", skills: ["Node.js", "Vue", "React", "Rails", "Laravel"], experience: 1 },
    { uid: 10, name: "Natalie10", skills: ["PHP", "CSS", "Go", "Svelte", "JavaScript"], experience: 2 },
    { uid: 11, name: "Ryan11", skills: ["TypeScript", "HTML", "Rails", "Vue", "Python"], experience: 0 },
    { uid: 12, name: "Sophia12", skills: ["Express", "React", "Django", "PHP", "Next.js"], experience: 5 },
    { uid: 13, name: "Ethan13", skills: ["Laravel", "Node.js", "JavaScript", "Rails", "Angular"], experience: 3 },
    { uid: 14, name: "Grace14", skills: ["Python", "Svelte", "Django", "Go", "Vue"], experience: 1 },
    { uid: 15, name: "Daniel15", skills: ["CSS", "HTML", "PHP", "Node.js", "Express"], experience: 4 },
    { uid: 16, name: "Victoria16", skills: ["React", "Ruby", "TypeScript", "Next.js", "Laravel"], experience: 2 },
    { uid: 17, name: "Matthew17", skills: ["Rails", "Go", "Django", "Angular", "Svelte"], experience: 5 },
    { uid: 18, name: "Ella18", skills: ["Next.js", "Vue", "Python", "React", "CSS"], experience: 3 },
    { uid: 19, name: "Luke19", skills: ["HTML", "JavaScript", "Express", "Django", "Rails"], experience: 0 },
    { uid: 20, name: "Jessica20", skills: ["Svelte", "Go", "TypeScript", "Vue", "Node.js"], experience: 1 },
  ];
  
  export { frontendUsers, backendUsers };
  
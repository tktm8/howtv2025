export const skillOptions = [
  // フロントエンド
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",

  // バックエンド
  "Node.js",
  "Express",
  "Rails",
  "Laravel",
  "Django",
  "Go",
  "PHP",
  "Python",
  "Ruby",
];

export const interestOptions = ["フロントエンド", "バックエンド"];

export type User = {
  uid: number;// ユーザーID
  name: string;// 名前
  skills: string[];// スキル
  experience: number;// コンペ参加回数
  interest: string;// 興味・希望
};

const users: User[] = [
  {
    uid: 1,
    name: "Bob",
    skills: ["Django", "PHP", "Node.js", "Go", "TypeScript"],
    experience: 1,
    interest: "フロントエンド",
  },
  {
    uid: 2,
    name: "Alice",
    skills: ["Python", "Django", "Svelte", "Node.js", "Next.js"],
    experience: 4,
    interest: "フロントエンド",
  },
  {
    uid: 3,
    name: "Mary",
    skills: ["Vue", "Angular", "TypeScript", "React"],
    experience: 0,
    interest: "バックエンド",
  },
  {
    uid: 4,
    name: "Emma",
    skills: ["PHP", "Laravel", "Angular"],
    experience: 2,
    interest: "フロントエンド",
  },
  {
    uid: 5,
    name: "James",
    skills: ["PHP", "Laravel", "Express", "Angular", "Next.js"],
    experience: 2,
    interest: "バックエンド",
  },
  {
    uid: 6,
    name: "Rick",
    skills: ["React", "JavaScript", "Vue", "TypeScript", "HTML"],
    experience: 3,
    interest: "フロントエンド",
  },
  {
    uid: 7,
    name: "Olivia",
    skills: ["PHP", "Node.js", "Python", "Django", "Go"],
    experience: 0,
    interest: "バックエンド",
  },
  {
    uid: 8,
    name: "Liam",
    skills: ["Vue", "Laravel", "Express", "Svelte"],
    experience: 3,
    interest: "フロントエンド",
  },
  {
    uid: 9,
    name: "Sophia",
    skills: ["React", "Next.js", "Ruby", "Rails"],
    experience: 1,
    interest: "バックエンド",
  },
  {
    uid: 10,
    name: "Mason",
    skills: ["PHP", "Django", "JavaScript", "TypeScript"],
    experience: 5,
    interest: "バックエンド",
  },
  {
    uid: 11,
    name: "Isabella",
    skills: ["Node.js", "Express", "Rails", "Vue"],
    experience: 4,
    interest: "フロントエンド",
  },
  {
    uid: 12,
    name: "Jacob",
    skills: ["React", "Python", "Django", "Angular"],
    experience: 3,
    interest: "バックエンド",
  },
  {
    uid: 13,
    name: "Mia",
    skills: ["Go", "PHP", "Django", "Vue", "Python"],
    experience: 2,
    interest: "バックエンド",
  },
  {
    uid: 14,
    name: "Ethan",
    skills: ["Ruby", "Rails", "React", "Vue", "Next.js"],
    experience: 1,
    interest: "フロントエンド",
  },
  {
    uid: 15,
    name: "Amelia",
    skills: ["Laravel", "Svelte", "Express", "Python"],
    experience: 2,
    interest: "バックエンド",
  },
  {
    uid: 16,
    name: "Michael",
    skills: ["JavaScript", "TypeScript", "CSS", "HTML", "Angular"],
    experience: 3,
    interest: "フロントエンド",
  },
  {
    uid: 17,
    name: "Charlotte",
    skills: ["Django", "PHP", "Go", "Next.js"],
    experience: 0,
    interest: "バックエンド",
  },
  {
    uid: 18,
    name: "Benjamin",
    skills: ["React", "TypeScript", "Rails", "Express"],
    experience: 5,
    interest: "バックエンド",
  },
  {
    uid: 19,
    name: "Ava",
    skills: ["Node.js", "Ruby", "React", "Django"],
    experience: 4,
    interest: "フロントエンド",
  },
  {
    uid: 20,
    name: "Daniel",
    skills: ["Python", "Go", "Django", "PHP", "Vue"],
    experience: 1,
    interest: "バックエンド",
  },
  {
    uid: 21,
    name: "Emily",
    skills: ["Laravel", "Express", "CSS", "HTML"],
    experience: 2,
    interest: "フロントエンド",
  },
  {
    uid: 22,
    name: "Henry",
    skills: ["JavaScript", "TypeScript", "React", "Svelte", "Next.js"],
    experience: 3,
    interest: "バックエンド",
  },
  {
    uid: 23,
    name: "Harper",
    skills: ["Ruby", "Rails", "Vue"],
    experience: 1,
    interest: "バックエンド",
  },
  {
    uid: 24,
    name: "Alexander",
    skills: ["Go", "Django", "Express", "Laravel"],
    experience: 0,
    interest: "バックエンド",
  },
  {
    uid: 25,
    name: "Evelyn",
    skills: ["React", "TypeScript", "JavaScript", "PHP"],
    experience: 4,
    interest: "フロントエンド",
  },
];

export default users;

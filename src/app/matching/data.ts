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
  "TypeScript",

  // モバイルアプリ
  "Flutter",
  "Swift",
  "Kotlin",
  "React Native",
];

export const interestOptions = [
  "フロントエンド",
  "バックエンド",
  "モバイルアプリ",
];

export type User = {
  uid: number;
  name: string;
  skills: string[];
  experience: number;
  interest: string;
};

const users: User[] = [
  {
    uid: 1,
    name: "Bob",
    skills: ["Vue", "Rails", "React", "Ruby", "TypeScript"],
    experience: 1,
    interest: "モバイルアプリ",
  },
  {
    uid: 2,
    name: "Alice",
    skills: ["Python", "Django", "Svelte", "PHP"],
    experience: 5,
    interest: "フロントエンド",
  },
  {
    uid: 3,
    name: "Mary",
    skills: ["PHP", "Laravel", "Node.js", "Express", "Next.js"],
    experience: 4,
    interest: "フロントエンド",
  },
  {
    uid: 4,
    name: "Emma",
    skills: ["Rails", "Node.js", "Express", "Go", "Ruby"],
    experience: 3,
    interest: "バックエンド",
  },
  {
    uid: 5,
    name: "James",
    skills: ["Next.js", "Angular", "TypeScript", "React"],
    experience: 5,
    interest: "バックエンド",
  },
  {
    uid: 6,
    name: "Rick",
    skills: ["React Native", "JavaScript", "Svelte", "Swift", "Rails"],
    experience: 3,
    interest: "フロントエンド",
  },
  {
    uid: 7,
    name: "Olivia",
    skills: ["PHP", "Node.js", "Kotlin", "Django", "Go"],
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
    skills: ["Swift", "React", "Next.js", "Ruby"],
    experience: 1,
    interest: "バックエンド",
  },
  {
    uid: 10,
    name: "Mason",
    skills: ["React Native", "PHP", "Django", "JavaScript", "TypeScript"],
    experience: 5,
    interest: "モバイルアプリ",
  },
  {
    uid: 11,
    name: "Isabella",
    skills: ["Node.js", "Express", "Rails", "Vue", "Flutter"],
    experience: 4,
    interest: "フロントエンド",
  },
  {
    uid: 12,
    name: "Jacob",
    skills: ["React", "Python", "Django", "Kotlin", "Angular"],
    experience: 3,
    interest: "バックエンド",
  },
  {
    uid: 13,
    name: "Mia",
    skills: ["Go", "Swift", "React Native", "PHP"],
    experience: 2,
    interest: "モバイルアプリ",
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
    skills: ["Laravel", "Svelte", "Express", "Flutter", "Python"],
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
    skills: ["Django", "PHP", "Go", "Swift", "Next.js"],
    experience: 0,
    interest: "モバイルアプリ",
  },
  {
    uid: 18,
    name: "Benjamin",
    skills: ["React", "TypeScript", "Kotlin", "Rails", "Express"],
    experience: 5,
    interest: "バックエンド",
  },
  {
    uid: 19,
    name: "Ava",
    skills: ["Flutter", "Node.js", "Ruby", "React"],
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
    skills: ["Laravel", "Swift", "Express", "CSS", "HTML"],
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
    skills: ["Kotlin", "Ruby", "Rails", "Flutter", "Vue"],
    experience: 1,
    interest: "モバイルアプリ",
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
    skills: ["React Native", "Kotlin", "Swift", "Flutter", "PHP"],
    experience: 4,
    interest: "モバイルアプリ",
  },
];

export default users;

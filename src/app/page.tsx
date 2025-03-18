import { Calendar, Users, Trophy } from "lucide-react";
import Link from "next/link";

// 仮のコンペデータ
const competitions = [
  {
    id: 1,
    title: "WEBパフォーマンスチャレンジ 2025",
    description:
      "効率的なWEBアルゴリズムとパフォーマンス最適化を競うコンペティション",
    deadline: "2025/4/30",
    participants: 45,
    maxParticipants: 100,
    category: "WEB",
    difficulty: "中級",
  },
  {
    id: 2,
    title: "モバイルUXデザインバトル",
    description:
      "革新的なモバイルユーザーインターフェースのデザインコンペティション",
    deadline: "2025/5/15",
    participants: 28,
    maxParticipants: 50,
    category: "モバイル",
    difficulty: "上級",
  },
  {
    id: 3,
    title: "WEB AI統合チャレンジ",
    description:
      "最新のAI技術を活用したWEBアプリ最適化に挑戦するコンペティション",
    deadline: "2025/4/20",
    participants: 67,
    maxParticipants: 150,
    category: "WEB",
    difficulty: "上級",
  },
  {
    id: 4,
    title: "WEBセキュリティハッカソン",
    description: "WEBアプリケーションの脆弱性を見つけ修正するコンペティション",
    deadline: "2025/5/1",
    participants: 32,
    maxParticipants: 80,
    category: "WEB",
    difficulty: "中級",
  },
  {
    id: 5,
    title: "WEB開発イノベーションコンペ",
    description:
      "最新のWeb技術を駆使した革新的なWebアプリケーションの開発を競うコンペティション",
    deadline: "2025/5/10",
    participants: 35,
    maxParticipants: 70,
    category: "WEB",
    difficulty: "中級",
  },
  {
    id: 6,
    title: "モバイルアプリ開発チャレンジ",
    description: "革新的なモバイルアプリのアイデアと実装を競うコンペティション",
    deadline: "2025/5/20",
    participants: 40,
    maxParticipants: 80,
    category: "モバイル",
    difficulty: "上級",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-white font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-8 text-[#114260] text-center">
        コンペティション一覧
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competitions.map((comp) => (
          <div
            key={comp.id}
            className="bg-white rounded-xl border-2 border-[#114260]/10 shadow-lg hover:shadow-xl hover:border-[#114260]/30 transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold mb-2">{comp.title}</h2>
                <span className="inline-flex items-center rounded-full bg-[#114260] px-2.5 py-1 text-xs font-medium text-white">
                  {comp.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {comp.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-[#114260]">
                  <Calendar className="w-4 h-4 mr-2 opacity-70" />
                  <span className="text-sm">締切: {comp.deadline}</span>
                </div>
                <div className="flex items-center text-[#114260]">
                  <Users className="w-4 h-4 mr-2 opacity-70" />
                  <span className="text-sm">
                    参加者: {comp.participants}/{comp.maxParticipants}
                  </span>
                </div>
                <div className="flex items-center text-[#114260]">
                  <Trophy className="w-4 h-4 mr-2 opacity-70" />
                  <span className="text-sm">難易度: {comp.difficulty}</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={`/competition/${comp.id}`}
                  className="block w-full bg-[#114260] text-white rounded-lg py-2.5 hover:bg-[#114260]/90 transition-all duration-300 text-center font-medium hover:shadow-md"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

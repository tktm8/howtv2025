import { Calendar, Users, Trophy } from 'lucide-react';
import Link from 'next/link';

// 仮のコンペデータ
const competitions = [
  {
    id: 1,
    title: "アルゴリズムチャレンジ 2025",
    description: "効率的なアルゴリズムの実装を競うコンペティション",
    deadline: "2025/4/30",
    participants: 45,
    maxParticipants: 100,
    category: "アルゴリズム",
    difficulty: "中級"
  },
  {
    id: 2,
    title: "UI/UXデザインバトル",
    description: "革新的なユーザーインターフェースのデザインコンペ",
    deadline: "2025/5/15",
    participants: 28,
    maxParticipants: 50,
    category: "デザイン",
    difficulty: "上級"
  },
  {
    id: 3,
    title: "AIモデル最適化コンペ",
    description: "機械学習モデルの性能向上に挑戦",
    deadline: "2025/4/20",
    participants: 67,
    maxParticipants: 150,
    category: "AI/ML",
    difficulty: "上級"
  },
  {
    id: 4,
    title: "セキュリティハッカソン",
    description: "セキュリティの脆弱性を見つけて修正",
    deadline: "2025/5/1",
    participants: 32,
    maxParticipants: 80,
    category: "セキュリティ",
    difficulty: "中級"
  },
  {
    id: 5,
    title: "WEB開発イノベーションコンペ",
    description: "最新のWeb技術を駆使した革新的なWebアプリケーションを開発するコンペティション",
    deadline: "2025/5/10",
    participants: 35,
    maxParticipants: 70,
    category: "WEB開発",
    difficulty: "中級"
  },
  {
    id: 6,
    title: "モバイルアプリ開発チャレンジ",
    description: "革新的なモバイルアプリのアイデアと実装を競うコンペティション",
    deadline: "2025/5/20",
    participants: 40,
    maxParticipants: 80,
    category: "モバイルアプリ",
    difficulty: "上級"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-8 text-center">コンペティション一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((comp) => (
          <div
            key={comp.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold mb-2">{comp.title}</h2>
                <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-1 text-xs font-medium text-blue-800 dark:text-blue-100">
                  {comp.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {comp.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">締切: {comp.deadline}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    参加者: {comp.participants}/{comp.maxParticipants}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span className="text-sm">難易度: {comp.difficulty}</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={`/competition/${comp.id}`}
                  className="block w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors duration-200 text-center"
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

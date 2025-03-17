import { Calendar, Users, Trophy, Book, Award, Timer } from 'lucide-react';
import Link from 'next/link';

// 仮のコンペデータ（後でAPIなどから取得する）
const competitions = [
  {
    id: 1,
    title: "アルゴリズムチャレンジ 2025",
    description: "効率的なアルゴリズムの実装を競うコンペティション",
    longDescription: `
      このコンペティションでは、参加者は与えられた問題に対して最も効率的なアルゴリズムを実装することが求められます。
      
      主な課題：
      - 実行時間の最適化
      - メモリ使用量の削減
      - コードの可読性維持
      
      参加者は自身の解法の効率性と品質を競い合います。
    `,
    deadline: "2025/4/30",
    participants: 45,
    maxParticipants: 100,
    category: "アルゴリズム",
    difficulty: "中級",
    rules: [
      "すべての提出は指定された言語で実装すること",
      "外部ライブラリの使用は制限付き",
      "提出されたコードは自動テストにより評価",
      "コードの可読性も評価対象"
    ],
    prizes: [
      "1位: 賞金30万円",
      "2位: 賞金20万円",
      "3位: 賞金10万円"
    ],
    evaluationCriteria: [
      "実行時間（40%）",
      "メモリ使用量（30%）",
      "コードの品質（20%）",
      "ドキュメント（10%）"
    ]
  },
  {
    id: 2,
    title: "UI/UXデザインバトル",
    description: "革新的なユーザーインターフェースのデザインコンペ",
    longDescription: `
      最新のトレンドとユーザビリティを考慮した、革新的なUIデザインを競うコンペティション。
      実際のユースケースに基づいたデザイン課題に挑戦していただきます。
      
      フォーカスエリア：
      - モバイルファースト設計
      - アクセシビリティ
      - インタラクションデザイン
    `,
    deadline: "2025/5/15",
    participants: 28,
    maxParticipants: 50,
    category: "デザイン",
    difficulty: "上級",
    rules: [
      "オリジナルの作品であること",
      "指定されたデザインシステムに従うこと",
      "アクセシビリティガイドラインの遵守",
      "プロトタイプの提出必須"
    ],
    prizes: [
      "1位: 最新デザインツール年間ライセンス",
      "2位: デザインワークショップ参加権",
      "3位: デザイン書籍セット"
    ],
    evaluationCriteria: [
      "デザインの革新性（30%）",
      "ユーザビリティ（30%）",
      "アクセシビリティ（20%）",
      "技術的実現可能性（20%）"
    ]
  }
];

export default function CompetitionDetail({ params }: { params: { id: string } }) {
  // IDに基づいてコンペ情報を取得
  const competition = competitions.find(c => c.id === parseInt(params.id));

  if (!competition) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">コンペティションが見つかりません</h1>
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      <Link 
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
      >
        ← トップページに戻る
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-3xl font-bold">{competition.title}</h1>
          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-100">
            {competition.category}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="w-5 h-5 mr-2" />
            <span>締切: {competition.deadline}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Users className="w-5 h-5 mr-2" />
            <span>参加者: {competition.participants}/{competition.maxParticipants}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Trophy className="w-5 h-5 mr-2" />
            <span>難易度: {competition.difficulty}</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Book className="w-5 h-5 mr-2" />
            概要
          </h2>
          <p className="whitespace-pre-line">{competition.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="flex items-center text-xl font-semibold mb-4">
              <Timer className="w-5 h-5 mr-2" />
              ルール
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {competition.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center text-xl font-semibold mb-4">
              <Award className="w-5 h-5 mr-2" />
              賞品
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {competition.prizes.map((prize, index) => (
                <li key={index}>{prize}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">評価基準</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {competition.evaluationCriteria.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/matching">
            <button className="bg-blue-600 text-white rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-200 font-medium">
              参加する
            </button>
          </Link>
          <Link href="/codescoring">
            <button className="bg-blue-600 text-white rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-200 font-medium">
              提出する
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

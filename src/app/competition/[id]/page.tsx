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
  },
  {
    id: 5,
    title: "WEB開発イノベーションコンペ",
    description: "最新のWeb技術を駆使した革新的なWebアプリケーションの開発を競うコンペティション",
    longDescription: `
      このコンペティションでは、参加者は最新のWeb技術を活用して、ユーザー体験に優れたWebアプリケーションを開発します。
      
      主な課題：
      - レスポンシブデザインの実装
      - パフォーマンス最適化
      - セキュリティ対策の強化
      
      ユーザーインターフェースとバックエンドの両面からの最適化が求められます。
    `,
    deadline: "2025/5/10",
    participants: 35,
    maxParticipants: 70,
    category: "WEB開発",
    difficulty: "中級",
    rules: [
      "オリジナルのコードで開発すること",
      "最新のWebフレームワークを活用可能",
      "セキュリティガイドラインを遵守",
      "パフォーマンス最適化を図ること"
    ],
    prizes: [
      "1位: 賞金30万円",
      "2位: 賞金20万円",
      "3位: 賞金10万円"
    ],
    evaluationCriteria: [
      "ユーザー体験（40%）",
      "パフォーマンス（30%）",
      "デザイン（20%）",
      "セキュリティ（10%）"
    ]
  },
  {
    id: 6,
    title: "モバイルアプリ開発チャレンジ",
    description: "革新的なモバイルアプリのアイデアと実装を競うコンペティション",
    longDescription: `
      このコンペティションでは、参加者は直感的で使いやすいモバイルアプリを企画・開発します。
      
      主な課題：
      - ユーザーインターフェースの最適化
      - パフォーマンスの向上
      - クロスプラットフォーム対応
      
      斬新なアイデアと技術力が評価されます。
    `,
    deadline: "2025/5/20",
    participants: 40,
    maxParticipants: 80,
    category: "モバイルアプリ",
    difficulty: "上級",
    rules: [
      "オリジナルのアプリであること",
      "指定されたプラットフォームに準拠すること",
      "UIガイドラインの遵守",
      "プロトタイプの提出必須"
    ],
    prizes: [
      "1位: 最新スマートフォン",
      "2位: タブレット",
      "3位: アプリ開発ツールセット"
    ],
    evaluationCriteria: [
      "UI/UX（35%）",
      "パフォーマンス（35%）",
      "技術的実現可能性（20%）",
      "革新性（10%）"
    ]
  }
];

export default function CompetitionDetail({ params }: { params: { id: string } }) {
  // IDに基づいてコンペ情報を取得
  const competition = competitions.find(c => c.id === parseInt(params.id));

  if (!competition) {
    return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-[#114260]">コンペティションが見つかりません</h1>
        <Link 
          href="/"
          className="text-[#114260] hover:opacity-80 transition-colors duration-200"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto bg-white">
      <Link 
        href="/"
        className="inline-flex items-center text-[#114260] hover:opacity-80 transition-colors duration-200 mb-6"
      >
        ← トップページに戻る
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-3xl font-bold">{competition.title}</h1>
          <span className="inline-flex items-center rounded-full bg-[#114260] px-3 py-1.5 text-sm font-medium text-white">
            {competition.category}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center text-[#114260]">
            <Calendar className="w-5 h-5 mr-2 text-[#114260]" />
            <span>締切: {competition.deadline}</span>
          </div>
          <div className="flex items-center text-[#114260]">
            <Users className="w-5 h-5 mr-2 text-[#114260]" />
            <span>参加者: {competition.participants}/{competition.maxParticipants}</span>
          </div>
          <div className="flex items-center text-[#114260]">
            <Trophy className="w-5 h-5 mr-2 text-[#114260]" />
            <span>難易度: {competition.difficulty}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-4 text-[#114260]">
            <Book className="w-5 h-5 mr-2 text-[#114260]" />
            概要
          </h2>
          <p className="whitespace-pre-line text-[#114260] opacity-90">{competition.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="flex items-center text-xl font-semibold mb-4 text-[#114260]">
              <Timer className="w-5 h-5 mr-2 text-[#114260]" />
              ルール
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#114260]">
              {competition.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center text-xl font-semibold mb-4 text-[#114260]">
              <Award className="w-5 h-5 mr-2 text-[#114260]" />
              賞品
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#114260]">
              {competition.prizes.map((prize, index) => (
                <li key={index}>{prize}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#114260]">評価基準</h2>
          <ul className="list-disc list-inside space-y-2 text-[#114260]">
            {competition.evaluationCriteria.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="/matching">
            <button className="bg-[#114260] text-white rounded-lg px-8 py-3 hover:opacity-90 transition-all duration-200 font-medium shadow-md">
              参加する
            </button>
          </Link>
          <Link href="/codescoring">
            <button className="bg-[#114260] text-white rounded-lg px-8 py-3 hover:opacity-90 transition-all duration-200 font-medium shadow-md">
              提出する
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

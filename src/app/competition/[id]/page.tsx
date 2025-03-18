import { Calendar, Users, Trophy, Book, Award, Timer } from "lucide-react";
import Link from "next/link";

// 仮のコンペデータ（後でAPIなどから取得する）
const competitions = [
  {
    id: 1,
    title: "WEBパフォーマンスチャレンジ 2025",
    description:
      "効率的なWEBアルゴリズムとパフォーマンス最適化を競うコンペティション",
    longDescription:
      "このコンペティションでは、参加者は最新のWEB技術を用いて、サーバーサイドおよびクライアントサイドで効率的なアルゴリズムを実装し、全体のパフォーマンスを最大化することを求められます。\n\n" +
      "主な課題：\n" +
      "- レスポンス時間の短縮\n" +
      "- サーバー負荷の軽減\n" +
      "- スケーラブルな設計の実現\n\n" +
      "参加者は自身の実装したアルゴリズムが、実際のWEBアプリケーションでどれだけ効率的に動作するかを競い合います。",
    deadline: "2025/4/30",
    participants: 45,
    maxParticipants: 100,
    category: "WEB",
    difficulty: "中級",
    rules: [
      "すべての提出は指定されたWEBフレームワークで実装すること",
      "外部ライブラリの使用は制限付き",
      "提出されたコードは自動テストにより評価",
      "コードの可読性も評価対象",
    ],
    prizes: ["1位: 賞金30万円", "2位: 賞金20万円", "3位: 賞金10万円"],
    evaluationCriteria: [
      "パフォーマンス（40%）",
      "リソース使用量（30%）",
      "コードの品質（20%）",
      "ドキュメント（10%）",
    ],
  },
  {
    id: 2,
    title: "モバイルUXデザインバトル",
    description: "革新的なモバイルユーザーインターフェースのデザインコンペ",
    longDescription:
      "最新のモバイルトレンドとユーザビリティを考慮した、革新的なモバイルUI/UXデザインを競うコンペティションです。\n\n" +
      "主な課題：\n" +
      "- モバイルファースト設計\n" +
      "- アクセシビリティの確保\n" +
      "- インタラクティブなユーザー体験の提供\n\n" +
      "参加者は実際のモバイルアプリケーションを想定したデザイン課題に取り組み、ユーザーの使いやすさと革新性を競い合います。",
    deadline: "2025/5/15",
    participants: 28,
    maxParticipants: 50,
    category: "モバイル",
    difficulty: "上級",
    rules: [
      "オリジナルのデザインであること",
      "指定されたモバイルデザインシステムに従うこと",
      "アクセシビリティガイドラインの遵守",
      "プロトタイプの提出必須",
    ],
    prizes: [
      "1位: 最新デザインツール年間ライセンス",
      "2位: デザインワークショップ参加権",
      "3位: デザイン書籍セット",
    ],
    evaluationCriteria: [
      "デザインの革新性（30%）",
      "ユーザビリティ（30%）",
      "アクセシビリティ（20%）",
      "技術的実現可能性（20%）",
    ],
  },
  {
    id: 3,
    title: "WEB AI統合チャレンジ",
    description:
      "最新のAI技術を活用したWEBアプリケーションの最適化に挑戦するコンペティション",
    longDescription:
      "このコンペティションでは、参加者はWEBアプリケーションにAI技術を統合し、ユーザー体験や業務効率の向上を目指します。\n\n" +
      "主な課題：\n" +
      "- AIモデルの統合と最適化\n" +
      "- リアルタイムデータ処理の効率化\n" +
      "- ユーザーインターフェースとのシームレスな連携\n\n" +
      "参加者は実装したソリューションのパフォーマンスと革新性を競い合います。",
    deadline: "2025/4/20",
    participants: 67,
    maxParticipants: 150,
    category: "WEB",
    difficulty: "上級",
    rules: [
      "指定されたWEBフレームワークで実装すること",
      "AIモデル統合に関するガイドラインを遵守すること",
      "外部APIの使用は制限付き",
      "自動テストにより評価",
    ],
    prizes: ["1位: 賞金30万円", "2位: 賞金20万円", "3位: 賞金10万円"],
    evaluationCriteria: [
      "AI統合効率（40%）",
      "パフォーマンス（30%）",
      "コードの品質（20%）",
      "ドキュメント（10%）",
    ],
  },
  {
    id: 4,
    title: "WEBセキュリティハッカソン",
    description:
      "WEBアプリケーションの脆弱性を見つけて修正するコンペティション",
    longDescription:
      "このコンペティションでは、参加者は最新のWEBアプリケーションに対するセキュリティの脆弱性を検出し、効果的な修正策を提案します。\n\n" +
      "主な課題：\n" +
      "- 脆弱性の迅速な発見\n" +
      "- セキュリティ対策の実装\n" +
      "- コードの安全性の向上\n\n" +
      "参加者は発見した問題点とその修正提案の実効性を競い合います。",
    deadline: "2025/5/1",
    participants: 32,
    maxParticipants: 80,
    category: "WEB",
    difficulty: "中級",
    rules: [
      "オリジナルのコードで脆弱性を検出すること",
      "指定されたセキュリティガイドラインを遵守すること",
      "自動テストによる評価を受けること",
      "修正提案も併せて提出すること",
    ],
    prizes: ["1位: 賞金30万円", "2位: 賞金20万円", "3位: 賞金10万円"],
    evaluationCriteria: [
      "セキュリティ堅牢性（40%）",
      "修正提案の有効性（30%）",
      "コードの品質（20%）",
      "レポートの詳細度（10%）",
    ],
  },
  {
    id: 5,
    title: "WEB開発イノベーションコンペ",
    description:
      "最新のWeb技術を駆使した革新的なWebアプリケーションの開発を競うコンペティション",
    longDescription:
      "このコンペティションでは、参加者は最新のWeb技術を活用して、ユーザー体験に優れたWebアプリケーションを開発します。\n\n" +
      "主な課題：\n" +
      "- レスポンシブデザインの実装\n" +
      "- パフォーマンス最適化\n" +
      "- セキュリティ対策の強化\n\n" +
      "ユーザーインターフェースとバックエンドの両面からの最適化が求められます。",
    deadline: "2025/5/10",
    participants: 35,
    maxParticipants: 70,
    category: "WEB",
    difficulty: "中級",
    rules: [
      "オリジナルのコードで開発すること",
      "最新のWebフレームワークを活用可能",
      "セキュリティガイドラインを遵守",
      "パフォーマンス最適化を図ること",
    ],
    prizes: ["1位: 賞金30万円", "2位: 賞金20万円", "3位: 賞金10万円"],
    evaluationCriteria: [
      "ユーザー体験（40%）",
      "パフォーマンス（30%）",
      "デザイン（20%）",
      "セキュリティ（10%）",
    ],
  },
  {
    id: 6,
    title: "モバイルアプリ開発チャレンジ",
    description: "革新的なモバイルアプリのアイデアと実装を競うコンペティション",
    longDescription:
      "このコンペティションでは、参加者は直感的で使いやすいモバイルアプリを企画・開発します。\n\n" +
      "主な課題：\n" +
      "- ユーザーインターフェースの最適化\n" +
      "- パフォーマンスの向上\n" +
      "- クロスプラットフォーム対応\n\n" +
      "斬新なアイデアと技術力が評価されます。",
    deadline: "2025/5/20",
    participants: 40,
    maxParticipants: 80,
    category: "モバイル",
    difficulty: "上級",
    rules: [
      "オリジナルのアプリであること",
      "指定されたプラットフォームに準拠すること",
      "UIガイドラインの遵守",
      "プロトタイプの提出必須",
    ],
    prizes: [
      "1位: 最新スマートフォン",
      "2位: タブレット",
      "3位: アプリ開発ツールセット",
    ],
    evaluationCriteria: [
      "UI/UX（35%）",
      "パフォーマンス（35%）",
      "技術的実現可能性（20%）",
      "革新性（10%）",
    ],
  },
];

export default function CompetitionDetail({
  params,
}: {
  params: { id: string };
}) {
  // IDに基づいてコンペ情報を取得
  const competition = competitions.find((c) => c.id === parseInt(params.id));

  if (!competition) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#114260]">
            コンペティションが見つかりません
          </h1>
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
            <span>
              参加者: {competition.participants}/{competition.maxParticipants}
            </span>
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
          <p className="whitespace-pre-line text-[#114260] opacity-90">
            {competition.longDescription}
          </p>
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
          <h2 className="text-xl font-semibold mb-4 text-[#114260]">
            評価基準
          </h2>
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
            <button className="border-2 border-[#114260] text-[#114260] rounded-lg px-8 py-3 hover:bg-gray-50 transition-all duration-200 font-medium shadow-md">
              提出する
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

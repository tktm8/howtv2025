import { NextResponse } from 'next/server';
import { ChatRoom } from '@/app/talkroom/types';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // TODO: 実際のデータベースからユーザーのチャットルーム一覧を取得する
    const rooms: ChatRoom[] = [
      {
        id: 'room1',
        name: 'コーディング相談',
        lastMessage: 'TypeScriptの型について質問があります',
        lastMessageTime: new Date(Date.now() - 1800000).toISOString(),
        participants: ['user123', 'user456'],
      },
      {
        id: 'room2',
        name: 'アルゴリズム勉強会',
        lastMessage: '動的計画法の解説ありがとうございました',
        lastMessageTime: new Date(Date.now() - 3600000).toISOString(),
        participants: ['user123', 'user789', 'user012'],
      },
      {
        id: 'room3',
        name: 'Web開発メンタリング',
        lastMessage: 'Next.jsのルーティングについて教えていただけますか？',
        lastMessageTime: new Date(Date.now() - 7200000).toISOString(),
        participants: ['user123', 'user345'],
      },
    ];

    return NextResponse.json(rooms);
  } catch (error) {
    console.error('Error fetching chat rooms:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

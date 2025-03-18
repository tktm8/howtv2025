import { NextResponse } from 'next/server';
import { Message } from '@/app/talkroom/types';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const roomId = searchParams.get('roomId');

    if (!roomId) {
      return NextResponse.json(
        { error: 'Room ID is required' },
        { status: 400 }
      );
    }

    // TODO: 実際のデータベースからメッセージを取得する
    const messages: Message[] = [
      {
        id: '1',
        content: 'TypeScriptのジェネリック型の使い方について質問があります。Array<T>とT[]の違いは何でしょうか？',
        senderId: 'user456',
        senderName: '山田太郎',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        isMine: false,
      },
      {
        id: '2',
        content: 'どちらも同じ意味ですが、T[]の方が簡潔で読みやすいため、一般的にはこちらが好まれます。ただし、複雑な型の場合はArray<T>の方が明確になることもあります。',
        senderId: 'user123',
        senderName: '鈴木一郎',
        timestamp: new Date(Date.now() - 3300000).toISOString(),
        isMine: true,
      },
      {
        id: '3',
        content: 'なるほど！読みやすさを重視するんですね。他にも型についてアドバイスがあればお願いします。',
        senderId: 'user456',
        senderName: '山田太郎',
        timestamp: new Date(Date.now() - 3000000).toISOString(),
        isMine: false,
      },
      {
        id: '4',
        content: 'TypeScriptでは型推論を活用することをお勧めします。過度に型を指定すると冗長になることがあります。また、anyの使用は最小限にして、unknown型の活用を検討してください。',
        senderId: 'user123',
        senderName: '鈴木一郎',
        timestamp: new Date(Date.now() - 2700000).toISOString(),
        isMine: true,
      }
    ];

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { roomId, content, senderId } = body;

    if (!roomId || !content || !senderId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: 実際のデータベースにメッセージを保存する
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      senderId,
      senderName: '鈴木一郎', // TODO: 実際のユーザー名を取得する
      timestamp: new Date().toISOString(),
      isMine: true,
    };

    return NextResponse.json(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  timestamp: string;
  isMine: boolean;
}

export interface ChatRoom {
  id: string;
  name: string;
  lastMessage?: string;
  lastMessageTime?: string;
  participants: string[];
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

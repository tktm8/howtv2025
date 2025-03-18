'use client';

import dynamic from 'next/dynamic';

const ChatUI = dynamic(() => import('./talkroom'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#114260]" />
    </div>
  ),
});

export default function ClientPage() {
  return <ChatUI />;
}

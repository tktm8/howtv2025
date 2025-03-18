export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#114260]" />
      <span className="sr-only">読み込み中...</span>
    </div>
  );
};

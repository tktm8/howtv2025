'use client';

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ score: number; feedback: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("https://<YOUR_CLOUD_FUNCTION_URL>", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("API call failed");
      }

      const data = await res.json();
      setResult({ score: data.score, feedback: data.feedback });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-6">ZIPファイルをアップロード</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="file"
          accept=".zip"
          onChange={handleFileChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          disabled={!file || loading}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? "送信中..." : "送信"}
        </button>
      </form>

      {result && (
        <div className="mt-6 border p-4 rounded w-full max-w-md bg-gray-100">
          <p><strong>スコア:</strong> {result.score}</p>
          <p><strong>フィードバック:</strong> {result.feedback}</p>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          エラー: {error}
        </div>
      )}
    </div>
  );
}

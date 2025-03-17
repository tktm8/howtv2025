'use client';

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    developmentScore: number;
    developmentReason: string;
    codeScore: number;
    codeReason: string;
  } | null>(null);
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

      const res = await fetch("https://code-scoring-81993712958.asia-northeast1.run.app", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("API call failed");
      }

      const data = await res.json();
      setResult({
        developmentScore: data.development_reason.score,
        developmentReason: data.development_reason.reason,
        codeScore: data.code_quality.score,
        codeReason: data.code_quality.reason,
      });
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
        <div className="mt-6 border p-4 rounded w-full max-w-md bg-gray-800 text-white">
          <p><strong>開発理由スコア:</strong> {result.developmentScore} / 10</p>
          <p><strong>開発理由フィードバック:</strong><br />{result.developmentReason}</p>
          <hr className="my-4" />
          <p><strong>コード品質スコア:</strong> {result.codeScore} / 10</p>
          <p><strong>コード品質フィードバック:</strong><br />{result.codeReason}</p>
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

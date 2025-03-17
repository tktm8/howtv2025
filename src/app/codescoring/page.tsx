'use client';

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/zip': ['.zip'],
    },
    multiple: false,
  });

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
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "不明なエラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
        <h1 className="text-3xl font-bold mb-8 text-[#114260] text-center">コードスコアリング</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
              isDragActive
                ? 'border-[#114260] bg-gray-50'
                : 'border-gray-300 hover:border-[#114260]'
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-4 text-gray-600">
              <div className="mb-2">
                {file ? (
                  <p className="text-lg">{file.name}</p>
                ) : (
                  <p className="text-lg">ZIPファイルをドロップまたはクリックして選択</p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!file || loading}
            className="bg-[#114260] text-white py-3 px-6 rounded-lg font-semibold shadow-md disabled:opacity-50 transition-all duration-300 hover:bg-[#0d314a] hover:scale-105"
          >
            {loading ? "送信中..." : "分析開始"}
          </button>
        </form>

        {result && (
          <div className="mt-8 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#114260]">開発理由評価</h3>
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-2xl font-bold ${
                      result.developmentScore >= 8
                        ? 'text-emerald-500'
                        : result.developmentScore >= 4
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}>{result.developmentScore}</span>
                  </div>
                  <svg className="transform -rotate-90 w-16 h-16">
                    <circle
                      className="text-gray-100"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="32"
                      cy="32"
                    />
                    <circle
                      className={`${
                        result.developmentScore >= 8
                          ? 'text-emerald-500'
                          : result.developmentScore >= 4
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                      strokeWidth="4"
                      strokeDasharray={188.5}
                      strokeDashoffset={188.5 - (result.developmentScore / 10) * 188.5}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="32"
                      cy="32"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{result.developmentReason}</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#114260]">コード品質評価</h3>
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-2xl font-bold ${
                      result.codeScore >= 8
                        ? 'text-emerald-500'
                        : result.codeScore >= 4
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}>{result.codeScore}</span>
                  </div>
                  <svg className="transform -rotate-90 w-16 h-16">
                    <circle
                      className="text-gray-100"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="32"
                      cy="32"
                    />
                    <circle
                      className={`${
                        result.codeScore >= 8
                          ? 'text-emerald-500'
                          : result.codeScore >= 4
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                      strokeWidth="4"
                      strokeDasharray={188.5}
                      strokeDashoffset={188.5 - (result.codeScore / 10) * 188.5}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="30"
                      cx="32"
                      cy="32"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{result.codeReason}</p>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg">
            <p className="text-red-600">エラー: {error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

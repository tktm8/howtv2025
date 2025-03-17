'use client';

// import Survey from "./components/Survey";
import SkillMatcher from "./matchpage";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>マッチング</h1>
      {/* <Survey /> */}
      <SkillMatcher />
    </main>
  );
}
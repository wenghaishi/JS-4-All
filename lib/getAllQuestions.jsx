export default async function getAllQuestions() {
  const response = await fetch(`https://js-4-all.vercel.app/api/questions`, { cache: 'no-store' });
  // if (!response.ok) throw new Error("failed to fetched data");
  return response.json();
}

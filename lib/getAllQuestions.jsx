export default async function getAllQuestions() {
  const response = await fetch(`${process.env.NEXT_API}/api/questions`, { cache: 'no-store' });
  // if (!response.ok) throw new Error("failed to fetched data");
  return response.json();
}

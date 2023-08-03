export default async function getAllQuestions() {
  const response = await fetch(`${process.env.API}/api/questions`);
  // if (!response.ok) throw new Error("failed to fetched data");
  return response.json();
}

export default async function getAllQuestions() {
  const response = await fetch("http://localhost:3000/api/questions");
  // if (!response.ok) throw new Error("failed to fetched data");
  return response.json();
}

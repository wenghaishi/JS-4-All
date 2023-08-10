export default async function getAllFlashcards(category) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/flashcards/${category}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("failed to fetched data");
  const jsFlashcards = await response.json();
  return jsFlashcards;
}

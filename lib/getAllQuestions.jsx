export default async function getAllQuestions() {
  const response = await fetch(`${process.env.API}/api/questions`, { cache: 'no-store' });
  // if (!response.ok) throw new Error("failed to fetched data");

  // const contentType = response.headers.get("content-type");
  // if (contentType.includes("text/html")) {
  //   return null; // Return null if the response is HTML
  // }

  return response;
}

export default async function getAllQuestions() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await fetch(`${apiUrl}/api/questions`, { cache: 'no-store' });
    
    if (!response.ok) {
      const errorData = await response.text(); // Log the error response content
      console.error(`API error response: ${errorData}`);
      throw new Error(`Failed to fetch data. Server response: ${errorData}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error during data fetching: ${error.message}`);
  }
}

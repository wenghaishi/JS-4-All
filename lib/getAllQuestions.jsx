export default async function getAllQuestions() {
  try {
    const response = await fetch(`${process.env.NEXT_API}/api/questions`, { cache: 'no-store' });
    
    if (!response.ok) {
      const errorData = await response.json(); // Try to parse error response
      throw new Error(`Failed to fetch data. Server response: ${JSON.stringify(errorData)}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error during data fetching: ${error.message}`);
  }
}

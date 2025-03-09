const FASTAPI_URL = "http://127.0.0.1:8080/chat/interpret"; // FastAPI backend

export const fetchResponseFromAPI = async (message: string) => {
  try {
    if (!message.trim()) {
      console.warn("Invalid message received.");
      return { message: "Invalid request." };
    }

    const response = await fetch(FASTAPI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      console.warn(`No response data found for message: ${message}`);
      return { message: "No response from server." };
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching API response:", error.message);
    return { message: `Error fetching response: ${error.message}` };
  }
};

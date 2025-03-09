// services/chatService.ts

const FASTAPI_URL = "http://127.0.0.1:8000/bookings"; // Reemplaza con tu endpoint real

export const fetchResponseFromAPI = async (bookingId: string) => {

  try {
    const response = await fetch(`/api/booking/${bookingId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      console.warn(`No data found for booking ID: ${bookingId}`);
      return null;
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching booking details:", error.message);
    return null;
  }
};


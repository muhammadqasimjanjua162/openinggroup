// Define TypeScript interface for a User
export interface Property {
  id: number;
  title: string;
  propertyId: string;
}

// Base API URL (optional: useful if you have multiple endpoints)
const BASE_URL = "https://crm.stefannita.ro/api";

// Function to fetch users
export const fetchProperties = async (): Promise<Property[]> => {
  const response = await fetch(`${BASE_URL}/listings`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const result = await response.json();
  return result.data; // ✅ Extract only the array of properties
};

import { useRuntimeConfig } from "#app";

interface LoginResponse {
  token: string;
}

export const loginApi = async (email: string, password: string): Promise<LoginResponse> => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  console.log("Sending Data:", JSON.stringify({ email, password }));

  const response = await fetch(`${apiBase}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // ✅ Ensure JSON format
    },
    body: JSON.stringify({ email, password }), // ✅ Fix incorrect payload format
  });

  const data = await response.json();
  console.log("Response:", data);

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

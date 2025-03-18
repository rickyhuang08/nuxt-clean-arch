import { useRuntimeConfig, useFetch } from '#app';

interface User {
  id: number;
  username: string;
  email: string;
}

interface ProfileResponse {
  user: User;
}

export const getProfile = async (): Promise<ProfileResponse> => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  const { data, error } = await useFetch<ProfileResponse>(`${apiBase}/profile`);
  
  if (error.value) throw new Error(error.value.message);
  
  return data.value as ProfileResponse; // Explicitly cast to the correct type
};
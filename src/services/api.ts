
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173';


const endpoints = {
    getClients: () => `${BASE_URL}/clients`,
    getClientById: (id: number) => `${BASE_URL}/clients/${id}`,
  };

export const apiService = {
    fetchClients: async () => {
        try{
            const response = await fetch(endpoints.getClients());
            if(!response.ok) throw new Error("fetchClients network error");
            return await response.json();
        }catch (error){
            console.log('fetchClients error: ' ,error);
        }
    }





}
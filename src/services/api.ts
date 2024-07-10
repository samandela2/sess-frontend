
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const endpoints = {

    
    base_url : BASE_URL,
    login : `${BASE_URL}/login`,
    home: `${BASE_URL}/home`,





    // getClients: () => `${BASE_URL}/clients`,
    // getClientById: (id: number) => `${BASE_URL}/clients/${id}`,
  };

// export const apiService = {
//     fetchClients: async () => {
//         try{
//             const response = await fetch(endpoints.getClients());
//             if(!response.ok) throw new Error("fetchClients network error");
//             return await response.json();
//         }catch (error){
//             console.log('fetchClients error: ' ,error);
//         }
//     }





// }
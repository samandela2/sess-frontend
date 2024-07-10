export async function fetchWithToken(url: string, options: RequestInit = {}) {
    const token = localStorage.getItem("token");

    if(!token) {
        console.error("No token found");
        return ;
    }
  
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  
    console.log("fetchWithToken called");

    return response;
  }
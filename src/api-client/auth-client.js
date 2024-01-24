const BASE_URL = 'http://localhost:3000/api/auth'; // Replace with your actual API base URL

const authClient = {
  register: async (userData) => {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      return response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  },

  login: async (loginData) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      return response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  },
  logout: async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        credentials: 'include', // Include credentials (cookies) in the request
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      return response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  },
  validuser: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/validuser`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      })   
      if(!response.ok){
        throw new Error('Login failed');   
      }

      return response.json();
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }

  }
  // Add other API calls here (e.g., forgot password, get user details, etc.)
};

export default authClient;

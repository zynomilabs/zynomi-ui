import axios from 'axios'
    
    const apiClient = axios.create({
      baseURL: 'http://localhost:5000/content-api',
      withCredentials: false, 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    
    export default {
      getSettings() {
        return apiClient.get('/settings')
      }
    }
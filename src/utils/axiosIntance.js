import axios from "axios";

   const axiosInstance = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     withCredentials: true, // only needed if you're using cookies/sessions
   });

   export default axiosInstance;
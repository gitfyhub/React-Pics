import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 3312454b615ea8801d4fb5f5d74a390541c0f758eeac1c4ee11aa5e6b84dafe5"
  }
});

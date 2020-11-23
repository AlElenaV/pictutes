import axios from "axios"

export default axios.create({
  baseURL: " https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5fF9s0n44k-t8UL5jpAwvfvm-YIh4uM11wxV5I9J0sE"
  }
})

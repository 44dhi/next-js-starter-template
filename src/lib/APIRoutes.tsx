import axios from "axios"


export const getAllPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}

export const getPostForId = (id: string) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

}
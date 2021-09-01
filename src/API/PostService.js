import axios from 'axios'

export default class PostService {
    static async getAll(limit, page) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            },
        })
        return responce
    }
    static async getById(id) {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return responce
    }
    static async getCommentsByPostId (id) {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return responce
    }
}



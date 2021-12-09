import axios from "axios"

const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333"
const url = backendUrl + "/todos"

export default class MongoDB {

    async add(description) {
        if(!description.trim() || description.length > 32) return
        await axios.post(url, {description: description})
            .catch(err => console.log("Failed\n" + err.message))
    }

    async getAll(description = "") {
        const search = description ? `&description__regex=/${description}/` : ""
        let data = []
        
        await axios.get(`${url}?sort=-createdAt${search}`)
            .then(resp => {
                data = resp.data || []
            })
            .catch(err => {
                console.log("Failed\n" + err.message)
            })

        return data
    }

    async update(task, done) {
        await axios.put(`${url}/${task._id}`, { ...task, done: done })
            .catch(err => console.log("Failed\n" + err.message))
    }

    async remove(_id) {
        await axios.delete(`${url}/${_id}`)
            .catch(err => console.log("Failed\n" + err.message))
    }
}
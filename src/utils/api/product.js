import axios from "axios"

export default {
	getAll: () => axios.get("http://localhost:9000/api/posts")
}
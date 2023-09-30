import axios from "axios"

export default {
	getAll: async () => await axios.get("https://bakery-database.onrender.com/burger")
} 
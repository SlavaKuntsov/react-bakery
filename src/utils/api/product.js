import axios from "axios"

export default {
	getAll: async () => await axios.get("https://bakery-database.onrender.com/burger"),
	getCatalogItemsL: async type => await axios.get(`http://localhost:9999/catalogItems?category=${type}`)
} 
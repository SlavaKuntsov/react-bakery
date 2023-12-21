import axios from "axios"

export default {
	getAll: async () => await axios.get("https://bakery-backend-9dyd.onrender.com/burger"),
	getCatalogItemsL: async type => await axios.get(`https://bakery-backend-9dyd.onrender.com/catalogItems?category=${type}`)
} 
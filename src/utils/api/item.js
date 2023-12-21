import axios from "axios"

export default {
	getItemById: async id => await axios.get(`https://bakery-backend-9dyd.onrender.com/item?id=${id}`)
} 
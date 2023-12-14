import axios from "axios"

export default {
	getItemById: async id => await axios.get(`http://localhost:9999/item?id=${id}`)
} 
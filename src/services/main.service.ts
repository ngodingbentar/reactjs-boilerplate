import axios from 'axios'

function getAllProducts (callback) {
  axios
    .get('/api/products')
    .then((res) => callback(res.data))
    .catch((error) => console.log(error))
}

export { getAllProducts }
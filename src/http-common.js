import axios from 'axios';

export default axios.create({
   baseURL: 'https://fast-wildwood-30146.herokuapp.com/api',
   headers: {
         "Content-type": "application/json"
   }
});
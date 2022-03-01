import axios from 'axios'
import {ba} from './constents/Constents'

const instance = axios.create({
    baseURL: baseUrl,
   
  });
  export default instance
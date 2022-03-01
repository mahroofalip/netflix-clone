import axios from 'axios'
import {baseURL} from './constents/Constents'

const instance = axios.create({
    baseURL: baseURL,
   
  });
  export default instance
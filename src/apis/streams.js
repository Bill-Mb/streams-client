import axios from 'axios';


/**
 * Like that we have the basic url when call axios generally
 */
export default axios.create({
  baseURL: 'http://localhost:3001'
});
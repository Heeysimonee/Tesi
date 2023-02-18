import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:80/v1`, 
});

export default {
  prova() {
    return instance.post(`/regions`);
  },
  getStructureBasedOnVacation(payload){
    return instance.post(`/structures`, payload)
  },
  userLogin(payload){
    return instance.post(`/user/login`, payload)
  }
};

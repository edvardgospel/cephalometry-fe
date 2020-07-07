import axios from 'axios'

const SERVER_URL = 'https://cephalometry-be-mock.herokuapp.com';

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000
});

export default {
  // (C)reate  
  createNew: body => instance.post('cephalometry', body),
  // (R)ead  
  getAll: () => instance.get('cephalometry', {
    transformResponse: [function (data) {
      return data;
    }]
  }),
  // (U)pdate  
  updateForId: (id, body) => instance.put('cephalometry/' + id, body),
  // (D)elete  
  removeForId: (id) => instance.delete('cephalometry/' + id)
}
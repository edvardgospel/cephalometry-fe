import axios from 'axios'

const SERVER_URL = 'http://localhost:9000';

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000
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
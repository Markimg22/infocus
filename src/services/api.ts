import { create } from 'apisauce';

const api = create({
  baseURL: 'http://10.0.2.2:3333',
});

api.addResponseTransform((response) => {
  if (!response.ok) {
    throw response;
  }
});

export default api;

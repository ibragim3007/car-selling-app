type IMethod = 'POST' | 'GET';

interface ApiConfig {
  [key: string]: { [key: string]: { url: string; method: IMethod } };
}

const apiConfig = {
  user: {
    login: { url: '/login', method: 'POST' },
    user: { url: '/user', method: 'GET' },
  },
  car: {
    cars: { url: '/cars', method: 'GET' },
    car: { url: '/cars', method: 'GET' },
  },
};

export default apiConfig;

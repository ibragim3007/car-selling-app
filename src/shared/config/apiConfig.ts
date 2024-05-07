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
  news: {
    news: { url: '/news', method: 'GET' },
  },
  filter: {
    filters: { url: '/filters', method: 'GET' },
    delete: { url: '/filters', method: 'DELETE' },
  },
};

export default apiConfig;
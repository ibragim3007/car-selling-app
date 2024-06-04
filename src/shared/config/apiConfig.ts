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
    create: { url: '/filters', method: 'POST' },
    edit: { url: '/filters', method: 'PUT' },
  },
  dictionary: {
    dictionary: { url: '/dictionaries', method: 'GET' },
    regions: { url: '/regions', method: 'GET' },
    markaModel: { url: '/markamodel', method: 'GET' },
    models: { url: '/models', method: 'GET' },
    sourcegroups: { url: '/sourcegroups', method: 'GET' },
    cities: { url: '/cities', method: 'GET' },
  },
};

export default apiConfig;

import NetInfo from '@react-native-community/netinfo';
import constants from '../utils/constants';


const networkError = {
  response: {
    api_status: constants.network_code,
    noNetwork: constants.no_Network,
  },
};

const RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};


const get = async (url,body) => {
  let network;
  await NetInfo.fetch().then(state => (network = state.isConnected));
  if (network) {
    return callGetApi(RequestMethod.GET, url,body);
  } else {
    return networkError;
  }
};

const callGetApi = async (requestMethod, url,body) => {
  let headers={
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  let requestInit = {
      headers: headers,
      method: requestMethod,
    };
  console.log(url,'url')
console.log(requestInit,'requestInit')
  return fetch(`${url}`, requestInit)
    .then(response => {
      const statusCode = response.status;
      return new Promise((resolve, reject) => {
        response
          .json()
          .then(response => {
            resolve({ response, statusCode });
          })
          .catch(error => {
            alert(error);
            console.log('result ', error);
            reject('Invalid Response!');
          });
      });
    })
    .catch(error => {
      console.log('error ', error);
      alert('Something went wrong!');
    });
};


export default {
  get,
};

const Environment = {
  STAGING: 'https://dog.ceo/api',
};

const BaseURL = Environment.STAGING;

const APIRequests = {
  breedImages: BaseURL + '/breeds/image/random',
  
};

export { APIRequests };

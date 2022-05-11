import BaseApiService from './BaseApiServices';
import { APIRequests } from './NetworkConstants';

function getRandomImages(){
  return BaseApiService.get(APIRequests.breedImages)
}


export const API = {
  getRandomImages,
};

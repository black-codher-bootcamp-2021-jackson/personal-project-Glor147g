// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllapibook = async () => {
  const response = await axios.get(`/api/book`);//the way to fetch the API use AXIOS to do the fetching

  return response.data || [];//retuning the data OR empty array
};
//this is connecting to my form file
import { getAllSalons, filterSalons, filterSalonsByLocation } from "../../services/salonService";
const addBookToList = async (BookData) => {
  console.log('ive been added to the list', BookData)
  // const params = {
  //   location: filteredData.location,
  //   services: filteredData.services
  // }
  // const response = await axios.get(`/api/salons/filter`, { params: params });
  // return response.data || [];

}

// All of the endpoints in this file can be exported below
export { getAllmyapibook, addBookToList }; //this will fetch the profiles entered on the landing page

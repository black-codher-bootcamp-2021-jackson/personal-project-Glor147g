// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllProfiles = async () => {
  const response = await axios.get(`/api/myEpicReading`);//the way to fetch the API use AXIOS to do the fetching

  return response.data || [];//retuning the data OR empty array
};

// All of the endpoints in this file can be exported below
export { getAllmyEpicReading }; //this will fetch the profiles entered on the landing page

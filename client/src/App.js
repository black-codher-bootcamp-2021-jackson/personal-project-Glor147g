// import React, { useState, useEffect } from "react";
import MyEpicReading from "./components/MyEpicReading/MyEpicReading";
import EnterBookInfo from "./components/EnterBookInfo/EnterBookInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayBookLog from "./components/DisplayBookLog/DisplayBookLog";
import NavBar from "./components/NavBar/Navbar";

import Header from "./components/Header/Header";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";//we create all our fetches

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <NavBar />
          <Routes>
            <Route>
              <Route
                exact
                path="/"
                element={
                  <>
                    <MyEpicReading />
                  </>
                }
              />
              

              <Route
                exact
                path="/api/book"
                element={
                  <>
                    <EnterBookInfo />
                  </>
                }
              />

              <Route
                exact
                path="/DisplayBookLog"
                element={
                  <>
                    <DisplayBookLog />
                  </>
                }
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

// function App(){
// return (
//   <div>
// <MyEpicReading />

//     </div>

// );

// };

// function App() {
//   const [profiles, setProfiles] = useState(null);//we arent sure what data we'll get
//   //

//   useEffect(() => {//inbuit funtion that creates state change based on what we design eg new data
//     async function getProfiles() {
//       if (!profiles) {
//         const response = await getAllProfiles();
//         setProfiles(response);
//       }

//     }

//     getProfiles();
//   }, [profiles]);

//   //this could be the profile component
//   const renderProfile = (user) => {//how each individual is being rendered
//     return (
//       <li key={user._id}>
//         <h3>
//           {`${user.first_name}
//           ${user.last_name}`}
//         </h3>
//         <p>{user.location}</p>
//       </li>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {profiles && profiles.length > 0 ? ( //if this condition is false then display ln39
//           profiles.map((profile) => renderProfile(profile))
//         ) : (
//           <p>No profiles found</p>
//         )}
//       </ul>
//     </div>
//   );
// }
//null =false

export default App;

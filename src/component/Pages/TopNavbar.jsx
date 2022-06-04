// import React, { useContext, useState } from "react";
// import { ContextApiProvider } from "../../Context/ContextApi";
// // import { ContextApiProvider } from "../../Context/ContextApi";
// // import {FaCart} from "react-icons/fa"
// import "./navbar.css";

// const TopNavbar = () => {

//   const { make, setMake, show, setShow,state, fetchApi } =
//     useContext(ContextApiProvider);

//   // const handleClick=() => {
//   // setState(state)
//   // }
 
 

//   return (
//     <>
//       <div className="top">
//         <div className="left">
//           <h1>GITHUB USER PAGE</h1>
//         </div>
//         <form className="middle" onSubmit={fetchApi}>
//           <label htmlFor="search">Search</label>
//           <input
//             type="text"
//             id="search"
//             placeholder="what you want too see..."
//             value={make}
//             onChange={e => setMake(e.target.value)}
//           />
//         </form>
//         <div>{/* <FaCart/> */}</div>
//       </div>

      
  
//   );
// };

// export default TopNavbar;


import React, { useContext, useState } from "react";
import { ContextApiProvider } from "../../Context/ContextApi";

import "./navbar.css";

const TopNavbar = () => {
  const { make, setMake, handleSubmit } = useContext(ContextApiProvider);
  

  // const handleClick=() => {
  // setState(state)
  // }

  return (
    <div className="top">
      <div className="left">
        <h1>GITHUB FINDER</h1>
      </div>
      <form className="middle" onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          placeholder="what you want too see..."
          onChange={(e) => {setMake(e.target.value)}}
          value={make}
        />
      </form>
     
    </div>
  );
};

export default TopNavbar;


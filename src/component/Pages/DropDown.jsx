// import React, { useState, useEffect, useContext } from 'react';
// import { ContextApiProvider } from '../../Context/ContextApi';
// import "./navbar.css";

// const DropDown = () => {
//   let { show,state } = useContext(ContextApiProvider);

//     // const handleFilter = () => state.filter(val => val.category == make);

//     return (
//       <>

//           <div className="droppy">
//                 {show&& state.map(a => {
//                     return <div>
//                         <h1>{ a.login}</h1>
//                     </div>
//                 })}
//           </div>

//       </>
//     );
// }

// export default DropDown

import React, { useContext, useEffect, useState } from "react";
import { ContextApiProvider } from "../../Context/ContextApi";
import Login from "./Login";
import "./navbar.css";
import { Link } from "react-router-dom";

const DropDown = () => {
  let { make, state, setState } = useContext(ContextApiProvider);
  // let [click, setClick] = useState("");
  // let [input, setInput] = useState("");
  useEffect(() => {
    let fetchapi = () => {
      fetch("https://api.github.com/users")
        .then(data => data.json())

        .then(cobra => setState(cobra))
        .catch(error => console.log(error));
    };
    fetchapi();
  }, []);

  // const handleClick = () => {
  //   setClick(window.open("https://api.github.com/users/mojombo"));
  // };

  return (
    <>
      {make == "" || (
        <>
          <div className="droppy">
            {state
              .filter(val => {
                if (make == "") return false;
                return val.login.includes(make);
              })
             .map(cobi => {
                let { login, avatar_url,html_url } = cobi;

                return (
                  <ul>
                    <li>
                      <img src={avatar_url} alt="" />
                      <span>{login}</span>
                      <button
                        // onClick={e => {
                        //   window.open(`https://api.github.com/users/${login}`);
                        // }}
                      >
                        <a href={html_url}>Login</a>
                      </button>
                    </li>
                  </ul>
                );
              })}
          </div>

        
          <div>
            <Login/>
          </div>
        </>
      )}
    </>
  );
};

export default DropDown;

// import React, { Children, createContext, useState } from "react";
// export const ContextApiProvider = createContext();

// const ContextApi = ({ children }) => {
//     const [make, setMake] = useState("");
//     const [show, setShow] = useState(false);
//     let [state, setState] = useState([]);
    
  
// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     console.log(make);
// //   };
//     let fetchApi = (e) => {
//         e.preventDefault()
//       fetch(`https://api.github.com/users/${make}`)
//         .then(data => data.json())

//           .then(cobra => {
//             setShow(true);
//             setState(cobra);
            
//             console.log(cobra);
//         })
//         .catch(error => console.log(error));
//     };

//   return (
//     <ContextApiProvider.Provider
//       value={{ make, setMake, show, setShow, fetchApi, state, setState }}
//     >
//       {children}
//     </ContextApiProvider.Provider>
//   );
// };

// export default ContextApi;


import React, { Children, createContext, useState } from "react";
export const ContextApiProvider = createContext();

const ContextApi = ({ children }) => {
  const [make, setMake] = useState("");
 
  const [state, setState] = useState([]);
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(make);
  };

  return (
    <ContextApiProvider.Provider
      value={{ make, setMake, handleSubmit,state,setState }}
    >
      {children}
    </ContextApiProvider.Provider>
  );
};

export default ContextApi;

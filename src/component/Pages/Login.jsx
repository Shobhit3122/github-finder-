import React, { useEffect,useContext } from "react";
import { ContextApiProvider } from "../../Context/ContextApi";

const Login = () => {
  let { state, setState } = useContext(ContextApiProvider);
  useEffect(() => {
    let fetchapi = () => {
   
      fetch(`https://api.github.com/users`)
        .then(data => data.json())
        .then(cobra => setState(cobra))
        .catch(error => console.log(error));
    };
    fetchapi();
  }, []);
  return (
    
    <div>
      {state.map(x => {
        let { login, id, type } = x;
        return (
          <div className="logii">
            <h4>SNo:{id}</h4>
            <h4>Name:{login}</h4>
            <p>Status:{type}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Login;

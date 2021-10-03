import { useState } from "react";
import api from "../api/api";
import { FetchState } from "../hooks";

const SignUp = ({ setRegister, dispatch }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch({ type: FetchState.FETCH_INIT });
    try {
      const user = await api.createAccount(email, password, name);
      await api.createSession(email, password);
      dispatch({ type: FetchState.FETCH_SUCCESS, payload: user });
    } catch (e) {
      dispatch({ type: FetchState.FETCH_FAILURE });
    }
  };

  return (
    <>
   


      <h1 className="">Sign Up</h1>
          <p className="">
            {" "}
            Already have an account ?{" "}
            <span
              className=""
              onClick={() => setRegister(false)}
            >
              Login
            </span>{" "}
          </p>

      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input type="password" 
                        className="form-control" 
                        id="name" 
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={!name || !email || !password}
                >
                      Sign Up
                </button>
        </div>
    </>
  );
};

export default SignUp;

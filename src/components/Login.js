import { useState } from "react";
import api from "../api/api";
import SignUp from "./SignUp";
import { FetchState } from "../hooks";

const Login = ({ dispatch }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [register, setRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: FetchState.FETCH_INIT });
    try {
      await api.createSession(email, password);
      const data = await api.getAccount();
      dispatch({ type: FetchState.FETCH_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: FetchState.FETCH_FAILURE });
    }
  };

  return register ? (
    <SignUp setRegister={setRegister} dispatch={dispatch} />
  ) : (
      <>

<h1 className="">Login</h1>
        <p className="mt-6">
          {" "}
          Don't have an account ?{" "}
          <span
            className=""
            onClick={() => setRegister(true)}
          >
            Sign Up
          </span>{" "}
        </p>
      

    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={handleLogin}>
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
                    disabled={!email || !password}
                >
                       Login
                </button>

                </form>
        </div>


    </>
  );
};

export default Login;

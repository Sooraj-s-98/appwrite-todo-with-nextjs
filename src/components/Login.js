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
    <section className="">
      <div className="">
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
        <form onSubmit={handleLogin}>
          <label className=""> Email</label>
          <input
            className=""
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block mt-6"> Password</label>
          <input
            className=""
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-6">
            <button
              type="submit"
              disabled={!email || !password}
              className=""
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default Login;

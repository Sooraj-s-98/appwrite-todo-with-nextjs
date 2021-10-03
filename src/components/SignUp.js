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
      <section className="">
        <div className="">
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
          <form onSubmit={handleSignup}>
            <label className="block mt-6"> Name</label>
            <input
              className=""
              type="text"
              onChange={(e) => setName(e.target.value)}
            />

            <label className="block mt-6"> Email</label>
            {/* “Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.”  */}
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
                disabled={!name || !email || !password}
                className=""
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;

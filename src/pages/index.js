import React from 'react';
import Login from '../components/Login';
import { useGetUser } from "../hooks";
const Index = () => {

  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  return (
    <>
    <div>
    {user ? user : "no"}
      <Login dispatch={dispatch}/>
    </div>
    </>
  );
};

export default Index;



import React from 'react';
import Login from '../components/Login';
import { useGetUser } from "../hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
const Index = () => {

  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  return (
    <>
    <div>
   
      <Login dispatch={dispatch}/>
    </div>
    </>
  );
};

export default Index;



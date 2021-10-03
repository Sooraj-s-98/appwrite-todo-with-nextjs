import React from 'react';
import Login from '../components/Login';
import { useGetUser } from "../hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
const Index = () => {

  const [{ user, isLoading, isError }, dispatch] = useGetUser();
  return (
    <>
       <div className="container d-flex align-items-center flex-column">
   
      <Login dispatch={dispatch}/>
    </div>
    </>
  );
};

export default Index;



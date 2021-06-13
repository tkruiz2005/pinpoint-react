import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Persona = () => {
  const { user, isAuthenticated } = useAuth0();

  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(1);


  useEffect(() => {
    fetch(
      "http://603519736496b9001749e4ee.mockapi.io/personas?mail=tkruiz2005@gmail.com",
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setCommitHistory(response.items);
        setIsLoading(response[0].id);
      })
      .catch(error => console.log(error));
  }, [page]);


  return (
    isAuthenticated && ( 
     <div>
        <h2>IS L= {isLoading}</h2>
      </div>
    )
  )
}

export default Persona
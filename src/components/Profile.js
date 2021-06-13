import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import useCatalogo from "../components/useCatalogo";
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { ClassNames } from '@emotion/react';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();


  const [ catalogos, setCatalogo]  = useState([]);
  const { Catalogo } = useCatalogo(catalogos);

  const useStyles = makeStyles({
    root: {
      maxWidth: 100,
    },
  });

  useEffect(() => {
      const obtenerCatalogos = async () => {
        const resultado = await axios.get("http://603519736496b9001749e4ee.mockapi.io/personas?mail=" + user.email);

        setCatalogo(resultado.data)

      }
      obtenerCatalogos();
  }, [])
 

  return (
    isAuthenticated && ( 
      <Card  className={ClassNames.root}>

        <CardContent>
          <img src={user.picture} alt={user.name} />
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.email}
          </Typography>
        </CardContent>
        <Catalogo/>
      </Card>
      
    )
  )
}

export default Profile

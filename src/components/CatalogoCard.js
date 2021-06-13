import React from 'react';
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

function CatalogoCard({ 
    descripcion
     })

    {

    return (
        <Card  className={ClassNames.item}>
            <CardActionArea>
                <CardMedia />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Beneficio: { descripcion }
                    </Typography>

                </CardContent>
            </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Aceptar
        </Button>
        <Button size="small" color="primary">
          Rechazar
        </Button>

      </CardActions>
    </Card>
    )
}

export default withStyles({
    item: {
        minWidth: "250px",
        margin: "1em",
        boxSizing: "border-box"
    },
    media:{
        minWidth: "100px",
        height: "200px",
        width: "200px"
    }
    }) (CatalogoCard);
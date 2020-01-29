import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    card: {
      width: 275,
      margin: 30
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Friend = props => {

const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;




    return (
        <div >
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {props.friendData.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {props.friendData.age}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {props.friendData.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => props.deleteFriend(props.friendData.id)} size="small">delete</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Friend;
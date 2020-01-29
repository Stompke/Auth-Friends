import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },    
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
  exit: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 5
  }
}));



const Friend = props => {

const [modalStyle] = React.useState(getModalStyle);
const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;




    return (
        <div>
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
                    <Button onClick={handleOpen}  size="small">delete</Button>
                </CardActions>
            </Card>


            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">Are you sure you want to delete {props.friendData.name}?</h2>
                <button onClick={() => props.deleteFriend(props.friendData.id)}>delete for sure</button>
                <button className={classes.exit} onClick={handleClose}>✘</button>
              </div>
            </Modal>
        </div>
    )
}

export default Friend;
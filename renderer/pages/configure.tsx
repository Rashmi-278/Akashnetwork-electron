import React , {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: "65ch"
     }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PaymentForm() {

  const classes = useStyles();
  const  [ dockerImage , setDockerImage ] = useState("ovrclk/lunie-light")

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Configure Deployement
      </Typography>
     
      <TextField id="dockerimage" label="Docker Image" value={dockerImage}  onChange={(e) => { setDockerImage(e.target.value)}} fullWidth />
      <p>I am {dockerImage}</p>
     
      
    </React.Fragment>
  );
}




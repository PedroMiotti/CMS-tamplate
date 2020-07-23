
import React, { useState } from 'react'

// Style
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const SnackLoad = ({show}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(show);

    const handleClick = () => {
        setOpen(show);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(!show);
    };

    return(
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <CircularProgress />
        </Snackbar>
    )
}


export default SnackLoad;
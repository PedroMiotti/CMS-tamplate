import React, { forwardRef } from "react";

// Material UI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_MODAL } from "../../../store/_ui/modal";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal = ({title, description, bttText, bttColor, action}) => {
    
    //_ui
    const modalOpen = useSelector(state => state.ui.modal.isOpen);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(TOGGLE_MODAL())
    };

    return (
        <div>
            <Dialog
                open={modalOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={action} variant="contained" color={bttColor}>
                    {   bttText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CustomModal;

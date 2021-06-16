import {Dialog, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {closeDialog} from "../../redux/reducers/dashboardItems";
import CreateComponenteForm from "./CreateComponentForm";

function SimpleDialog() {
    const open = useSelector(state => state.items.dialogOpen);
    const dispatch = useDispatch();

    // const handleClose = () => {
    //     onClose(selectedValue);
    // };
    //
    // const handleListItemClick = (value) => {
    //     onClose(value);
    // };
    const handleClose = () => {
        dispatch(closeDialog());
    };

    return (
        // <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create a new Dashboard item</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let Google help apps determine location.
                </DialogContentText>
                <CreateComponenteForm/>
            </DialogContent>
        </Dialog>
    );
}

export default SimpleDialog;
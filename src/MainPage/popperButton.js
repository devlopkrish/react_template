import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MainButton from './Components/helpercards/mainButton';
import MediaCard from './Components/helpercards/helpCard';
import MainPage from './mainpage';
import MainPaper from './mainPaper';
function PopperButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MainButton  func={handleClickOpen} />
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
     
        <DialogActions>
          <MainPaper />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopperButton;
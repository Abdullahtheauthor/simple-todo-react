import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function MySnackBar({ open, message }) {
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small">
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        // onClick={}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        // onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
}

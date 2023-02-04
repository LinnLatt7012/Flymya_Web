import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

export default function PopUp({ text, children }) {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button
            variant="text"
            {...bindToggle(popupState)}
            sx={{ color: "#656565", textTransform: "none" }}
          >
            {text}
          </Button>
          <Popper {...bindPopper(popupState)} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                {children}
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}

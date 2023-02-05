import { ClickAwayListener, Tooltip as MuiTooltip } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Tooltip = withStyles({
  root: {
    backgroundColor: "white !important",
  },
  tooltip: {
    maxWidth: "100%",
    color: "black",
    width: "auto",
    borderRadius: "5px",
    boxShadow: `rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px`,
    backgroundColor: "rgba(255,255,255,100)",
  },
  arrow: {
    fontSize: "20px",
    color: "#1FB8F1",
  },
})(MuiTooltip);

export default function CTooltip({ title, children, ...props }) {
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          arrow
          PopperProps={{
            disablePortal: false,
          }}
          describeChild={true}
          onClose={handleTooltipClose}
          open={open}
          // className={classes.tooltip}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={title}
          {...props}
        >
          <Box onClick={handleTooltipOpen}>{children}</Box>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}

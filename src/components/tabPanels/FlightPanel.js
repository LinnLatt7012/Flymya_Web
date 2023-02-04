import {
  Box,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import PopUp from "../PopUp";
const intialValues = {
  isInter: false,
  isCitizen: false,
  oneWay: true,
  passengers: {
    adults: 2,
    children: 0,
    infants: 0,
  },
  from: "",
  to: "",
  dpDate: "",
  rtDate: "",
};
function FlightPanel() {
  const [value, setValue] = useState(intialValues);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          height: "40px",
          width: "max-content",
          backgroundColor: "white",
        }}
      >
        <FormControl
          sx={{
            verticalAlign: "bottom",
            borderRight: "1px solid #e4e4e4",
          }}
        >
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value.isInter}
            sx={{
              pl: 4,
              "& .MuiSvgIcon-root": {
                fontSize: "1rem !important",
              },
              "& .MuiTypography-root": {
                fontSize: "14px !important",
              },
            }}
            onChange={(event) => {
              console.log(event.target);
              setValue({ ...value, isInter: event.target.value });
            }}
          >
            <FormControlLabel
              value={false}
              control={<Radio size="small" />}
              label="Domestic"
            />
            <FormControlLabel
              value={true}
              control={<Radio size="small" />}
              label="International"
            />
          </RadioGroup>
        </FormControl>
        <FormControl
          sx={{
            verticalAlign: "bottom",
            flexDirection: "row",
            alignItems: "center",
            borderRight: "1px solid #e4e4e4",
          }}
        >
          <Typography sx={{ display: "inline-block", fontSize: "14px", pl: 2 }}>
            Myanmar Citizen
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value.isCitizen}
            sx={{
              pl: 4,
              borderRightWidth: 1,
              borderColor: "grey",
              "& .MuiSvgIcon-root": {
                fontSize: "1rem !important",
              },
              "& .MuiTypography-root": {
                fontSize: "14px !important",
              },
            }}
            onChange={(event) => {
              console.log(event.target);
              setValue({ ...value, isCitizen: event.target.value });
            }}
          >
            <FormControlLabel
              value={false}
              control={<Radio size="small" />}
              label="Yes"
            />
            <FormControlLabel
              value={true}
              control={<Radio size="small" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            display: "inline-flex",
            verticalAlign: "bottom",
            flexDirection: "row",
            alignItems: "center",
            // borderRight: "1px solid #e4e4e4",
          }}
        >
          <Typography sx={{ display: "inline-block", fontSize: "14px", pl: 2 }}>
            Passengers:
          </Typography>
          <PopUp
            text={`${
              value.passengers.adults > 0
                ? value.passengers.adults +
                  `${value.passengers.adults == 1 ? " Adult" : " Adults"}`
                : ""
            } ${
              value.passengers.children > 0
                ? ", " +
                  value.passengers.children +
                  `${value.passengers.adults == 1 ? "Child" : " Children"}`
                : ""
            }
            ${
              value.passengers.infants > 0
                ? ", " +
                  value.passengers.infants +
                  `${value.passengers.infants == 1 ? " Infant" : " Infants"}`
                : ""
            }`}
          >
            <Paper>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </PopUp>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
}

export default FlightPanel;

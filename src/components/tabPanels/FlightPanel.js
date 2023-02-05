import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select as MuiSelect,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import React, { useState } from "react";
import CTooltip from "../controls/CTooltip";
import CTextInput from "../controls/CTextInput";
import { CalendarMonthOutlined, FlightLand } from "@mui/icons-material";
import dayjs from "dayjs";
import CDatePicker from "../controls/CDatePicker";

const Select = withStyles({
  select: {
    fontSize: "14px",
    borderWidth: 0,
    "& .MuiInputBase-root:before,&:before,& .MuiInputBase-root:after, & .MuiInputBase-root:hover":
      {
        borderBottom: "0px solid white",
      },
  },
  iconOpen: {
    borderBottom: "0px solid white",
  },
  standard: {
    borderBottom: "0px solid white",
  },
})(MuiSelect);

const MuiFormControl = withStyles({
  root: {
    paddingLeft: 12,
    fontSize: "14px",
    borderWidth: 0,
    "&:before, &:after, &:hover": {
      borderBottom: "0px solid white !important",
    },
  },
})(FormControl);
const intialValues = {
  isInter: false,
  isCitizen: true,
  isRoundTrip: false,
  passengers: {
    adults: 2,
    children: 1,
    infants: 1,
  },
  from: "",
  to: "",
  dpDate: dayjs(Date.now()),
  rtDate: "",
};
function FlightPanel() {
  const [value, setValue] = useState(intialValues);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        width: "auto",
      }}
    >
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          maxWidth: "100%",
          width: "max-content",
          backgroundColor: "white",
          px: 2,
        }}
      >
        <Grid item>
          <FormControl
            sx={{
              verticalAlign: "bottom",
              borderRight: { xs: "0px", md: "1px solid #e4e4e4" },
            }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={value.isInter}
              sx={{
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
        </Grid>
        <Grid item>
          <FormControl
            sx={{
              verticalAlign: "bottom",
              flexDirection: "row",
              alignItems: "center",
              borderRight: { xs: "0px", md: "1px solid #e4e4e4" },
            }}
          >
            <Typography
              sx={{ display: "inline-block", fontSize: "14px", pl: 2 }}
            >
              Myanmar Citizen
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={value.isCitizen}
              sx={{
                pl: 2,
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
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "inline-flex",
              verticalAlign: "bottom",
              flexDirection: "row",
              alignItems: "center",
              pr: 2,
              borderRight: { xs: "0px", md: "1px solid #e4e4e4" },
            }}
          >
            <Typography
              sx={{ display: "inline-block", fontSize: "14px", pl: 2 }}
            >
              Trip Type
            </Typography>
            <MuiFormControl>
              <Select
                variant="standard"
                value={value.isRoundTrip}
                onChange={(e) =>
                  setValue({ ...value, isRoundTrip: e.target.value })
                }
              >
                {[
                  { id: 1, title: "One Way", value: false },
                  { id: 2, title: "Round Trip", value: true },
                ].map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </Select>
            </MuiFormControl>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "inline-flex",
              verticalAlign: "bottom",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CTooltip
              title={
                <Box sx={{ backgroundColor: "white" }}>
                  <Typography sx={{ color: "black", fontSize: "14px" }}>
                    The content of Passengers.
                  </Typography>
                </Box>
              }
            >
              <Typography
                sx={{ display: "inline-block", fontSize: "14px", pl: 2 }}
              >
                Passengers:{" "}
                {`${
                  value.passengers.adults > 0
                    ? value.passengers.adults +
                      `${value.passengers.adults === 1 ? " Adult" : " Adults"}`
                    : ""
                } ${
                  value.passengers.children > 0
                    ? ", " +
                      value.passengers.children +
                      `${value.passengers.adults === 1 ? "Child" : " Children"}`
                    : ""
                }
                ${
                  value.passengers.infants > 0
                    ? ", " +
                      value.passengers.infants +
                      `${
                        value.passengers.infants === 1 ? " Infant" : " Infants"
                      }`
                    : ""
                }`}
              </Typography>
            </CTooltip>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40px",
          maxWidth: "100%",
          width: "max-content",
          backgroundColor: "white",
          borderRadius: "8px",
          mt: { md: "2px", xs: "4px" },
          py: { md: 0, xs: 2 },
          px: 4,
        }}
      >
        <Grid
          item
          xs={12}
          md={value.isRoundTrip ? 2 : 3}
          sx={{ borderBottom: { xs: "2px solid #e4e4e4", md: "0px" } }}
        >
          <CTooltip
            title={
              <Box
                sx={{
                  backgroundColor: "white",
                }}
              >
                <Typography sx={{ color: "black", fontSize: "14px" }}>
                  The content of Location.
                </Typography>
              </Box>
            }
          >
            <CTextInput
              name="from"
              label={"From"}
              value={value.from}
              sx={{
                borderRight: { xs: "0px", md: "2px solid #e4e4e4" },
              }}
              Icon={<FlightTakeoffIcon sx={{ fontSize: "30px", pr: "2px" }} />}
            />
          </CTooltip>
        </Grid>
        <Grid
          item
          xs={12}
          md={value.isRoundTrip ? 2 : 3}
          sx={{ borderBottom: { xs: "2px solid #e4e4e4", md: "0px" } }}
        >
          <CTooltip
            title={
              <Box
                sx={{
                  backgroundColor: "white",
                }}
              >
                <Typography sx={{ color: "black", fontSize: "14px" }}>
                  The content of Location.
                </Typography>
              </Box>
            }
          >
            <CTextInput
              name="to"
              label={"To"}
              value={value.to}
              sx={{
                borderRight: { xs: "0px", md: "1px solid #e4e4e4" },
              }}
              Icon={<FlightLand sx={{ fontSize: "30px", pr: "2px" }} />}
            />
          </CTooltip>
        </Grid>
        <Grid
          item
          xs={12}
          md={value.isRoundTrip ? 3 : 4}
          sx={{ borderBottom: { xs: "2px solid #e4e4e4", md: "0px" } }}
        >
          <CTooltip
            title={
              <CDatePicker
                value={value.dpDate}
                onChange={(date) => {
                  setValue({ ...value, dpDate: date });
                }}
              />
            }
          >
            <CTextInput
              name="dpDate"
              label={"Departure Date"}
              InputProps={{
                readOnly: true,
              }}
              value={value.dpDate.format("ddd , DD MMM YYYY")}
              sx={{
                borderRight: {
                  xs: "0px",
                  md: `${value.isRoundTrip ? "2px solid #e4e4e4" : "0px"}`,
                },
              }}
              Icon={
                <CalendarMonthOutlined
                  minDate={dayjs(Date.now())}
                  sx={{ fontSize: "30px", pr: "2px" }}
                />
              }
            />
          </CTooltip>
        </Grid>
        {value.isRoundTrip && (
          <Grid
            item
            xs={12}
            md={value.isRoundTrip ? 3 : 4}
            sx={{ borderBottom: { xs: "2px solid #e4e4e4", md: "0px" } }}
          >
            <CTooltip
              title={
                <CDatePicker
                  value={
                    value.rtDate ? value.rtDate : value.dpDate.add(1, "day")
                  }
                  minDate={value.dpDate}
                  onChange={(date) => {
                    setValue({ ...value, rtDate: date });
                  }}
                />
              }
            >
              <CTextInput
                name="rtDate"
                label={"Return Date"}
                value={
                  value.rtDate
                    ? value.rtDate.format("ddd , DD MMM YYYY")
                    : value.dpDate.add(1, "day").format("ddd , DD MMM YYYY")
                }
                sx={{
                  borderRight: { xs: "0px", md: "0px solid #e4e4e4" },
                }}
                Icon={
                  <CalendarMonthOutlined
                    minDate={value.dpDate}
                    sx={{ fontSize: "30px", pr: "2px" }}
                  />
                }
              />
            </CTooltip>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mt: { xs: 2, md: 0 },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(252, 157, 0)",
              "&:hover": {
                backgroundColor: "rgba(252, 157, 0,0.8)",
                boxShadow: "none",
              },
              py: 1,
              px: 2,
              boxShadow: "none",
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FlightPanel;

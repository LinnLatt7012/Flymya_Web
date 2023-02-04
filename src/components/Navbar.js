import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Container from "@mui/material/Container";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ height: { sm: "60px", md: "80px" } }}>
            <img src="/Flymya Logo_logo copy.png" height={"100%"} />
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                fontSize: "20px",
                color: "black",
                height: "100%",
              }}
            >
              Blog
            </Button>
            <IconButton sx={{ mx: { sm: 0, md: 2 } }}>
              <img src="/Layer 5.png" height={"35px"} />
            </IconButton>
            <IconButton sx={{ mx: { sm: 0, md: 2 } }}>
              <AccountCircleOutlinedIcon sx={{ fontSize: "35px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

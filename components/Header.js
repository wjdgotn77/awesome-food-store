import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            믿고 보는 맛집 리스트
          </Typography>
          <Link href={"/about"} passHref>
            <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

const StyledAppBar = styled(AppBar)`
  background: ${({ theme }) => theme.dark};
`;

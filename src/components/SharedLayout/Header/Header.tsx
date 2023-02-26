import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import * as S from "./Header.styled";
import { pages } from "../../../constants/pages";
import { LogoutBtn } from "../../LogoutBtn/LogoutBtn";
import { useSelector } from "react-redux";
import { selectToken } from "../../../redux/auth/auth-selector";
import { LanguageSelect } from "../../LanguageSelect/LanguageSelect";

export const Header = () => {
  const token = useSelector(selectToken);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <S.HeaderLink to="/">
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              LOGO
            </S.HeaderLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.public.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
              {pages.restricted.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
              {pages.private.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <S.HeaderLink to="/">
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              LOGO
            </S.HeaderLink>
          </Typography>
          <Box
            sx={{ flexGrow: 1, gap: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.public.map((page) => (
              <S.HeaderLink
                to={page.path}
                key={page.title}
                onClick={handleCloseNavMenu}
              >
                {page.title}
              </S.HeaderLink>
            ))}
            {token &&
              pages.private.map((page) => (
                <S.HeaderLink
                  to={page.path}
                  key={page.title}
                  onClick={handleCloseNavMenu}
                >
                  {page.title}
                </S.HeaderLink>
              ))}
            {!token &&
              pages.restricted.map((page) => (
                <S.HeaderLink
                  to={page.path}
                  key={page.title}
                  onClick={handleCloseNavMenu}
                >
                  {page.title}
                </S.HeaderLink>
              ))}
          </Box>
          <LanguageSelect />
          {token && (
            <Box sx={{ flexGrow: 0 }}>
              <LogoutBtn />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import React from "react";
import { Typography, Toolbar, Stack, Box, Button } from "@mui/material";
import styled from '@mui/material/styles/styled';
import Logo from './Logo';
import SublimeButton from './overwrite/Button';

const MenuButton = styled(Button)(({ theme }) => ({
    color: theme.palette.black,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    borderRadius: 0,
    borderColor: theme.palette.black
}))

const HeaderWrapper = styled(Stack)(( { theme } ) => ({
    backgroundImage: 'url("static/img/first.png")',
    height:'720px',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    paddingRight: theme.spacing(9),
    paddingLeft: theme.spacing(9),
    paddingTop: theme.spacing(6) 
}))

const Header = () => {
    return(
        <HeaderWrapper direction="column">
            <Toolbar disableGutters={true}>
                <Logo size="small" />
                <Box>
                    <MenuButton>
                        hlavní
                    </MenuButton>
                    <MenuButton>
                        výhod
                    </MenuButton>
                    <MenuButton>
                        o mně
                    </MenuButton>
                    <MenuButton>
                        služby
                    </MenuButton>
                    <MenuButton>
                        kontakty
                    </MenuButton>
                    <MenuButton variant="outlined" pr={5}>
                        zavolej mi
                    </MenuButton>
                </Box>
            </Toolbar>
            <Stack direction="column" justifyContent="center" alignItems="flex-start" height="100%" spacing={4}>
                <Logo size="big"/>
                <SublimeButton>přihlaste se nyní</SublimeButton>
            </Stack>
            
        </HeaderWrapper>
    );
}

export default Header;
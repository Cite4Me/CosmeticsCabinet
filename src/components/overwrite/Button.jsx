import React from "react";
import { Button } from '@mui/material';
import styled from '@mui/material/styles/styled';

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.white.main,
    borderRadius: 0, 
    color: theme.palette.black,
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
}))

export default CustomButton;
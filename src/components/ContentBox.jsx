import React from "react";
import { Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const CustomBox = styled(Grid)(({ theme }) => ({
    paddingRight: theme.spacing(8.375),
    paddingLeft: theme.spacing(8.375),
    minHeight: '188px'
  }))

const ContentBox = (props) => {
    const theme = useTheme();   
    return(
        <Grid container>
            <CustomBox item xs={4} container alignItems="center" sx={{ backgroundColor: theme.palette.yellow.dark }} >
                <Typography variant='body1'>Contrary to popular belief, Lorem Ipsum is not simply random text.</Typography>
            </CustomBox>
            <CustomBox item xs={4} container alignItems="center" sx={{ backgroundColor: theme.palette.yellow.main }} >
                <Typography variant='body1'>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </Typography>
            </CustomBox>
            <CustomBox item xs={4} container alignItems="center" sx={{ backgroundColor: theme.palette.white.milk }} >
                <Typography variant='body1'>Contrary to popular belief, Lorem Ipsum is not simply random text.</Typography>
            </CustomBox>
        </Grid>
    )
}

export default ContentBox;
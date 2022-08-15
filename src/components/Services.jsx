import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CustomButton from './overwrite/Button.jsx';

const Services = () => {
    const theme = useTheme();   
    return(
        <Grid container sx={{ 
            minHeight: '581px',
            backgroundColor: theme.palette.grey
        }}>
          <Grid item xs={6} sx={{
            backgroundImage: 'url("static/img/second.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'top'
            }} />
          <Grid 
            item 
            xs={6}
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            sx={{paddingRight: theme.spacing(9), paddingLeft: theme.spacing(9) }}
            spacing={7}>
            <Typography variant="body1" align="right" >Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </Typography>
            <CustomButton>zobrazit služby</CustomButton>
          </Grid>
        </Grid>
    )
}

export default Services;
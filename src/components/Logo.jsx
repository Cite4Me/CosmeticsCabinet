import React from "react";
import { Stack, Typography } from '@mui/material';
import { useTheme, styled }  from '@mui/material/styles';

const NameTypography = styled(Typography)(() => ({
    fontFamily: "ZCOOL XiaoWei",
    lineHeight: 1
}));

const Logo = (props) => {
    const isBig = props.size === 'big';
    const theme = useTheme();
    const colorText = isBig ? theme.palette.grey : theme.palette.black; 

    return(
        <Stack  sx={{ flexGrow: isBig ? 0 : 1 }}>
            <NameTypography color={colorText} fontSize={isBig ? '4rem' : '1rem'}>KOSMETICKÝ KABINET</NameTypography>
            <Typography variant="caption" color={colorText} fontSize={isBig ? '1.5rem' : '0.73rem'}>od paní Liudmyly Repnikové</Typography>
        </Stack>
    )
}

export default Logo;
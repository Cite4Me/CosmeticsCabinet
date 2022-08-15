import { TypographyOptions } from '@mui/material/styles/createTypography';

const FONT_PRIMARY = 'Inter, sans-serif';

const pxToRem = (size) => {
    return `${size / 16}rem` ;
}

const Typography: TypographyOptions = {
    fontFamily: FONT_PRIMARY,

    h1: {
        fontSize: pxToRem(32),
        fontWeight: 400,
        lineHeight: 1.21,
        textTransform: 'uppercase'
    },
    body1: {
        fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: 1.635
    },
    body2: {
        fontSize: pxToRem(16),
        fontWeight: 400,
        lineHeight: 1.21
    },
    caption: {
        fontSize: pxToRem(11),
        fontWeight: 500,
        lineHeight: 1.21,
        
    },
    button: {
        fontSize: pxToRem(16),
        fontWeight: 500,
        lineHeight: 1.21,
        textTransform: 'uppercase'
    }
}

export default Typography;

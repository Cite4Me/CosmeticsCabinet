import React from 'react';
import { Stack, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import Theme from './theme/Theme.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContentBox from './components/ContentBox.jsx';
import Services from './components/Services.jsx';

import "@fontsource/zcool-xiaowei";

function App() {
  return (
    <Theme>
      <Stack>
        <Header />
        <ContentBox />
        <Services />
        <Footer />
      </Stack>
    </Theme>
  );
}

export default App;

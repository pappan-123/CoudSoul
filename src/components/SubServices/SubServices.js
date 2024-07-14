import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import SubList from './SubList';
 

const defaultTheme = createTheme();

export default function SubServices({ title, description,services,blog }) {

  const mainFeaturedPost = {
    title: title,
    description: description,
    image: 'https://res.cloudinary.com/dxllpuliy/image/upload/v1713875282/WhatsApp_Image_2024-04-23_at_5.57.44_PM_puy9wf.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
    blog: blog,
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
        <SubList services={services}/>
      </Container>
    </ThemeProvider>
  );
};
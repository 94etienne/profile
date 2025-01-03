import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import Navbar from './NavBar'; // Ensure the correct case in the file name

const Header = () => {
  return (
    <>
      <header style={{ backgroundColor: '#1f77b4', color: 'white', padding: '40px 0' }}>
        <Container>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" component="h1" align="center" gutterBottom>
                NTAMBARA Etienne
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                Master of Science in Artificial Intelligence
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                <strong>Phone:</strong> +250-785227713 || +250-783716761
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                <strong>Email:</strong> <Link href="mailto:ntambaraienne94@gmail.com" color="inherit"                   sx={{
                    '&:hover': {
                      color: 'warning.main',
                    },
                  }}>ntambaraienne94@gmail.com</Link>
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                <strong>College:</strong> College of Computing and Data Science (CCDA)
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                <strong>University:</strong> Nanyang Technological University (NTU-SINGAPORE), 2024
              </Typography>
              <Box display="flex" justifyContent="center" gap={2}>
                <Link
                  href="https://github.com/94etienne"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': {
                      color: 'warning.main',
                    },
                  }}
                >
                  GitHub
                </Link>
                <Link
                  href="https://huggingface.co/ntam0001"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': {
                      color: 'warning.main',
                    },
                  }}
                >
                  HuggingFace
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ntambara-etienne-7572901aa/"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    '&:hover': {
                      color: 'warning.main',
                    },
                  }}
                >
                  LinkedIn
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </header>
      <Navbar />
    </>
  );
};

export default Header;

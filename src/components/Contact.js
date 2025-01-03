import React from 'react';
import { Container, Typography, Card, CardContent, Divider, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ padding: '20px', backgroundColor: '#f4f4f9' }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Contact Information
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      <Card sx={{ boxShadow: 3, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="body1" paragraph>
            <strong>Phone:</strong> <span>+250-785227713 || +250-783716761</span>
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Email:</strong> 
            <Link href="mailto:ntambaraienne94@gmail.com" color="primary">
              ntambaraienne94@gmail.com
            </Link>
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Location:</strong> Rwanda
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Contact;

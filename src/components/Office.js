import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

const OfficeItem = ({ officeCategory, address }) => (
  <Card sx={{ marginBottom: 4, boxShadow: 3, borderLeft: "5px solid #1976d2" }}>
    <CardContent>
      <Typography variant="h5" component="div" color="primary" gutterBottom>
        {officeCategory}
      </Typography>
      <Typography variant="body1" paragraph>
        {address}
      </Typography>
    </CardContent>
  </Card>
);

const Office = () => {
  const officeData = [
    {
      officeCategory: "Head Office",
      address:
        "123 Kigali Innovation Street, Kigali, Rwanda. Phone: +250 123 456 789. Email: headoffice@example.com",
    },
    {
      officeCategory: "Branch Office - Nyamirambo",
      address:
        "45 Nyamirambo Avenue, Kigali, Rwanda. Phone: +250 987 654 321. Email: nyamirambo@example.com",
    },
    {
      officeCategory: "Branch Office - Kacyiru",
      address:
        "12 Kacyiru Road, Kigali, Rwanda. Phone: +250 456 789 123. Email: kacyiru@example.com",
    },
  ];

  return (
    <Container
      sx={{
        padding: "20px",
        backgroundColor: "#f4f4f9",
        borderRadius: "8px",
        boxShadow: 2,
        maxWidth: "900px",
        margin: "20px auto",
      }}
    >
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h3" component="h1" color="primary" gutterBottom>
          Physical Office Locations
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Explore our office locations and get in touch with us for any inquiries or services.
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: 4 }} />
      {officeData.map((office, index) => (
        <OfficeItem
          key={index}
          officeCategory={office.officeCategory}
          address={office.address}
        />
      ))}
    </Container>
  );
};

export default Office;

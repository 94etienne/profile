import React from "react";
import { Container, Typography, Card, CardContent, Divider } from "@mui/material";

const CertificateItem = ({ certificate }) => (
  <Card sx={{ marginBottom: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="body1" paragraph>
        {certificate}
      </Typography>
    </CardContent>
  </Card>
);

const Certificates = () => {
  const certificates = [
    "Data Analyst Master Track: A-Z Data Analysis in Python and SQL",
    "CCNA",
    "AiCE",
    "Microsoft Certified Educator (MCE): Technology Literacy for Educators - 21st Century Learning Design",
    "English Proficiency: English proficiency obtained from the University of Rwanda (UR)",
    // Add other certificates similarly
  ];

  return (
    <Container sx={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Certificates
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      {certificates.map((certificate, index) => (
        <CertificateItem key={index} certificate={certificate} />
      ))}
    </Container>
  );
};

export default Certificates;

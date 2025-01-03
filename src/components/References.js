import React from "react";
import { Container, Typography, Card, CardContent, Divider, Link } from "@mui/material";

const RefereeItem = ({ name, position, email }) => (
  <Card sx={{ marginBottom: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="body1" paragraph>
        <strong>{name}</strong> - {position},{" "}
        <Link href={`mailto:${email}`} color="primary">
          {email}
        </Link>
      </Typography>
    </CardContent>
  </Card>
);

const Referees = () => {
  const referees = [
    // {
    //   name: "Assoc Prof. Adams Wai Kin Kong",
    //   position: "Nanyang Technological University",
    //   email: "adamskong@ntu.edu.sg"
    // },
    {
      name: "Dr. Alfred UWITONZE",
      position: "Dean of School of ICT at the University of Rwanda",
      email: "alfruwitonze@gmail.com"
    },
    {
      name: "Mr. Andre UZAMURENGERA",
      position: "Data Scientist at Centre Bank of Rwanda",
      email: "uzandre12@gmail.com"
    },
    {
      name: "NGABO Desire",
      position: "Head of Laboratories in the African Center of Excellence in the Internet of things (ACEIoT)/University of Rwanda, Lecturer at the University of Rwanda",
      email: "dngabo@gmail.com"
    },
    // Add other referees similarly
  ];

  return (
    <Container sx={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Referees
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      {referees.map((referee, index) => (
        <RefereeItem
          key={index}
          name={referee.name}
          position={referee.position}
          email={referee.email}
        />
      ))}
    </Container>
  );
};

export default Referees;

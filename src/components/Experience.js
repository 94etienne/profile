import React from "react";
import { Container, Typography, Card, CardContent, CardActions, Button, List, ListItem, ListItemText, Divider } from "@mui/material";

const ExperienceItem = ({ title, role, description, link }) => (
  <Card sx={{ marginBottom: 4, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h5" component="div" color="primary" gutterBottom>
        {title} - <strong>{role}</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Description:</strong> {description}
      </Typography>
      {link && (
        <Typography variant="body2" paragraph>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Click here for more details
          </a>
        </Typography>
      )}
    </CardContent>
  </Card>
);

const Experience = () => {
  const experienceData = [
    {
      title: "African Center of Excellence in Internet of Things (ACEIoT)",
      role: "Volunteer",
      description:
        "Currently developing a system that will control lab accessories from renting to returning, using React.js, Node.js, and MYSQL.",
      link: "https://www.youtube.com/watch?v=liFgo2LXeu0",
    },
    {
      title: "Mineduc",
      role: "Computer Science Teacher, Rwanda Basic Education Board, Bugesera District",
      description:
        "Taught Computer Science and ICT in Advanced and Ordinary Levels, served as CAMIS Data Manager.",
      link: null,
    },
    {
      title: "Rwanda Basic Education Board",
      role: "Intern",
      description: "Teacher Management Information System (TMIS) Trainer, provided other ICT-related services.",
      link: null,
    },
    {
      title: "Algorithm Inc",
      role: "Academic Intern",
      description: "Software Developer on E-Prescription System.",
      link: "https://shorturl.at/TI9Bw",
    },
    {
      title: "UR-CST",
      role: "Researcher and Developer",
      description:
        "Conducted research on resource monitoring and management, developed a web application for Open Inventory Management System (OIMS).",
      link: null,
    },
    {
      title: "Computer Innovation Technology Ltd",
      role: "Trainer",
      description: "Trainer of RWANDA TVET BOARD students in system development courses.",
      link: "https://citttech.com/",
    },
    {
      title: "IREMBO",
      role: "Irembo Agent",
      description: "Delivering Irembo services to the Rwandan population.",
      link: null,
    },
    {
      title: "MobiCash",
      role: "MobiCash Agent",
      description: "Delivering MobiCash services to the Rwandan population by assisting with service payments.",
      link: null,
    },
  ];

  return (
    <Container sx={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Experience
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      {experienceData.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          role={experience.role}
          description={experience.description}
          link={experience.link}
        />
      ))}
    </Container>
  );
};

export default Experience;

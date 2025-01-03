import React from "react";
import { Container, Typography, Card, CardContent, Divider } from "@mui/material";

const SkillsItem = ({ skillCategory, skills }) => (
  <Card sx={{ marginBottom: 4, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h5" component="div" color="primary" gutterBottom>
        {skillCategory}
      </Typography>
      <Typography variant="body1" paragraph>
        {skills}
      </Typography>
    </CardContent>
  </Card>
);

const Skills = () => {
  const skillsData = [
    {
      skillCategory: "Programming and Markup Languages",
      skills: "Python, C/C++, Java, Android, React, Node, PHP, HTML",
    },
    {
      skillCategory: "DBMS",
      skills: "MYSQL, MongoDB, Postgres",
    },
    {
      skillCategory: "Operating Systems and Networking",
      skills: "Windows, Linux, Networking",
    },
  ];

  return (
    <Container sx={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Skills
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      {skillsData.map((skill, index) => (
        <SkillsItem
          key={index}
          skillCategory={skill.skillCategory}
          skills={skill.skills}
        />
      ))}
    </Container>
  );
};

export default Skills;

import React from "react";
import { Container, Typography, Card, CardContent, Divider } from "@mui/material";

const EducationItem = ({ degree, institution, duration, grade }) => (
  <Card sx={{ marginBottom: 4, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h5" component="div" color="primary" gutterBottom>
        {degree}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Institution:</strong> {institution}
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Duration:</strong> {duration}
      </Typography>
      {grade && (
        <Typography variant="body1" paragraph>
          <strong>Grade:</strong> {grade}
        </Typography>
      )}
    </CardContent>
  </Card>
);

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "Nanyang Technological University (NTU-SINGAPORE)",
      duration: "2023-2024",
      grade: "CGPA: 3.5",
    },
    {
      degree: "Bachelor of Science with Honours in Computer Science",
      institution: "University of Rwanda College of Science and Technology",
      duration: "2017-2021",
      grade: "Second Upper Class",
    },
    {
      degree: "A2 in Computer Science",
      institution: "Lycee Du Lac Muhazi (AsPEJE-KABARE)",
      duration: "2013-2015",
      grade: "Grade: 39",
    },
  ];

  return (
    <Container sx={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Education
      </Typography>
      <Divider sx={{ marginBottom: 4 }} />
      {educationData.map((education, index) => (
        <EducationItem
          key={index}
          degree={education.degree}
          institution={education.institution}
          duration={education.duration}
          grade={education.grade}
        />
      ))}
    </Container>
  );
};

export default Education;

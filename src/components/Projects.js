import React from "react";
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, CardActions } from "@mui/material";

const Project = ({ title, description, date, link, items }) => (
  <Card style={{ marginBottom: "20px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
    <CardContent>
      <Typography variant="h5" component="h2" style={{ marginBottom: "10px" }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{ marginBottom: "10px" }}>
        <strong>Description:</strong> {description}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{ marginBottom: "10px" }}>
        <strong>Date:</strong> {date}
      </Typography>

      {link && (
        <Typography variant="body2" color="primary" style={{ marginBottom: "10px" }}>
          <strong>Access Link:</strong>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            Click Here to View Project Implementation
          </a>
        </Typography>
      )}

      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </Button>
    </CardActions>
  </Card>
);

const Projects = () => {
  const projectData = [
    {
      title: "Multi-Class-Prediction-of-Obesity-Risk-Kaggle-Competition ",
      description:
        "In this report, we described the approaches to tackle an ongoing Kaggle Competition titled ’Multi-Class Prediction of Obesity Risk’. By performing in-depth exploratory data analysis and using insights gained to engineer features and tune models, our team was able to achieve a top 7% in the leaderboard, clinching 238th place out of 3,587 teams globally",
      date: "February, 2024",
      link: "https://github.com/94etienne/Masters_Project/blob/Multi-Class-Prediction-of-Obesity-Risk-Kaggle-Competition/Machine_Learning_Group_Assignment_report.pdf",
      items: [
        "This Kaggle competition (Multi-Class Prediction of Obesity Risk) [3] requires participants to perform multi-class classification on structured data to predict an individual’s risk of obesity based on a variety of input factors. Features include both continuous and categorical data such as height, gender,consumption of alcohol, etc. Submissions are evaluated based on accuracy of the test datase",
        "Baseline Results",
        "Version 1: XGBoost - CV: 0.9114, LB: 0.90895",
        "Version 2: LightGBM - CV: 0.9115, LB: 0.9057",
        "Version 3: Catboost - CV: 0.9078, LB: 0.90317",
        "Version 4: Random Forest - CV: 0.8953, LB: 0.89161",
        "F1 score as an optimizing metric",
        "Version 5: XGBoost - CV: 0.9114, LB: 0.90968",
        "Version 6: LightGBM - CV: 0.9104, LB: 0.90715",
        "Version 7: Catboost - CV: 0.9082, LB: 0.9039",
        "Version 8: Random Forest - CV: 0.8955, LB: 0.89378",
        "In this report, we outlined our approach to tackling the Kaggle competition - ’Multi-Class Prediction of Obesity Risk’ and described all the experimentation done. By performing an exploratory data exploration, we were able to gain useful insights on how to approach feature engineering. Features created were used for the building of machine learning models and by using an ensemble approach, our team was able to iteratively improve on the overall performance culminating in achieving a top 7% in the competition."
      ],
    },
    {
      title: "Plant Disease Prediction Project",
      description:
        "This is a computer vision end-to-end project developed using Tensorflow.",
      date: "September, 2024",
      link: "https://drive.google.com/file/d/1MLbPS8_NubeP855yP32Jc9U_FIGoCS4K/view?usp=drive_link",
      items: [
        "Image size 256 x 256",
        "Batch Size 32",
        "3 classes",
        "3 number of Channels",
        "50 Epochs",
        "2152 Dataset Size",
        "80% of Training size, 10% both testing and validation",
        "16 layers [7 convolutional layers,6 max-pooling layers,2 dense layers]",
        "Model total number of parameters: 183747",
        "Train loss: 0.0320, Train accuracy: 98%",
        "Validation loss: 0.0581, validation accuracy: 97%",
        "Testing loss: 0.0933 and Testing accuracy: 96%",
      ],
    },
    {
      title: "AI for Kigali Real Estate Prices Prediction",
      description:
        "Machine learning-based application to predict property prices.",
      date: "September, 2024",
      link: "https://github.com/your-repo-link", // Replace with actual link
      items: [
        "Data preprocessing and cleaning for real estate datasets.",
        "Used Linear Regression for model training and evaluation.",
        "Integrated the model with a Gradio-based web interface for user interaction.",
        "Columns included location, property type, size, year built, and proximity metrics.",
        "Achieved an R2 score of 0.93 on the test set.",
      ],
    },
    {
      title: "Loan Approval AI System ",
      description:
        'The project proposal titled "Loan Approval by Group AKEZA" focuses on developing an AI-based loan approval system and application to enhance efficiency, fairness, and scalability in financial institutions such as banks. The proposed AI application aims to automate the loan assessment process by utilizing advanced algorithms and machine learning techniques to minimize processing times and reduce biases present in existing systems. The system will ensure data privacy through the implementation of techniques such as federated learning, differential privacy, and secure multi-party computation. Key aspects of the proposal include the adoption of responsible AI practices, with an emphasis on explainability, fairness, privacy preservation, and adherence to ethical standards in data usage. This innovative approach is expected to revolutionize financial operations, providing substantial benefits to both financial institutions and their customers.',
      date: "November, 2023",
      link: 'https://github.com/94etienne/Masters_Project/blob/Intro_TO_AI/AI_Ethics_Mini_Project.pdf', // Replace with actual link
      items: [
        "This is a real world solved problem research using AI",
        "We implemented this system as a group of 5 students",
        " My contribution, I suggested a project ides and involved in project report preparation",
        "Our project grants loan to the customers with Fairness and Privacy preservation with the help of AI",
      ],
    },
    {
      title: "Blind Face Super-Resolution",
      description: "The Blind Face Super-Resolution challenge was centered on Blind Face Super-Resolution, aimed at enhancing the quality of corrupted low-quality (LQ) face images through advanced deep learning techniques. The specific challenge involved reconstructing high-quality (HQ) images from LQ versions subjected to deliberate degradation through a second-order degradation pipeline that includes Gaussian blur, downsampling, noise, and compression [1]. This task is pivotal for advancements in image restoration, particularly in practical scenarios where image degradation is prevalent.",
      date: "March, 2024",
      link: "https://github.com/94etienne/Masters_Project/blob/e05f47ed2b33d1b67f379bdb481ed5b8cef74af2/AI6126_Project_2_report_G2304253K.pdf", // Replace with actual link
      items: [
        "This is an Advanced Computer Vision Project called: Blind Face Super-Resolution",
        "Aimed at enhancing the quality of corrupted low-quality (LQ) face images through advanced deep learning techniques",
        "The specific challenge involved reconstructing high-quality (HQ) images from LQ versions subjected to deliberate degradation through a second-order degradation pipeline that includes Gaussian blur, downsampling, noise, and compression",
      ],
    },

    {
      title: "Fashion Attributes Classification Challenges",
      description: "FashionNet, the core of this project, extends the foundational ResNet50 model as a pre-trained model, incorporating significant modifications to tailor it for fashion attribute classification. Key enhancements include the addition of dropout layers to prevent overfitting by randomly omitting subsets of features during training, and batch normalization layers to stabilize and accelerate training by normalizing the input layers. These modifications are instrumental in refining the model’s ability to generalize across a wide array of fashion images. more about Resnet50 model",
      date: "March, 2024",
      link: "https://github.com/94etienne/Masters_Project/blob/AI6126-Project-1-Fashion-Attributes-Classification-Challenges/AI6126_Project_Report.pdf", // Replace with actual link
      items: [
        "This was an Advanced Computer Vision Project Titled: Fashion Attributes Classification Challenges",
        "The goal of this mini challenge is to identify the attribute labels depicted in a fashion photograph. Our dataset has 6000 images, divided into 5000 images for training and 1000 for validation. The test set was hosted online for final evaluation. The dataset employs 26 attribute labels that are common descriptions of garments. These attributes are grouped into 6 major categories. Every image is annotated with 6 attributes, one from each category.",
        "To handle the problem of class imbalance, I applied a class weight",
      ],
    },
    {
      title: "Employee Management System",
      description: "Technologies: REACT JS, NODE JS, MONGODB",
      date: "September, 2024",
      link: "https://drive.google.com/file/d/18aZbkI_9M5e65LJauDkVnCUsn2OJ2dMy/view?usp=sharing",
      items: [
        "This is a web-based platform that allows employees to apply for any specific leave, access the paid salary months, etc.",
        "All employees are managed by an admin, which means we have only two users.",
        "Once a user forgot the password, they can reset it and get a new password via email.",
        "I have used REACT, NODE, and MONGODB to develop this platform.",
        "Currently, it is on my local server, that is why I prepared a short tutorial about this system that can be accessed via the link above.",
      ],
    },
    {
      title: "Computer Lab Management System",
      description: "Technologies: REACT JS, NODE JS, MYSQL",
      date: "September, 2024",
      link: "https://www.youtube.com/watch?v=liFgo2LXeu0",
      items: [
        "I implemented this project while I was serving as a volunteer at UR-CST in the ACE-IoT department in August 2024.",
        "This system will be used by the ACE-IoT (UR-CST) to rent their assets to their students and researchers.",
        "This project is still in progress and still working on it.",
        "Access a website I developed for Asset monitoring via the following link (valid for 30 days from October 11, 2024): https://aceiot.citttech.com",
      ],
    },
    // Add other projects here in the same format...
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
      <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
        Projects and Research
      </Typography>
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          date={project.date}
          link={project.link}
          items={project.items}
        />
      ))}
    </div>
  );
};

export default Projects;

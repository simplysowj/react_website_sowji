import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ic from "../../Assets/Projects/ic.png";
import mr from "../../Assets/Projects/mr.png";
import bd from "../../Assets/Projects/bd.png";
import ats from "../../Assets/Projects/ats.jpg";
import spam from "../../Assets/Projects/spam.jpg";
import gold from "../../Assets/Projects/gold.png";
import sen from "../../Assets/Projects/sen.png";
import data from "../../Assets/Projects/data.jpg";
import CD from "../../Assets/Projects/CD.jpg";
import bh from "../../Assets/Projects/bh.jpg";
import sql from "../../Assets/Projects/sql.jpg";
import xl from "../../Assets/Projects/xl.jpg";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ic}
              isBlog={false}
              title="Image Captioning with OCR and GenAI"
              description="Developed an interactive chatbot capable of generating captions for images and audio with Text in the image. Utilized advanced AI techniques, including image captioning (using Deep learning and NLP) and audio generation with Gen AI, to enhance user experience."
              ghLink="https://github.com/simplysowj"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_innovation-accessibility-ai-ugcPost-7197697478962335744-awtm?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bd}
              isBlog={false}
              title="Big Data Engineering project (Fraud detection System with GenAI )"
              description="Implemented a fraud detection system using big data concepts such as Kafka, PySpark, and MySQL with Machine learning algorithms. Developed a user-friendly interface using Streamlit and incorporated Gen AI for front-end enhancement."
              ghLink="https://github.com/simplysowj/bigdata_fraud_detection"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_financialanalysis-frauddetection-datavisualization-activity-7197954843980783616-G48c?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="EDA with DataBricks"
              description="I recently worked on a project where I analyzed sales data using Databricks, hashtag#PySpark, and hashtag#Matplotlib."
              ghLink="https://lnkd.in/eFYi_DQv"
              demoLink="https://lnkd.in/eFYi_DQv"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CD}
              isBlog={false}
              title="CAT VS DOG"
              description="CNN model of cat prediction in to a website using flask framework."
              ghLink="https://github.com/simplysowj"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_tensorflow-flask-deeplearning-activity-7163954448375996417-BExp?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mr}
              isBlog={false}
              title="Movie Review App "
              description="Developed a movie review application using MongoDB, Java, Spring Boot, and React, featuring a loosely coupled architecture for independent evolution of client and server code, leveraging microservices for efficient business function handling. Spring Boot was chosen for its rapid development capabilities in the microservices landscape."
              ghLink="https://github.com/simplysowj"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_i-am-happy-to-share-a-movie-review-application-activity-7160443895137419264-SGYf?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ats}
              isBlog={false}
              title="ATS Resume expert App and chatbot"
              description="Developed a dynamic ATS Resume Expert application using Gemini-pro-vision during my internship with Mentorness. Utilizing OpenAI's Generative AI capabilities, it analyzes PDF resumes against job descriptions, offering evaluations on alignment, missing keywords, and candidate suitability. This Streamlit app showcases a versatile portfolio template integrating features like resume parsing, an AI chatbot powered by OpenAI, and interactive elements for comprehensive personal branding, demonstrating proficiency in leveraging diverse technologies for impactful web experiences."
              ghLink="https://github.com/simplysowj/Mentorness"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_atsresume-streamlit-resumeparser-activity-7173455333477064704-WaeO?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="SMS spam/ham classifier, Cat vs Dog Classifier and Titanic data Classification projects"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/simplysowj/CatVsDog_Classifier-SpamDetector"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_internship-journey-with-bharat-intern-sms-activity-7164659747697205248-sOjj?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gold}
              isBlog={false}
              title="Implemented ML algorithm for Income prediction and Gold price Prediction."
              description="Implemented ML algorithm for Income prediction and Gold price Prediction."
              ghLink="https://github.com/simplysowj/Gold-Price-Prediction-including-Flask-app"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_internshipjourney-goldpriceprediction-activity-7164817502026321920-712k?utm_source=share&utm_medium=member_desktop"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sen}
              isBlog={false}
              title="Sentiment Analysis"
              description="sentiment analysis using Apache Spark, Kafka, PySpark the Python API for Apache Spark, Zeppelin, and Streamlit! "
              ghLink="https://github.com/simplysowj/"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_sentimentanalysis-apachespark-kafka-activity-7186393653991415808-2qUG?utm_source=share&utm_medium=member_desktop"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bh}
              isBlog={false}
              title="Tableau"
              description="Tableau Project - Bikehaven project"
              ghLink="https://github.com/simplysowj/tableau"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_activity-7146645292652625921-uvu9?utm_source=share&utm_medium=member_desktop"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SQL"
              description="Analysis of IPL data using SQL (PostgreSQL) and Data visualization using Excel."
              ghLink="https://github.com/simplysowj"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_successfully-finished-ipl-data-analysis-using-activity-7130554150039257088-LGf1?utm_source=share&utm_medium=member_desktop"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xl}
              isBlog={false}
              title="Advanced Excel"
              description="Analysis of Fitbit fitness tracker data to deliver marketing and business solutions to WeFit and its subsidiaries."
              ghLink="https://github.com/simplysowj/fitbit"
              demoLink="https://www.linkedin.com/posts/sowjanya-bojja_analysis-of-fitbit-fitness-tracker-data-to-activity-7116596211960221696-KafI?utm_source=share&utm_medium=member_desktop"     
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

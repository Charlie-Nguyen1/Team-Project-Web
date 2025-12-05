import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Box, Button } from "@mui/material";
import unicornbikeImg from "./../assets/images/unicornbikeImg.jpg";

const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Card
        sx={{
          maxWidth: 900,
          margin: "auto",
          mt: 5,
          backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}30 0%, ${theme.palette.secondary.main}30 100%)`,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            px: 2.5,
            pt: 3,
            pb: 2,
            fontWeight: 700,
            color: theme.custom?.openTitle || theme.palette.primary.main,
          }}
        >
          Welcome to Dental Clinic Management
        </Typography>
        <CardMedia
          sx={{ minHeight: 400 }}
          image={unicornbikeImg}
          title="Dental Clinic"
        />
        <CardContent>
          <Typography variant="body2" component="p" sx={{ mb: 2 }}>
            Welcome to the MERN Skeleton home page. This is a modern dental clinic management system built with cutting-edge technologies.
          </Typography>
          <Typography variant="body1" component="p" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
            Our system helps manage patient records, treatment plans, and appointments efficiently and securely.
          </Typography>
        </CardContent>
      </Card>

      {/* Features Section */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: 700,
            color: theme.palette.primary.main,
          }}
        >
          Key Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 2 }}>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                👥 Patient Management
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Easily manage patient records, medical history, and contact information in one secure platform.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 2 }}>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                📅 Appointment Scheduling
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Schedule and manage appointments efficiently with automated reminders and confirmations.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 2 }}>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                🦷 Treatment Tracking
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Track treatment plans and procedures with comprehensive notes and progress updates.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 3, textAlign: "center", boxShadow: 2 }}>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                🔒 Secure & HIPAA Compliant
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Enterprise-grade security with encryption, authentication, and secure data storage.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* About Section */}
      <Card sx={{ p: 4, mt: 6, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
          About This Application
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Built with the MERN stack (MongoDB, Express, React, Node.js), our dental clinic management system provides a modern, responsive, and user-friendly interface for managing all aspects of your dental practice.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Technology Stack:</strong> React 19, Material-UI, Vite, Express.js, MongoDB Atlas, Node.js
        </Typography>
        <Typography variant="body1">
          <strong>Features:</strong> Real-time updates, Secure authentication, Responsive design, Performance optimized, Fully tested
        </Typography>
      </Card>

      {/* CTA Section */}
      <Box sx={{ textAlign: "center", mt: 6, pb: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{ mr: 2 }}
        >
          Get Started
        </Button>
        <Button 
          variant="outlined" 
          color="primary" 
          size="large"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Home;

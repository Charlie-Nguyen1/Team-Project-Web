import React from "react";
import { Container, Typography, Card, CardContent, Box, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Features = () => {
  const theme = useTheme();

  const features = [
    {
      title: "Patient Management",
      description: "Comprehensive patient database with detailed medical history, contact information, and insurance details.",
      icon: "👥",
    },
    {
      title: "Appointment Scheduling",
      description: "Intuitive scheduling system with calendar view, automated reminders, and availability management.",
      icon: "📅",
    },
    {
      title: "Treatment Planning",
      description: "Create and track treatment plans with progress notes, procedures, and clinical observations.",
      icon: "🦷",
    },
    {
      title: "Secure Authentication",
      description: "JWT-based authentication with role-based access control for secure data access.",
      icon: "🔒",
    },
    {
      title: "Real-time Updates",
      description: "Live data synchronization ensuring all users have the most current information.",
      icon: "⚡",
    },
    {
      title: "Mobile Responsive",
      description: "Fully responsive design that works seamlessly on desktop, tablet, and mobile devices.",
      icon: "📱",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: "center",
          mb: 2,
          fontWeight: 700,
          color: theme.palette.primary.main,
        }}
      >
        Features
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 6,
          color: theme.palette.text.secondary,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Discover the powerful features of our dental clinic management system
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 3,
                transition: "transform 0.3s, boxShadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 4,
                },
              }}
            >
              <Typography variant="h2" sx={{ mb: 1 }}>
                {feature.icon}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {feature.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Performance Section */}
      <Card sx={{ p: 4, mb: 6, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          ⚡ Performance Optimized
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Frontend Optimization:</strong>
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, mb: 1 }}>
                • Code splitting and lazy loading
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, mb: 1 }}>
                • Minification and compression
              </Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>
                • 50% reduction in bundle size
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Backend Optimization:</strong>
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, mb: 1 }}>
                • Gzip compression (70% reduction)
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, mb: 1 }}>
                • Static asset caching
              </Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>
                • Database connection pooling
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Security Section */}
      <Card sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          🔐 Enterprise Security
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>✅ JWT Authentication</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>✅ Helmet Security Headers</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>✅ CORS Protection</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mb: 1 }}>✅ Input Validation</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>✅ Secure MongoDB</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>✅ Environment Encryption</Typography>
          </Grid>
        </Grid>
      </Card>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button variant="contained" color="primary" size="large">
          Start Free Trial
        </Button>
      </Box>
    </Container>
  );
};

export default Features;

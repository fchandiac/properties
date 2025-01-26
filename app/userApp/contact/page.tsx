'use client'
import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor.
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        We’d love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

"use client";
import React, { useState } from "react";
import { Box, Typography, Paper, Button, Stack, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

export default function AboutUsBackoffice() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("Descripción de la empresa...");
  const [video, setVideo] = useState("/public/video.mp4");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const handleSave = () => {
    setOpen(false);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideo(URL.createObjectURL(file));
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Sobre Nosotros</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stack spacing={2}>
          <Typography variant="subtitle1">Descripción de la empresa</Typography>
          <div style={{ minHeight: 120, background: "#fff" }}>
            <Typography variant="body1">{description}</Typography>
          </div>
          <Typography variant="subtitle1">Video de la historia</Typography>
          <video src={video} controls style={{ width: 320, borderRadius: 8 }} />
          <Button variant="contained" onClick={() => setOpen(true)}>Editar</Button>
        </Stack>
      </Paper>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Editar Sobre Nosotros</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>Descripción</Typography>
          <TextField
            value={description}
            onChange={e => setDescription(e.target.value)}
            multiline
            minRows={5}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Typography variant="subtitle2" sx={{ mb: 1 }}>Video de la historia</Typography>
          <video src={video} controls style={{ width: 320, borderRadius: 8, marginBottom: 8 }} />
          <Button variant="outlined" component="label">
            Cargar/Reemplazar Video
            <input type="file" accept="video/*" hidden onChange={handleVideoChange} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained">Guardar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

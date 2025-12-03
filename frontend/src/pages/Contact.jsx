import React, { useState } from 'react';
import {
  Container, Box, Typography, TextField, Grid, Button, Paper, Divider, Fade, Link
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ nome: '', email: '', mensagem: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, md: 6 } }}>
      <Fade in timeout={700}>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 5,
            background: 'linear-gradient(120deg, rgba(33,203,243,0.10) 0%, rgba(255,183,77,0.10) 100%)',
            boxShadow: '0 4px 32px 0 rgba(33,203,243,0.10)',
            mx: 'auto',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 1 }}>
              Fale Conosco
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
              Tem dúvidas, sugestões ou quer colaborar? Envie-nos uma mensagem!
            </Typography>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: 60 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="email"
                  inputProps={{ maxLength: 60 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mensagem"
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  minRows={4}
                  inputProps={{ maxLength: 500 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      fontWeight: 700,
                      borderRadius: 3,
                      px: 5,
                      py: 1.5,
                      fontSize: '1.1rem',
                      letterSpacing: 1,
                    }}
                  >
                    ENVIAR MENSAGEM
                  </Button>
                </Box>
                <Fade in={submitted}>
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                      Mensagem enviada com sucesso!
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </form>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ textAlign: 'center', mb: 1 }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
              Ou contacte-nos diretamente:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  <Link href="tel:928066265" underline="hover" color="inherit">
                    928066265
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  <Link href="mailto:dunameao@gmail.com" underline="hover" color="inherit">
                    dunameao@gmail.com
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <InstagramIcon color="primary" />
                <Typography variant="body2" color="text.secondary">
                  <Link href="https://www.instagram.com/dunameao" target="_blank" rel="noopener" underline="hover" color="inherit">
                    @dunameao
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Rua Nova 45, 3840-382, Lombomeão, Vagos, Aveiro
            </Typography>
          </Box>
        </Paper>
      </Fade>
    </Container>
  );
}

export default Contact;
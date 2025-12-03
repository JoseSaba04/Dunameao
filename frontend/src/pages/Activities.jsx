import React, { useState } from 'react';
import {
  Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button, Dialog, DialogTitle, Fade, DialogContent, DialogActions, Divider, Chip, Stack
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HowToRegIcon from '@mui/icons-material/HowToReg';

// Dados de exemplo (podes depois traer do backend)
const activities = [
  {
    id: 1,
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    date: 'Todas as segundas-feiras',
    start: '18:00',
    end: '19:00',
    description: 'Aula de Yoga para todos os níveis. Traga o seu tapete e venha relaxar!',
    vagas: 10,
  },
  {
    id: 2,
    title: 'Pilates',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    date: 'Todas as quartas-feiras',
    start: '19:30',
    end: '20:30',
    description: 'Pilates para fortalecer o corpo e a mente. Inscreva-se já!',
    vagas: 8,
  },
  {
    id: 3,
    title: 'Hip Hop Kids',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    date: 'Todas as sextas-feiras',
    start: '17:00',
    end: '18:00',
    description: 'Dança Hip Hop para crianças dos 6 aos 12 anos.',
    vagas: 12,
  },
];

function Activities() {
  const [selected, setSelected] = useState(null);
  const [inscrito, setInscrito] = useState(false);

  const handleOpen = (activity) => {
    setSelected(activity);
    setInscrito(false);
  };

  const handleClose = () => {
    setSelected(null);
    setInscrito(false);
  };

  const handleInscrever = () => {
    setInscrito(true);
    // Aqui podes fazer chamada ao backend para guardar inscrição
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Fade in timeout={700}>
        <Box>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 1 }}>
              Atividades
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
              Descobre as nossas atividades e inscreve-te facilmente!
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {activities.map((act) => (
              <Grid item xs={12} sm={6} md={4} key={act.id}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-6px) scale(1.03)', boxShadow: 6 },
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(4px)',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpen(act)}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={act.image}
                    alt={act.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {act.title}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <EventIcon fontSize="small" color="primary" />
                      <Typography variant="body2">{act.date}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon fontSize="small" color="secondary" />
                      <Typography variant="body2">
                        {act.start} - {act.end}
                      </Typography>
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                      <Chip
                        label={`${act.vagas} vagas`}
                        color={act.vagas > 0 ? 'success' : 'default'}
                        size="small"
                      />
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<HowToRegIcon />}
                      sx={{ mt: 2, borderRadius: 2, fontWeight: 700 }}
                      onClick={(e) => { e.stopPropagation(); handleOpen(act); }}
                      fullWidth
                    >
                      Inscrever-me
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* Modal de detalhes */}
      <Dialog open={!!selected} onClose={handleClose} maxWidth="sm" fullWidth>
        {selected && (
          <>
            <DialogTitle sx={{ fontWeight: 800, color: 'primary.main' }}>
              {selected.title}
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ mb: 2 }}>
                <img
                  src={selected.image}
                  alt={selected.title}
                  style={{
                    width: '100%',
                    borderRadius: 12,
                    marginBottom: 16,
                    objectFit: 'cover',
                    maxHeight: 220,
                  }}
                />
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  {selected.description}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                  <Chip icon={<EventIcon />} label={selected.date} />
                  <Chip icon={<AccessTimeIcon />} label={`${selected.start} - ${selected.end}`} />
                  <Chip label={`${selected.vagas} vagas`} color={selected.vagas > 0 ? 'success' : 'default'} />
                </Stack>
              </Box>
              <Divider sx={{ my: 2 }} />
              {!inscrito ? (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Para te inscreveres nesta atividade, clica no botão abaixo.
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ fontWeight: 700, borderRadius: 3, px: 4 }}
                    onClick={handleInscrever}
                    startIcon={<HowToRegIcon />}
                  >
                    Confirmar Inscrição
                  </Button>
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" color="success.main" sx={{ fontWeight: 700, mb: 2 }}>
                    Inscrição realizada com sucesso!
                  </Typography>
                  <Typography variant="body2">
                    Em breve receberás um e-mail com mais informações.
                  </Typography>
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Fechar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container >
  );
}

export default Activities;
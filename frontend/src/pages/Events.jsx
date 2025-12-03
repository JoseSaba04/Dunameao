import React, { useState } from 'react';
import {
  Container, Box, Typography, Grid, Card, CardMedia, CardContent, Fade, Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider, Chip, Stack
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

// Dados de exemplo (podes depois traer do backend)
const events = [
  {
    id: 1,
    title: 'Festival de Verão',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    date: '2024-07-15',
    start: '16:00',
    end: '23:00',
    description: 'Grande festival com música ao vivo, comida e atividades para toda a família!',
    isNew: true,
    local: 'Sede Dunameão',
  },
  {
    id: 2,
    title: 'Caminhada Solidária',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    date: '2024-08-10',
    start: '09:00',
    end: '12:00',
    description: 'Junta-te a nós numa caminhada solidária pelas ruas de Lombomeão.',
    isNew: false,
    local: 'Centro de Lombomeão',
  },
  {
    id: 3,
    title: 'Oficina de Artesanato',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    date: '2024-09-05',
    start: '15:00',
    end: '17:00',
    description: 'Aprende técnicas de artesanato e leva a tua criação para casa!',
    isNew: true,
    local: 'Sede Dunameão',
  },
];

function formatDate(dateStr) {
  if (!dateStr.includes('-')) return dateStr;
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' });
}

function Events() {
  const [selected, setSelected] = useState(null);

  const handleOpen = (event) => setSelected(event);
  const handleClose = () => setSelected(null);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Fade in timeout={700}>
        <Box>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 1 }}>
              Eventos & Novidades
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
              Fica a par dos próximos eventos e novidades da associação!
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {events.map((ev) => (
              <Grid item xs={12} sm={6} md={4} key={ev.id}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-6px) scale(1.03)', boxShadow: 6 },
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(4px)',
                    cursor: 'pointer',
                    border: ev.isNew ? '2px solid #ff9800' : undefined,
                  }}
                  onClick={() => handleOpen(ev)}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={ev.image}
                    alt={ev.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {ev.title}
                      </Typography>
                      {ev.isNew && (
                        <Chip
                          label="Novo"
                          color="secondary"
                          size="small"
                          sx={{ ml: 1, fontWeight: 700 }}
                        />
                      )}
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <EventIcon fontSize="small" color="primary" />
                      <Typography variant="body2">{formatDate(ev.date)}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon fontSize="small" color="secondary" />
                      <Typography variant="body2">
                        {ev.start} - {ev.end}
                      </Typography>
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<NewReleasesIcon />}
                        sx={{ borderRadius: 2, fontWeight: 700 }}
                        onClick={(e) => { e.stopPropagation(); handleOpen(ev); }}
                        fullWidth
                      >
                        Ver detalhes
                      </Button>
                    </Box>
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
                  <Chip icon={<EventIcon />} label={formatDate(selected.date)} />
                  <Chip icon={<AccessTimeIcon />} label={`${selected.start} - ${selected.end}`} />
                  <Chip label={selected.local} color="primary" />
                  {selected.isNew && (
                    <Chip label="Novo" color="secondary" />
                  )}
                </Stack>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Para mais informações ou para participar, entra em contacto connosco!
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{ fontWeight: 700, borderRadius: 3, px: 4 }}
                  href="/contact"
                >
                  Contactar Organização
                </Button>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Fechar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}

export default Events;
import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Chip, Stack, Divider, Button, Paper } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

// Dados de exemplo com imagens aleatórias temporárias
const activities = [
  {
    title: 'Yoga',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    date: 'Todas as segundas-feiras',
    start: '18:00',
    end: '19:00',
  },
  {
    title: 'Pilates',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    date: 'Todas as quartas-feiras',
    start: '19:30',
    end: '20:30',
  },
  {
    title: 'Hip Hop Kids',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    date: 'Todas as sextas-feiras',
    start: '17:00',
    end: '18:00',
  },
];

const events = [
  {
    title: 'Festival de Verão',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    date: '2024-07-15',
    start: '16:00',
    end: '23:00',
    isNew: true,
  },
  {
    title: 'Caminhada Solidária',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    date: '2024-08-10',
    start: '09:00',
    end: '12:00',
    isNew: false,
  },
  {
    title: 'Oficina de Artesanato',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    date: '2024-09-05',
    start: '15:00',
    end: '17:00',
    isNew: true,
  },
];

function formatDate(dateStr) {
  if (!dateStr.includes('-')) return dateStr;
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' });
}

function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Quem somos */}
      <Paper
        elevation={4}
        sx={{
          mb: 7,
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          background: 'linear-gradient(120deg, rgba(255,183,77,0.18) 0%, rgba(33,203,243,0.13) 100%)',
          boxShadow: '0 4px 32px 0 rgba(33,203,243,0.08)',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            minWidth: 80,
            minHeight: 80,
            background: 'linear-gradient(135deg, #1976d2 60%, #ff9800 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: { md: 3 },
            mb: { xs: 2, md: 0 },
            boxShadow: '0 2px 12px 0 rgba(25,118,210,0.10)',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 900,
              letterSpacing: 2,
              px: 2,
              py: 1,
              textShadow: '0 2px 8px rgba(25,118,210,0.10)',
            }}
          >
            Quem somos
          </Typography>
        </Box>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 700,
            fontWeight: 500,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Somos uma associação cultural e recreativa em Lombomeão (Vagos, Aveiro). Dinamizámos a comunidade promovendo atividades culturais, recreativas e desportivas para todas as idades.<br />
          <span style={{ color: '#1976d2', fontWeight: 700 }}>Junta-te a nós!</span>
        </Typography>
      </Paper>

      {/* Atividades Regulares */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'secondary.main',
            background: 'rgba(255,183,77,0.13)',
            px: 2,
            py: 1,
            borderRadius: 3,
            display: 'inline-block',
            boxShadow: '0 2px 8px 0 rgba(255,183,77,0.08)',
          }}
        >
          Atividades Regulares
        </Typography>
        <Grid container spacing={4}>
          {activities.map((act, idx) => (
            <Grid item xs={12} sm={6} md={4} key={act.title}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-6px) scale(1.03)', boxShadow: 6 },
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(4px)',
                }}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Divider bonito */}
      <Divider sx={{ my: 6, borderColor: 'primary.light', opacity: 0.3 }} />

      {/* Eventos e Novidades */}
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <NewReleasesIcon color="secondary" />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: 'rgba(33,203,243,0.13)',
              px: 2,
              py: 1,
              borderRadius: 3,
              display: 'inline-block',
              boxShadow: '0 2px 8px 0 rgba(33,203,243,0.08)',
            }}
          >
            Eventos & Novidades
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {events.map((ev, idx) => (
            <Grid item xs={12} sm={6} md={4} key={ev.title}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-6px) scale(1.03)', boxShadow: 6 },
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(4px)',
                  border: ev.isNew ? '2px solid #ff9800' : undefined,
                }}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Botão para ver mais eventos */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            borderRadius: 3,
            fontWeight: 700,
            px: 4,
            boxShadow: '0 2px 8px 0 rgba(25,118,210,0.08)',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(2px)',
            '&:hover': { background: 'rgba(33,203,243,0.10)' },
          }}
        >
          Ver todos os eventos
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
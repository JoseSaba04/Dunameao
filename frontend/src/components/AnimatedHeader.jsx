import React, { useEffect, useState, useRef } from 'react';
import { Container, Box, Typography, Slide, Fade } from '@mui/material';

function AnimatedHeader() {
  const [showBem, setShowBem] = useState(false);
  const [showVindo, setShowVindo] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showDunameao, setShowDunameao] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(window.scrollY);

  // Animación de entrada solo al cargar
  useEffect(() => {
    setTimeout(() => setShowBem(true), 400);
    setTimeout(() => setShowVindo(true), 1200);
    setTimeout(() => setShowA(true), 1800);
    setTimeout(() => setShowDunameao(true), 1800);
    setTimeout(() => setShowLogo(true), 2600);
  }, []);

  // Mostrar header al subir, ocultar al bajar (pero aparece si subes aunque sea un poco)
  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 40) {
        setVisible(true);
      } else if (currentScroll < lastScroll.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Fade in={visible} timeout={600}>
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '40vh', md: '50vh' },
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          pt: { xs: 6, md: 10 },
          pb: 2,
          transition: 'min-height 0.5s',
        }}
      >
        {/* Fondo animado de burbujas */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                borderRadius: '50%',
                opacity: 0.18,
                background: i % 2 === 0 ? '#ffb74d' : '#21cbf3',
                width: { xs: 30 + i * 8, md: 50 + i * 12 },
                height: { xs: 30 + i * 8, md: 50 + i * 12 },
                left: `${Math.random() * 90}%`,
                bottom: `-${30 + i * 10}px`,
                animation: `bubbleUp 16s linear infinite`,
                animationDelay: `${i * 1.2}s`,
                '@keyframes bubbleUp': {
                  '0%': { transform: 'translateY(0) scale(1)' },
                  '80%': { opacity: 0.18 },
                  '100%': { transform: 'translateY(-90vh) scale(1.2)', opacity: 0 },
                },
              }}
            />
          ))}
        </Box>
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'flex-start',
            height: '100%',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Slide direction="right" in={showBem} timeout={1200} mountOnEnter unmountOnExit>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 2,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  ml: { xs: 1, md: 0 },
                  textAlign: { xs: 'left', md: 'center' },
                }}
              >
                Bem-
              </Typography>
            </Slide>
            <Slide direction="left" in={showVindo} timeout={1200} mountOnEnter unmountOnExit>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  fontSize: { xs: '2rem', md: '3rem' },
                  ml: { xs: 4, md: 8 },
                  mt: -2,
                  color: 'secondary.main',
                  textAlign: { xs: 'left', md: 'center' },
                }}
              >
                vindo
              </Typography>
            </Slide>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
              <Slide direction="up" in={showA} timeout={1400} mountOnEnter unmountOnExit>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                    color: 'primary.main',
                    mr: 2,
                    mb: { xs: 0, md: 1 },
                  }}
                >
                  a
                </Typography>
              </Slide>
              <Slide direction="up" in={showDunameao} timeout={1400} mountOnEnter unmountOnExit>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: 3,
                    fontSize: { xs: '2.5rem', md: '5rem' },
                    color: 'primary.main',
                    textShadow: '0 4px 24px rgba(33,203,243,0.15)',
                  }}
                >
                  Dunameão
                </Typography>
              </Slide>
            </Box>
            <Fade in={showLogo} timeout={1200}>
              <Box
                component="img"
                src="/logo_dunameao.png"
                alt="Logo Dunameão"
                sx={{
                  width: { xs: 140, sm: 200, md: 260 },
                  mt: { xs: 3, md: 4 },
                  mb: 2,
                  display: 'block',
                  mx: { xs: 0, md: 'auto' },
                  filter: 'drop-shadow(0 4px 24px rgba(33,203,243,0.18))',
                }}
              />
            </Fade>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
}

export default AnimatedHeader;
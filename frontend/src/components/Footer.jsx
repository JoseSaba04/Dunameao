import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Dunameão — Associação cultural e recreativa.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Síguenos en&nbsp;
        <Link href="https://www.instagram.com/dunameao" target="_blank" rel="noopener">
          Instagram
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
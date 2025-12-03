import React, { useState } from 'react';
import {
  Container, Box, Typography, TextField, Grid, Button, Checkbox, FormControlLabel,
  FormGroup, MenuItem, Paper, Divider, FormHelperText, Fade
} from '@mui/material';

const sexos = ['Masculino', 'Feminino', 'Outro'];

const initialState = {
  nome: '',
  cc: '',
  nif: '',
  sexo: '',
  dataNasc: '',
  profissao: '',
  codPostal: '',
  morada: '',
  concelho: '',
  distrito: '',
  telemovel: '',
  email: '',
  rgpd: {
    email: true,
    sms: false,
    imagem: true,
    audio: false,
  },
  observacoes: '',
  consent: false,
};

const maxLen = {
  nome: 60,
  cc: 20,
  nif: 15,
  profissao: 40,
  codPostal: 12,
  morada: 80,
  concelho: 40,
  distrito: 40,
  telemovel: 15,
  email: 60,
  observacoes: 200,
};

function SectionTitle({ children }) {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        color: 'primary.main',
        mt: 4,
        mb: 2,
        letterSpacing: 1,
        background: 'rgba(33,203,243,0.08)',
        px: 2,
        py: 1,
        borderRadius: 2,
        display: 'inline-block',
      }}
    >
      {children}
    </Typography>
  );
}

function Signup() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('rgpd.')) {
      setForm((prev) => ({
        ...prev,
        rgpd: { ...prev.rgpd, [name.split('.')[1]]: checked },
      }));
    } else if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.nome) newErrors.nome = 'Obrigatório';
    if (!form.cc) newErrors.cc = 'Obrigatório';
    if (!form.nif) newErrors.nif = 'Obrigatório';
    if (!form.sexo) newErrors.sexo = 'Obrigatório';
    if (!form.dataNasc) newErrors.dataNasc = 'Obrigatório';
    if (!form.codPostal) newErrors.codPostal = 'Obrigatório';
    if (!form.morada) newErrors.morada = 'Obrigatório';
    if (!form.concelho) newErrors.concelho = 'Obrigatório';
    if (!form.distrito) newErrors.distrito = 'Obrigatório';
    if (!form.telemovel) newErrors.telemovel = 'Obrigatório';
    if (!form.email) newErrors.email = 'Obrigatório';
    if (!form.consent) newErrors.consent = 'Obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3500);
      setForm(initialState);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Fade in timeout={700}>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 5,
            background: 'linear-gradient(120deg, rgba(255,183,77,0.13) 0%, rgba(33,203,243,0.10) 100%)',
            boxShadow: '0 4px 32px 0 rgba(33,203,243,0.10)',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: 'primary.main', letterSpacing: 1 }}>
              Inscrição de Sócio
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
              Preencha os campos obrigatórios para se inscrever como sócio.
            </Typography>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <form onSubmit={handleSubmit} autoComplete="off">
            {/* Sección: Informação Pessoal */}
            <SectionTitle>Informação Pessoal</SectionTitle>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nome completo"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.nome }}
                  error={!!errors.nome}
                  helperText={errors.nome}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Nº Bilhete Identidade"
                  name="cc"
                  value={form.cc}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.cc }}
                  error={!!errors.cc}
                  helperText={errors.cc}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Nº Contribuinte (NIF)"
                  name="nif"
                  value={form.nif}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.nif }}
                  error={!!errors.nif}
                  helperText={errors.nif}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  select
                  label="Sexo"
                  name="sexo"
                  value={form.sexo}
                  onChange={handleChange}
                  required
                  fullWidth
                  error={!!errors.sexo}
                  helperText={errors.sexo}
                >
                  {sexos.map((s) => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Data de Nasc."
                  name="dataNasc"
                  type="date"
                  value={form.dataNasc || ''}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.dataNasc}
                  helperText={errors.dataNasc}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Profissão"
                  name="profissao"
                  value={form.profissao}
                  onChange={handleChange}
                  fullWidth
                  inputProps={{ maxLength: maxLen.profissao }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Código Postal"
                  name="codPostal"
                  value={form.codPostal}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.codPostal }}
                  error={!!errors.codPostal}
                  helperText={errors.codPostal}
                />
              </Grid>
            </Grid>

            {/* Sección: Morada */}
            <SectionTitle sx={{ mt: 4 }}>Morada</SectionTitle>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Morada"
                  name="morada"
                  value={form.morada}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.morada }}
                  error={!!errors.morada}
                  helperText={errors.morada}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Concelho"
                  name="concelho"
                  value={form.concelho}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.concelho }}
                  error={!!errors.concelho}
                  helperText={errors.concelho}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Distrito"
                  name="distrito"
                  value={form.distrito}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.distrito }}
                  error={!!errors.distrito}
                  helperText={errors.distrito}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Telemóvel"
                  name="telemovel"
                  value={form.telemovel}
                  onChange={handleChange}
                  required
                  fullWidth
                  inputProps={{ maxLength: maxLen.telemovel }}
                  error={!!errors.telemovel}
                  helperText={errors.telemovel}
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
                  inputProps={{ maxLength: maxLen.email }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
            </Grid>

            {/* Sección: RGPD */}
            <SectionTitle sx={{ mt: 4 }}>Consentimentos RGPD</SectionTitle>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormGroup row sx={{ justifyContent: 'center' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.rgpd.email}
                        onChange={handleChange}
                        name="rgpd.email"
                      />
                    }
                    label="RGPD E-mail"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.rgpd.sms}
                        onChange={handleChange}
                        name="rgpd.sms"
                      />
                    }
                    label="RGPD SMS"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.rgpd.imagem}
                        onChange={handleChange}
                        name="rgpd.imagem"
                      />
                    }
                    label="RGPD Imagem/Vídeo"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.rgpd.audio}
                        onChange={handleChange}
                        name="rgpd.audio"
                      />
                    }
                    label="RGPD Áudio"
                  />
                </FormGroup>
              </Grid>
            </Grid>

            {/* Sección: Observações */}
            <SectionTitle sx={{ mt: 4 }}>Observações</SectionTitle>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Observações"
                  name="observacoes"
                  value={form.observacoes}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  minRows={2}
                  inputProps={{ maxLength: maxLen.observacoes }}
                />
              </Grid>
            </Grid>

            {/* Consentimiento final y botón */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={form.consent}
                      onChange={handleChange}
                      name="consent"
                      required
                    />
                  }
                  label="Concordo com o exposto anteriormente e/ou o tratamento dos dados."
                  sx={{ alignItems: 'flex-start', mt: 1 }}
                />
                {errors.consent && (
                  <FormHelperText error>{errors.consent}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{
                      fontWeight: 700,
                      borderRadius: 3,
                      px: 5,
                      py: 1.5,
                      fontSize: '1.1rem',
                      boxShadow: '0 2px 8px 0 rgba(76,175,80,0.10)',
                      letterSpacing: 1,
                    }}
                  >
                    GUARDAR INSCRIÇÃO
                  </Button>
                </Box>
                <Fade in={submitted}>
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                      Inscrição enviada com sucesso!
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            </Grid>
          </form>
          <Divider sx={{ my: 3 }} />
          <Typography variant="body2" color="text.secondary" align="center">
            Ao enviar este formulário, concorda que os dados introduzidos sejam tratados por <b>Dunameão, Associação Cultural e Recreativa de Lombomeão</b> com o número de contribuinte <b>504828690</b> e sede na <b>Rua Nova 45, 3840-382, Lombomeão, Vagos, Aveiro</b>, para efeitos de gestão de sócios e partilha de informação.
          </Typography>
        </Paper>
      </Fade>
    </Container>
  );
}

export default Signup;
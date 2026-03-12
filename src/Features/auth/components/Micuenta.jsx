import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Divider,
  Box
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function MiCuenta() {

  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Card
        sx={{
          width: "100%",
          borderRadius: 3,
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
          padding: 2
        }}
      >
        <CardContent>

          {/* TITULO */}
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            Iniciar sesión
          </Typography>

          {/* USUARIO */}
          <TextField
          label="Correo"
          type="email"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
        />
          {/* CONTRASEÑA */}
          <TextField
            label="Contraseña"
            type={mostrarPassword ? "text" : "password"}
            fullWidth
            sx={{ mb: 2 }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleMostrarPassword}>
                      {mostrarPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }
            }}
          />

          {/* RECORDAR / OLVIDE */}
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 3 }}
          >
            <Grid>
              <FormControlLabel
                control={<Checkbox />}
                label="Recordar siempre"
              />
            </Grid>

            <Grid>
              <Link
                href="#"
                underline="hover"
                sx={{ fontSize: "14px" }}
              >
                Olvidé contraseña
              </Link>
            </Grid>
          </Grid>

          {/* BOTON LOGIN */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#000",
              textTransform: "none",
              fontSize: "16px",
              padding: "10px",
              mb: 3,
              "&:hover": {
                backgroundColor: "#333"
              }
            }}
          >
            Iniciar sesión
          </Button>

          {/* SEPARADOR */}
          <Divider sx={{ mb: 3 }}>
            <Typography sx={{ color: "#777", fontSize: "14px" }}>
              o continuar con
            </Typography>
          </Divider>

          {/* BOTONES GOOGLE / APPLE */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            
            <Grid size={6}>
          <Button
              variant="contained"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Google
          </Button>
            </Grid>

            <Grid size={6}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<AppleIcon />}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Apple
          </Button>

          </Grid>
          </Grid>

          {/* CREAR CUENTA */}
          <Box textAlign="center">
            <Typography sx={{ fontSize: "14px" }}>
              ¿No tienes cuenta?{" "}
              <Link href="#" underline="hover">
                Crear cuenta
              </Link>
            </Typography>
          </Box>

        </CardContent>
      </Card>
    </Container>
  );
}

export default MiCuenta;
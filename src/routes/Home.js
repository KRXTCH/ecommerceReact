// Corentin Lizy
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import CocktailCard from "../component/CocktailCard";

export default function Home() {
  const _navigate = useNavigate();

  const styles = {
    card: {
      marginTop: "5%",
      textAlign: "center",
      boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.4)",
    },
    title: {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "10px",
    },
    button: {
      margin: "10px auto",
    },
    text: {
      marginBottom: "10px",
      textDecoration: "underline",
    },
  };
  return (
    <>
      <Grid container spacing={0}>
        <Grid item sm={2} md={3} />
        <Grid item xs={12} sm={8} md={6}>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 5 } }}
            noValidate
            autoComplete="off"
          >
            <Card style={styles.card}>
              <h1 style={styles.title}>Bienvenue !</h1>

              <CardContent>
                <p style={styles.text}>
                  Le meilleur site de cocktail de la région
                </p>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  style={styles.button}
                  onClick={() => _navigate("/search")}
                >
                  Rechercher des cocktails
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item sm={2} md={3} />
      </Grid>

      <h2 style={styles.title}>Voici des exemples de cocktails aléatoires :</h2>

      <Grid container spacing={0}>
        <Grid item sm={1} md={2} />
        <Grid item xs={6} sm={5} md={4}>
          <CocktailCard />
        </Grid>
        <Grid item xs={6} sm={5} md={4}>
          <CocktailCard />
        </Grid>
        <Grid item sm={1} md={2} />
      </Grid>
      <Grid container spacing={0}>
        <Grid item sm={1} md={2} />
        <Grid item xs={6} sm={5} md={4}>
          <CocktailCard />
        </Grid>
        <Grid item xs={6} sm={5} md={4}>
          <CocktailCard />
        </Grid>
        <Grid item sm={1} md={2} />
      </Grid>
    </>
  );
}

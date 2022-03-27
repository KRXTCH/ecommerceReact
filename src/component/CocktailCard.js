//Corentin Lizy

import React, { useEffect } from "react";
import { Box, Card, CardContent } from "@mui/material";
import loading from "../img/loading.gif"

export default function CocktailCard() {
  const [cocktail, setCocktail] = React.useState("");

  const FetchFromUriAsync = async () => {
    try {
      const aResponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      ).then((r) => r.json());
      console.log(aResponse.drinks[0]);
      setCocktail(aResponse.drinks[0]);
      console.log(cocktail);
    } catch (e) {}
  };

  useEffect(() => {
    FetchFromUriAsync();
  }, []);
  const styles = {
    card: {
      marginTop: "5%",
      textAlign: "center",
      boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.4)",
    },
    title: {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "20px",
    },
    text: {
      marginBottom: "30px",
      textDecoration: "underline",
    },
    cardTitle: {
      textDecoration: "underline",
    },
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 5 } }}
      noValidate
      autoComplete="off"
    >
      <Card style={styles.card}>
        {cocktail ? (
          <>
            <h2 style={styles.title}>{cocktail.strDrink}</h2>
            <CardContent>
              <img
                src={cocktail.strDrinkThumb}
                width="256"
                alt="Cocktail image"
              />
              <h4 style={styles.cardTitle}>Ingrédients</h4>
              {cocktail.strIngredient1 ? (
                <p>- {cocktail.strIngredient1}</p>
              ) : null}
              {cocktail.strIngredient1 ? (
                <p>- {cocktail.strIngredient2}</p>
              ) : null}
              <h4 style={styles.cardTitle}>Préparation</h4>
              <p>{cocktail.strInstructions}</p>
            </CardContent>
          </>
        ) : (
          <img src={loading} width="128"/>
        )}
      </Card>
    </Box>
  );
}

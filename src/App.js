import "./App.css";
import { Header } from "./models/Header";
import React, { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import "./models/CustomCard.css";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="app">
      <Header value={value} setValue={setValue}></Header>
      <Cocktails name={value}></Cocktails>
    </div>
  );
}

function Cocktails(props) {
  const [items, setItems] = React.useState("");
  const [detailsLoaded, setDetailsLoaded] = React.useState(false);
  const {name} = props;

  const FetchFromUriAsync = async() => {

    setDetailsLoaded(false);

    try{
      const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
      .then(r => r.json());
      console.log(resp)
      setItems(resp)
      setDetailsLoaded(true)
    } catch(e){
      setDetailsLoaded(false)
    }
  }

  useEffect(()=>{
    FetchFromUriAsync();
  })


  console.log(detailsLoaded)
  if (!detailsLoaded)
    return (
      <div className="loader">
        <iframe src="https://embed.lottiefiles.com/animation/8438"></iframe>
      </div>
    );

  return (
    <div className="cocktails">
      <Grid container className="grid" spacing={5}>
        {items.drinks.map((drink) => (
          <Grid item>
            <Card className="card">
              <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb}></img>
              <div className="drink-info">
                <p className="drink-name">{drink.strDrink}</p>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;

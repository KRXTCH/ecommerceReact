import React from "react";
import { Card, Grid } from "@mui/material";
import "./CustomCard.css";

export class Cocktails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount(uri) {
    if(uri === "" || uri == null){
      uri = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
    }
    console.log(uri);
    fetch(
      uri
    )
      .then((res) => res.json())
      .then((json) => {
        if(json.drinks != null){
          this.setState({
            items: json,
            DataisLoaded: true,
          });
        }
      });
  }

  render() {
    let uri = "";
    const searchValue = this.props;
    const { DataisLoaded, items } = this.state;

    if(searchValue.name.length > 0){
      console.log(searchValue.name)

      uri = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + JSON.stringify(searchValue.name).replace('"', '').slice(0, -1);
      this.componentDidMount(uri)
    } else {
      uri = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
    }

    if (!DataisLoaded)
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
                    <img
                      src={drink.strDrinkThumb}
                      alt={drink.strDrinkThumb}
                    ></img>
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
}

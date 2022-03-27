import React, { useEffect } from "react";
import Loader from "../ressources/gifs/loader.gif";
import { CLoaderIframe, CCocktailsContainer, CGrid, CCard, CCardImage, CDrinkInfo, CDrinkName } from "./Styles/CustomElements";
import { Grid } from "@mui/material";

export function Cocktails(props) {
    const [items, setItems] = React.useState("");
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const { name } = props;
    let html;

    const FetchFromUriAsync = async () => {
        try {
            const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
                .then(r => r.json());

            setItems(resp)
            setDataLoaded(true)
        } catch (e) {
            console.log(e)
            setDataLoaded(false)
        }
    }

    useEffect(() => {
        FetchFromUriAsync();
    }, [])


    if (!dataLoaded) {
        return (
            <div>
                <CLoaderIframe src={Loader} alt="Loading..."></CLoaderIframe>
            </div>
        );
    } else {
        html = items.drinks.filter(e => e.strDrink.toLowerCase().startsWith(name.toLowerCase()))
            .map((element) => {
                return (
                    <Grid item>
                        <CCard>
                            <CCardImage src={element.strDrinkThumb} alt={element.strDrinkThumb}></CCardImage>
                            <CDrinkInfo>
                                <CDrinkName>{element.strDrink}</CDrinkName>
                            </CDrinkInfo>
                        </CCard>
                    </Grid>
                )
            })
    }

    return (
        <CCocktailsContainer>
            <CGrid container spacing={5}>
                {html}
            </CGrid>
        </CCocktailsContainer>
    );
}
//Jelezian Lorys

import React, { useEffect } from "react";
import Loader from "../ressources/gifs/loader.gif";
import { CLoaderIframe, CCocktailsContainer, CGrid, CCard, CCardImage, CDrinkInfo, CDrinkName, CText, CPagination } from "./Styles/CustomElements";
import { Grid } from "@mui/material";


export function Cocktails(props) {
    const [items, setItems] = React.useState("");
    const [paginatedItems, setPaginatedItems] = React.useState("");
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const { name } = props;
    let html;
    let currentPage = 1;

    const FetchFromUriAsync = async () => {
        try {
            const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
                .then(r => r.json());

            setPaginatedItems(paginate(resp.drinks, 14, 1))
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

    const handleChange = (e, p) => {
        setPaginatedItems(paginate(items.drinks, 14, p))
    }

    const paginate = (array, pageSize, pageNumber) => {
        return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }


    if (!dataLoaded) {
        return (
            <div>
                <CLoaderIframe src={Loader} alt="Loading..."></CLoaderIframe>
            </div>
        );
    } else {
        if (name != "") {
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
        } else {
            html = paginatedItems.filter(e => e.strDrink.toLowerCase().startsWith(name.toLowerCase()))
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
    }

    return (
        <CCocktailsContainer>
            <CText>Tous nos cocktails :</CText>
            <CGrid container spacing={5}>
                {html}
            </CGrid>
            <CPagination
                count={Math.ceil(items.drinks.length / 14)}
                onChange={handleChange}
                variant="outlined"
                color="primary" />
        </CCocktailsContainer>
    );
}
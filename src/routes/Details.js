// Antonin Artaud
import React, {Component, useEffect} from 'react';
import {Box, Card, CardContent, CardMedia, Container, Dialog, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

function getIngredients(d) {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
        if (d[`strIngredient${i}`]) {
            if (d[`strMeasure${i}`]) {
                ingredients.push(
                    <li key={i}>
                        {d[`strIngredient${i}`]} - {d[`strMeasure${i}`]}
                    </li>
                );
            } else {
                ingredients.push(
                    <li key={i}>
                        {d[`strIngredient${i}`]}
                    </li>
                );
            }
        }
    }
    return ingredients;
}

export default function Details() {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                response.json().then(r => {
                    setData(r.drinks);
                })
            }).catch(error => console.log(error));
    }, []);

    function handleClose() {
        navigate('/search');
    }

    return (
        <Dialog open={true} onClose={handleClose} maxWidth={'lg'}>
            <div style={{maxHeight: "100vh", display: "flex", justifyContent: "center", alignContent: "center"}}>
                <Card sx={{display: 'flex', backgroundColor : 'lightgrey'}}>
                    <Box>
                        {data.map(d => (
                            <div key={d.idDrink}>
                                <CardContent>
                                    <Typography component={'div'} variant={"h2"}>
                                        {d.strDrink}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography component={'div'} variant={"h5"}>
                                        Category: {d.strCategory}
                                    </Typography>
                                    <Typography component={'div'} variant={"h5"}>
                                        Glass : {d.strGlass}
                                    </Typography>
                                    <Typography component={'div'} variant={"h5"}>
                                        Type of cocktails:  {d.strAlcoholic}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography component={'div'} variant={"h5"}>
                                        Ingredients
                                    </Typography>
                                    <ul>
                                        {getIngredients(d)}
                                    </ul>
                                </CardContent>
                                <CardContent>
                                    <Typography component={'div'} variant={"h5"}>
                                        Instructions
                                    </Typography>
                                    <Typography variant={"body1"} color={"black"}>
                                        {d.strInstructions}
                                    </Typography>
                                </CardContent>
                            </div>
                        ))}
                    </Box>
                    {data.map(d => (
                        <CardMedia
                            component={'img'}
                            sx={{width: '100%', height: 'auto'}}
                            src={d.strDrinkThumb}
                            alt={d.strDrink}
                        />
                    ))}
                </Card>
            </div>
        </Dialog>
    )
}

import { styled } from "@mui/system";
import { Card, Grid } from "@mui/material";

export const CHeader = styled('div')({
    backgroundColor: 'lightsteelblue',
    height: 'fit-content',
    padding: '2rem 5rem',
    display: 'inline-flex',
    width: '-moz-available'
})

export const CHeaderIframe = styled('iframe')({
    border: 'none',
    height: '5rem',
    width: '10rem',
    position: 'absolute',
    top: '0'
})

export const CHeaderName = styled('div')({
    fontFamily: 'Nunito, sans-serif',
    fontSize: '1.5rem',
    lineHeight: '6rem',
    position: 'absolute',
    marginLeft: '9rem',
    top: '0'
})

export const CInput = styled('input')({
    height: '2rem',
    borderRadius: '20px',
    border: 'none',
    margin: 'auto',
    width: '20rem',
    padding: '0 1rem',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '1.2rem'
})

export const CLoaderIframe = styled('iframe')({
    border: 'none',
    width: '300px',
    height: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
})

export const CCocktailsContainer = styled('div')({
    padding: '5rem'
})

export const CGrid = styled(Grid)({
    justifyContent: 'center'
})

export const CCard = styled(Card)({
    width: 'fit-content',
    height: 'fit-content',
    minHeight: '18rem',
    boxShadow: '0px 0px 18px 1px rgba(0,0,0,0.3) !important'
})

export const CCardImage = styled('img')({
    width: '11rem',
    height: 'auto'
})

export const CDrinkInfo = styled('div')({
    width: '9rem',
    padding: '1rem'
})

export const CDrinkName = styled('p')({
    fontFamily: 'Nunito, sans-serif',
    fontSize: '1rem',
    maxWidth: '11rem'
})
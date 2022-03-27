//Jelezian Lorys

import React from "react";
import { CHeader, CHeaderIframe, CHeaderName, CInput } from "./Styles/CustomElements";

export function Header(props) {
  const { value, setValue } = props;
  return (
    <CHeader>
      <CHeaderIframe src="https://embed.lottiefiles.com/animation/61188"></CHeaderIframe>
      <CHeaderName>cocktail</CHeaderName>
      <SearchBar value={value} setValue={setValue}></SearchBar>
    </CHeader>
  );
}

function SearchBar({ value, setValue }) {
  function handleValueChanged(e) {
    setValue(e.target.value)
  }

  return (
    <CInput
      placeholder="Alabama Slammer"
      value={value}
      onChange={handleValueChanged}>
    </CInput>
  )
}
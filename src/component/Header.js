import React from "react";
import "./CustomCard.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    const {value, setValue} = this.props;
    return (
      <div className="header">
        <iframe src="https://embed.lottiefiles.com/animation/61188"></iframe>
        <div className="header-name">cocktail</div>
        <SearchBar value={value} setValue={setValue}></SearchBar>
      </div>
    );
  }
}

function SearchBar({value, setValue}){
    function handleValueChanged(e){
        setValue(e.target.value)
    }

    return (
        <input 
        className="input-search" 
        placeholder="Sex on the beach"
        value={value}
        onChange={handleValueChanged}>
        </input>
    )
}
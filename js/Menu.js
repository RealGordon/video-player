import React from 'react';

export class Menu extends React.Component {
  
  handleClick(e){
      var text = e.target.value;
  this.props.chooseVideo(text);
  }
  render() {
    return (
      <form onClick={(e)=>{
       // e.preventDefault();
        this.handleClick(e)}}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
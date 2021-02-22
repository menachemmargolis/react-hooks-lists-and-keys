import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

 const sackleBcakle = colors.map((color) => <ColorItem  style ={{color: color}} color={color}/>)

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ul>
      {sackleBcakle}
      </ul>
    </div>
  );
}

function ColorItem(props){
  return  <li style={props.style}>{props.color}</li>

}

export default ColorList;

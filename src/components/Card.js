// import React from "react";

// const Card = (props) => {
//   console.log(props.values);
//   // props destructuring
//   const { _id, desc, url, prodName } = props.values;
//   return (
//     <div class="card">
//       <img src={url} class="card-img-top img-flex" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title">{prodName}</h5>
//         <p class="card-text">{desc}</p>
//         <button class="btn btn-primary">Go somewhere</button>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { Component } from "react";

class Card extends Component {
  render() {
    console.log("logged via this", this.props);
    const { _id, desc, url, prodName } = this.props.values;

    this.state = {
      btnText: "Buy " + _id,
    };
    return (
      <div class="card">
        <img src={url} class="card-img-top img-flex" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{prodName}</h5>
          <p class="card-text">{desc}</p>
          <button class="btn btn-primary">{this.state.btnText}</button>
        </div>
      </div>
    );
  }
}

export default Card;

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
  constructor(props) {
    super(props);

    this.state = {
      showImage: false,
      inCart: 0,
    };
  }
  render() {
    console.log("logged via this", this.props);
    const { _id, desc, url, prodName } = this.props.values;

    const handleClick = () => {
      // syntax 1
      this.setState({
        ...this.state,
        showImage: true,
      });
      // console.log("hit");
    };
    const handleAdd = () => {
      // syntax 2
      this.setState((state) => {
        return {
          ...state,
          inCart: state.inCart + 1,
        };
      });
    };
    // if (this.state.showImage) return <h1>Hello</h1>;
    return (
      <div class="card">
        {this.state.showImage ? (
          <img src={url} class="card-img-top img-flex" alt="..." />
        ) : (
          <h3>Not showing the image as of now</h3>
        )}
        <div class="card-body">
          <h5 class="card-title">{prodName}</h5>
          <p class="card-text">{desc}</p>
          <button class="btn btn-primary" onClick={handleClick}>
            Press to show Image
          </button>
          <br />
          <br />
          <button onClick={handleAdd} className="btn btn-info ml-5">
            {this.state.inCart === 0
              ? "Add to cart"
              : `${this.state.inCart} added, press to add more`}
            {/* to write varibales in a string use ``  */}
          </button>
        </div>
      </div>
    );
  }
}

export default Card;

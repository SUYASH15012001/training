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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showImage: false,
      inCart: 0,
    };
  }
  render() {
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
    return (
      <Card raised style={{ margin: 10 }}>
        {this.state.showImage ? (
          <CardMedia component="img" alt="green iguana" image={url} />
        ) : (
          <Typography variant="caption" style={{ marginLeft: "5%" }}>
            Not showing the image as of now, although the id is {_id}
          </Typography>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prodName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleAdd}>
            {this.state.inCart === 0
              ? "Add to cart"
              : `${this.state.inCart} added, press to add more`}
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={handleClick}>
            Show Image
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ProductCard;

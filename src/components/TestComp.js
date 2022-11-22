import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { fetchStatus } from "../redux/controllers/homeControllers";
export const TestComp = ({ a, dispatch }) => {
  console.log(a);
  const handleClick = () => {
    fetchStatus(1);
  };
  return (
    <div>
      <Button
        onClick={() => {
          // console.log("pressed");
          dispatch({ type: "counter/incremented" });
        }}>
        Press
      </Button>
      <Button
        onClick={handleClick}
        variant="contained"
        style={{ textTransform: "none" }}>
        Get status
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  a: state.home,
});

export default connect(mapStateToProps)(TestComp);

import React from "react";
import { connect } from "react-redux";

export const TestComp = (props) => {
  console.log(props);
  return <div>TestComp</div>;
};

const mapStateToProps = (state) => ({
  a: state.home,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TestComp);

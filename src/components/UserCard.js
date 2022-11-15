import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Grid, Typography, Avatar } from "@mui/material";
// normal declaration
// function UserCard({ name, designation, age, url }) {

// arrow decalration
const UserCard = ({ name, designation, age, url, _id, socialMedia, ind }) => {
  // console.log(window.location.pathname, window.location.pathname === "/about");
  let navigator = useNavigate();
  // console.log(ind);
  const handleNavigate = () => {
    navigator(`/userDetails/${ind}`);
    // console.log(window.location.pathname);
    // if (window.location.pathname === "/about") navigator("/");
    // else navigator("/about");
  };
  // if (window.location.pathname === "/about")
  //   return <h2 onClick={handleNavigate}>Hello world</h2>;
  return (
    <Paper onClick={handleNavigate} style={{ padding: 20, margin: 10 }}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          {url ? (
            <Avatar style={{ height: 100, width: 100 }} src={url} />
          ) : (
            <Avatar style={{ height: 100, width: 100, fontSize: 50 }}>
              {name[0]}
            </Avatar>
          )}
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="subtitle1">{designation}</Typography>
          <Typography variant="caption" color="GrayText">
            {age}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserCard;

import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function UserDetails(props) {
  console.log(props);

  const { id } = useParams();
  const { entireUserDatabase } = props;
  const data = entireUserDatabase[id];
  console.log(data); // fetching params
  const handleNavigate = (endpoint) => {
    console.log("====================================");
    console.log(endpoint);
    console.log("====================================");
    window.location = endpoint;
  };
  return (
    <Grid container style={{ padding: 10 }}>
      <Grid item xs={12} md={8} lg={9}>
        <Typography variant="h4" component="h2">
          About
        </Typography>
        <Typography variant="body1" style={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad
          voluptas at obcaecati nihil eos esse sunt, quaerat quae iusto ex odit,
          enim doloremque explicabo incidunt tempore omnis vero possimus!
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          doloremque itaque velit officiis reprehenderit, eum minus, porro unde
          quas fuga doloribus, dignissimos officia perspiciatis asperiores.
          Maiores placeat sunt ullam deleniti. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa ad voluptas at obcaecati nihil eos
          esse sunt, quaerat quae iusto ex odit, enim doloremque explicabo
          incidunt tempore omnis vero possimus!
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          doloremque itaque velit officiis reprehenderit, eum minus, porro unde
          quas fuga doloribus, dignissimos officia perspiciatis asperiores.
          Maiores placeat sunt ullam deleniti. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa ad voluptas at obcaecati nihil eos
          esse sunt, quaerat quae iusto ex odit, enim doloremque explicabo
          incidunt tempore omnis vero possimus!
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          doloremque itaque velit officiis reprehenderit, eum minus, porro unde
          quas fuga doloribus, dignissimos officia perspiciatis asperiores.
          Maiores placeat sunt ullam deleniti.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Avatar
          variant="rounded"
          src={data.url}
          style={{
            // minHeight: 200,
            width: "100%",
            height: "auto",
          }}
          alt={data.name}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <IconButton onClick={() => handleNavigate(data.socialMedia.fb)}>
            <FacebookTwoTone style={{ color: "#1f5ed9", fontSize: 45 }} />
          </IconButton>
          <IconButton onClick={() => handleNavigate(data.socialMedia.google)}>
            <Twitter style={{ color: "#0abdf9", fontSize: 45 }} />
          </IconButton>
          <IconButton onClick={() => handleNavigate(data.socialMedia.ig)}>
            <Instagram style={{ color: "#1f5ed9", fontSize: 45 }} />
          </IconButton>
          <IconButton>
            <LinkedIn
              onClick={() => handleNavigate(data.socialMedia.ld)}
              style={{ color: "#1f5ed9", fontSize: 45 }}
            />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}

export default UserDetails;

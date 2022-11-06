import React from "react";
import { useParams } from "react-router-dom";

function UserDetails(props) {
  //   console.log(props);

  // fetching params
  const { id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3>On user detail Page of user with id as : {id}</h3>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

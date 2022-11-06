import React from "react";
import { useNavigate } from "react-router-dom";

// normal declaration
// function UserCard({ name, designation, age, url }) {

// arrow decalration
const UserCard = ({ name, designation, age, url, _id }) => {
  // console.log(window.location.pathname, window.location.pathname === "/about");
  let navigator = useNavigate();
  const handleNavigate = () => {
    navigator(`/userDetails/${_id}`);
    // console.log(window.location.pathname);
    // if (window.location.pathname === "/about") navigator("/");
    // else navigator("/about");
  };
  // if (window.location.pathname === "/about")
  //   return <h2 onClick={handleNavigate}>Hello world</h2>;
  return (
    <div
      onClick={handleNavigate}
      class="card mb-3"
      style={{
        maxHeight: 540,
      }}>
      <div class="row g-0">
        <div class="col-md-2">
          <img
            src={url || "logo512.png"}
            style={{ maxHeight: 200 }}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{designation}</p>
            <p class="card-text">
              <small class="text-muted">{age}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

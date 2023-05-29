import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import background from "../bg4.svg";
import noImage from "../no-image.png";

export const Githubprofile = () => {
    const [loading, setLoading] = useState(true);
   const [props, setGithub] = useState([]);
   const { githubText } = JSON.parse(localStorage.getItem("formData"));
   const navigate = useNavigate();
   useEffect(() => {
     if (githubText) {
       githubProfile();
     } else {
       navigate("/");
     }
   }, []);

   const url2 = `https://api.github.com/users/${githubText}`;

   const githubProfile = async () => {
     try {
       const response = await fetch(url2);
       setLoading(true);
       const data = await response.json();
       setGithub(data);
       setLoading(false);
       // console.log(data);
     } catch (error) {
       console.log(error);
     }
   };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h3
        className="text-center"
        style={{ marginBottom: "45px", color: "#4f4f4f" }}
      >
        Github Profile Status!
      </h3>
      {loading && <Spinner />}
      <div
        className="container"
        style={{
          width: "400px",
        }}
      >
        <div className="card" style={{ color: "" }}>
          <img
            src={props.avatar_url ? props.avatar_url : noImage}
            style={{ height: "220px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card1 card-body">
            <h5 className="card-title">Name : {props.name}</h5>
            <p className="card-title">About : {props.bio}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              Repositories : {props.public_repos}
            </li>
            <li className="list-group-item">Followers : {props.followers}</li>
            <li className="list-group-item">Following : {props.following}</li>
            <li className="list-group-item">Updated_at : {props.updated_at}</li>
          </ul>
          <div className="card-body">
            <a href={`https://github.com/${githubText}`} className="card-link">
              <button type="button" className="btn btn-secondary">
                Github Profile
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

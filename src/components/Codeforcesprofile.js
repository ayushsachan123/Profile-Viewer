import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import background from "../bg4.svg";
import noImage from "../no-image.png"

export default function Codeforcesprofile() {
  
   const [loading, setLoading] = useState(true);
   const [props, setCodeforces] = useState([]);
   const { codeforcesText } = JSON.parse(localStorage.getItem("formData"));
   const navigate = useNavigate();
   useEffect(() => {
     if (codeforcesText) {
       codeforcesProfile();
     } else {
       navigate("/");
     }
   }, []);

    const url3 = `https://codeforces.com/api/user.info?handles=${codeforcesText}`;

    const codeforcesProfile = async () => {
      try {
        const response = await fetch(url3);
        setLoading(true);
        const data = await response.json();
        setCodeforces(data.result[0]);
        console.log(data.result);
        setLoading(false);
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
        Codeforces Profile Status!
      </h3>
      {loading && <Spinner />}
      <div
        className="container mx-auto"
        style={{
          width: "400px",
        }}
      >
        <div className="card">
          <img
            src={props.titlePhoto ? props.titlePhoto : noImage}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card1 card-body">
            <h5 className="card-title">
              Name : {props.firstName ? props.firstName : "----"}{" "}
              {props.lastName ? props.lastName : "----"}
            </h5>
            <p className="card-text">
              Organization : {props.organization ? props.organization : "----"}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Rating : {props.rating}</li>
            <li className="list-group-item">Friends : {props.friendOfCount}</li>
            <li className="list-group-item">Rank : {props.maxRating}</li>
            <li className="list-group-item">MaxRank : {props.maxRank}</li>
          </ul>
          <div className="card-body">
            <a
              href={`https://codeforces.com/profile/${codeforcesText}`}
              className="card-link"
            >
              <button type="button" className="btn btn-secondary">
                Codeforces Profile
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

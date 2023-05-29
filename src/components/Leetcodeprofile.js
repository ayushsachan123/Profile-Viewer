import React ,{ useEffect, useState}from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../leetcode.png';
import Spinner from "./Spinner";
import background from "../bg4.svg";

export default function Leetcodeprofile() {
   const [loading, setLoading] = useState(true);
  const [props, setLeetcode] = useState([]);
  const {text} = JSON.parse(localStorage.getItem('formData'));
  const navigate = useNavigate();
  useEffect(()=> {
    if(text)  {
      leetcodeProfiles();
    } else {
      navigate('/')
    }
    
  }, []);

  const url = `https://leetcode-stats-api.herokuapp.com/${text}`;
  const leetcodeProfiles = async () => {
    try {
      const response = await fetch(url);
      setLoading(true);
      const data = await response.json();
      setLeetcode(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

   let per = ((props.totalSolved / props.totalQuestions) * 100).toFixed(2);

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
        style={{ marginBottom: "45px", color: "#4f4f4f"}}
      >
        Leetcode Profile Status!
      </h3>
      {loading && <Spinner />}
      <div
        className="container"
        style={{
          width: "400px",
        }}
      >
        <div className="card">
          <img
            src={logo}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Ranking : {props.ranking}</li>
            <li className="list-group-item">EasySolved : {props.easySolved}</li>
            <li className="list-group-item">
              MediumSolved : {props.mediumSolved}
            </li>
            <li className="list-group-item">HardSolved : {props.hardSolved}</li>
            <li className="list-group-item">
              ContributionPoints : {props.contributionPoints}
            </li>
            <li className="list-group-item">
              AcceptanceRate : {props.acceptanceRate}
            </li>
            <li className="list-group-item">Solved : {per}%</li>
            <li className="list-group-item">
              Total Questions : {props.totalQuestions}
            </li>
          </ul>
          <div className="card-body">
            <a href={`https://leetcode.com/${text}`} className="card-link">
              <button type="button" className="btn btn-secondary">
                Leetcode Profile
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

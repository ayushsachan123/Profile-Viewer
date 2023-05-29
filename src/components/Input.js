import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
import background from "../bg4.svg";
// import "../App.css";

const Input = (props) => {
  const [text, setText] = useState('');
  const [githubText, setGithubText] = useState('');
  const [codeforcesText, setCodeforcesText] = useState("");
  // const navigate = useNavigate();

    const handleOnChange = (event) => {
      setText(event.target.value);
    };
    const handleOngitChange = (event) =>{
       setGithubText(event.target.value);
    }

    const handleOncodetChange = (event) => {
      setCodeforcesText(event.target.value);
    }

    const handleClick = () => {
       setText(text);
       setGithubText(githubText);
       setCodeforcesText(codeforcesText);
       localStorage.setItem('formData',JSON.stringify({text,githubText,codeforcesText}))
      // navigate('/leetcode');
      props.showAlert("Profile Submitted Please Check Your Status!", "success");
    };
    

    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="text-center"
          style={{ marginTop: "16px", marginBottom: "70px" }}
        >
          Profile Viewer
        </h1>
        <div
          className="card mx-auto"
          style={{
            width: "500px",
            height: "450px",
          }}
        >
          <ul className="list-group list-group-flush">
            <label
              htmlFor="basic-url"
              className="form-label"
              style={{ paddingTop: "20px" }}
            >
              <h5 style={{ textAlign: "center" }}>Your Leetcode Url</h5>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addon3">
                https://leetcode.com/
              </span>
              <input
                onChange={handleOnChange}
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                value={text}
              />
            </div>
            <label
              htmlFor="basic-url"
              className="form-label"
              style={{ paddingTop: "20px" }}
            >
              <h5 style={{ textAlign: "center" }}>Your Github Url</h5>
            </label>
            <div className="input-group mb-2">
              <span className="input-group-text" id="basic-addon3">
                https://github.com/
              </span>
              <input
                onChange={handleOngitChange}
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                value={githubText}
              />
            </div>
            <label
              htmlFor="basic-url"
              className="form-label"
              style={{ paddingTop: "20px" }}
            >
              <h5 style={{ textAlign: "center" }}>Your Codeforces Url</h5>
            </label>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                id="basic-addon3"
                style={{ marginBottom: "20px" }}
              >
                https://codeforces.com/profile/
              </span>
              <input
                style={{ marginBottom: "20px" }}
                onChange={handleOncodetChange}
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                value={codeforcesText}
              />
            </div>
          </ul>
          <div className="card-body">
            <button
              className="btn btn-secondary mx-1 my-1 p-2"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
        <div style={{ paddingBottom: "200px" }}></div>
      </div>
    );
}

export default Input;
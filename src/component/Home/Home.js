import React from "react";

import "./Home.css";
import searchIcon from "../../Media/Search.svg";
import filterIcon from "../../Media/Filter.svg";

import logoutIcon from "../../Media/logout.svg";

import postFile from "./PostFile";
import artistFile from "./ArtistsFile";
import Post from "./Post/Post";
import Artists from "./Artists/Artists";
import navLinks from "./Navigationlinks";

import starIcon from "../../Media/star.svg";

import shopwall from "./shopwallFile";
import { useUserAuth } from "../../context/userAuthContext";

import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  let { user, logOut } = useUserAuth();

  if (!user) {
    return navigate("/login");
  }

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="home-main-container">
      <div className="main-container">
        <div className="first-column">
          <div className="main-logo">
            <h1>DALE ARTS</h1>
          </div>
          <div className="main-side-navigation">
            <div className="navigation-links">
              {navLinks.map((link, index) => {
                return (
                  <div
                    className={index === 0 ? "nav-link active" : "nav-link"}
                    key={index}
                  >
                    <div className="link-icon">
                      <link.linkIcon />
                    </div>
                    <p>{link.link}</p>
                  </div>
                );
              })}
            </div>
            <div className="logout-button" onClick={handleLogout}>
              {" "}
              <img src={logoutIcon} alt="logout" />
              <p>Logout</p>
            </div>
          </div>
          <div className="main-copyright">
            <p>2023©DALE ARTS</p>
            <p>Developed by Aditya dev</p>
          </div>
        </div>
        <div className="second-column">
          <div className="main-search">
            <img src={searchIcon} alt="search_icon" />
            <input type="text" placeholder="Search here..."></input>
            <img src={filterIcon} alt="search_icon" />
            <p>Filter</p>
          </div>
          <div className="main-feed">
            {postFile.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
            <div className="art-shop-carousel">
              {shopwall.map((art, index) => {
                return (
                  <div key={index}>
                    <div
                      style={{
                        backgroundImage: `url(${art.link})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="background-art"
                    ></div>
                    <p>Modern Wall Decor Framed Painting</p>
                    <div className="second-row">
                      <p>$199.9</p>

                      <div className="star">
                        <img src={starIcon} alt="star" />
                        <img src={starIcon} alt="star" />
                        <img src={starIcon} alt="star" />
                        <img src={starIcon} alt="star" />
                        <img src={starIcon} alt="star" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="third-column">
          <div className="become-seller">
            <h4>Become a Seller</h4>
          </div>
          <div className="artist-catalogue">
            <div className="category-selector">
              <a className="first-link" href="/#">
                Artists
              </a>
              <a className="second-link" href="/#">
                Photographers
              </a>
            </div>
            <div className="artists">
              {artistFile.map((artist, index) => {
                return <Artists artist={artist} key={index} />;
              })}
            </div>
            <div className="site-info">
              <a href="/#">Privacy</a>
              <a href="/#">Terms and Service</a>
              <a href="/#">Cookie Notice</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

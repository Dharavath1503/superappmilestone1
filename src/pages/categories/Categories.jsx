import React, { useState } from "react";
import { IoWarning } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

import "./style.scss";
import actionImg from "../../assets/images/action.png";
import dramaImg from "../../assets/images/drama.png";
import romanceImg from "../../assets/images/romance.png";
import thrillerImg from "../../assets/images/thriller.png";
import westernImg from "../../assets/images/western.png";
import horrorImg from "../../assets/images/horror.png";
import fantasyImg from "../../assets/images/fantasy.png";
import musicImg from "../../assets/images/music.png";
import fictionImg from "../../assets/images/fiction.png";

const categoryBoxArr = [
  {
    name: "Action",
    avatar: actionImg,
    color: "#FF5209",
    id: 1,
  },
  {
    name: "Drama",
    avatar: dramaImg,
    color: "#D7A4FF",
    id: 2,
  },
  {
    name: "Romance",
    avatar: romanceImg,
    color: "#148A08",
    id: 3,
  },
  {
    name: "Thriller",
    avatar: thrillerImg,
    color: "#84C2FF",
    id: 4,
  },
  {
    name: "Western",
    avatar: westernImg,
    color: "#902500",
    id: 5,
  },
  {
    name: "Horror",
    avatar: horrorImg,
    color: "#7358FF",
    id: 6,
  },
  {
    name: "Fantasy",
    avatar: fantasyImg,
    color: "#FF5209",
    id: 7,
  },
  {
    name: "Music",
    avatar: musicImg,
    color: "#FF4ADE",
    id: 8,
  },
  {
    name: "Fiction",
    avatar: fictionImg,
    color: "#6CD061",
    id: 9,
  },
];

const Categories = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const navigate = useNavigate();

  const handleGenreClick = (genreName) => {
    // console.log("🚀 ~ file: Categories.jsx:77 ~ handleGenreClick ~ genreName:", genreName)
    if (!selectedGenres.includes(genreName)) {
      setSelectedGenres([...selectedGenres, genreName]);
    } else {
      console.log("genre already included");
    }
  };

  const handleXClick = (genre) => {
    // console.log("🚀 ~ file: Categories.jsx:84 ~ handleXClick ~ genre:", genre)
    const newGenreArr = selectedGenres.filter((item) => {
      return item != genre;
    });
    setSelectedGenres(newGenreArr);
  };

  const handleNextPageClick = () => {
    // Serializing the object using JSON.stringify()
    const selectedGenresStr = JSON.stringify(selectedGenres)
    localStorage.setItem("selectedGenres", selectedGenresStr);

    navigate('/homepage');
  }

  return (
    <div className="categories-page-container flex">
      <div className="leftside">
        <h1 className="super-app-logo ff-single-day">Super app</h1>
        <h2 className="title">Choose your entertainment category</h2>

        <div className="selected-categories-container flex">
          {selectedGenres.map((genre, index) => {
            return (
              <button className="selected-categories flex" key={index}>
                <span className="text">{genre}</span>
                <span className="close-btn" onClick={() => handleXClick(genre)}>
                  X
                </span>
              </button>
            );
          })}
        </div>

        {selectedGenres.length < 3 ? (
          <div className="categories-error flex">
            <IoWarning />
            <p>Minimum 3 categories required</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="rightside ff-dm-sans">
        <div className="category-boxes-container flex">
          {categoryBoxArr.map((category) => {
            return (
              <div
                className="box flex"
                key={category.id}
                style={{
                  backgroundColor: category.color,
                  outline: selectedGenres.includes(category.name)
                    ? "5px solid #11B800"
                    : "",
                  boxShadow: selectedGenres.includes(category.name)
                    ? "0px 0px 15px white"
                    : "",
                }}
                onClick={() => handleGenreClick(category.name)}
              >
                <h4 className="box-title">{category.name}</h4>
                <img src={category.avatar} alt="" />
              </div>
            );
          })}
        </div>

        <a className="next-page-link" onClick={handleNextPageClick}>Next Page</a>
      </div>
    </div>
  );
};

export default Categories;

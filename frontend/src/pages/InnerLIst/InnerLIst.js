import React from "react";
import classes from "./InnerLIst.module.css";


const InnerLIst = (props) => {
  const dummyLists = [
    {
      name: "SUV",
      des: "MG HS",
      creator: "2021",
      tracks: ["MG HS", "Year: 2021", "Color: Red"],
      img: "https://ymimg1.b8cdn.com/resized/car_model/8314/pictures/9005683/mobile_listing_main_MG_HS_China_2.jpg",
    },
    {
      name: "Sedan",
      des: "Opel Corsa",
      creator: "2020",
      tracks: ["Opel Corsa", "Year: 2020", "Color: Red"],
      img: "https://media.hatla2eestatic.com/uploads/ncarteraz/31734/big-up_13dd872807f9229fad52ba66604f15ac.png",
    },
    {
      name: "Sedan",
      des: "",
      creator: "",
      tracks: ["Toyota Corolla", "Year: 2020", "Color: Silver"],
      img: "https://media.hatla2eestatic.com/uploads/ncarmodel/10221/big-up_91cf91edc6f51658b072818041f3320a.png",
    },
    {
      name: "Sedan",
      des: "",
      creator: "",
      tracks: ["Mitsubishi Lancer", "Year: 2017", "Color: Silver"],
      img: "https://ymimg1.b8cdn.com/resized/car_model/9791/logo/mobile_listing_main_11650_st1280_046.jpg",
    },
    {
      name: "SUV",
      des: "",
      creator: "",
      tracks: ["Hyundai Tucson", "Year: 2022", "Color: Black"],
      img: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <div className={classes.innerList}>
      <ul>
        {dummyLists.map((data) => {
          return (
            <li>
              <div className={classes.poster}>
                <img src={data.img} alt="test" />
              </div>

              <div className={classes.info}>
                {data.tracks.map((name) => (
                  <h2>{name}</h2>
                ))}
                <h4>{`Car Type: ${data.name}`}</h4>
              </div>

              <div className={classes.options}>
                <button>Details</button>
                <button>Rent</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InnerLIst;

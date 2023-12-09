import React from "react";
import classes from "./Home.module.css"


const Home = (props) => {
 const dummyLists = [
   {
     name: "test",
     des: "This Playlist Description",
     creator: "C-1",
     tracks: { one: "Lovely", two: "Song One", three: "song Three" },
     //img: poster,
   },
   {
     name: "test",
     des: "This Playlist Description",
     creator: "C-2",
     tracks: { one: "S-2", two: "Song Two", three: "song Three" },
     //img: poster,
   },
   {
     name: "test",
     des: "This Playlist Description",
     creator: "C-3",
     tracks: { one: "S-3", two: "Song Three", three: "song Three" },
     //img: poster,
   },
   {
     name: "test",
     des: "This Playlist Description",
     creator: "C-4",
     tracks: { one: "S-4", two: "Song Four", three: "song Three" },
     //img: poster,
   },
   {
     name: "test",
     des: "This Playlist Description",
     creator: "C-4",
     tracks: { one: "S-4", two: "Song Four", three: "song Three" },
     //img: poster,
   },
   {
     name: "test",
     des: "This Playlist Description",
     creator: "C-4",
     tracks: { one: "S-4", two: "Song Four", three: "song Three" },
     //img: poster,
   },
   {
     name: "test",
     des: "This Playlist Description",
     creator: "C-4",
     tracks: { one: "S-4", two: "Song Four", three: "song Three" },
     //img: poster,
   },
 ];
    

  
 
    
    return (
      <div>
        <div className={classes.innerApp}>
          

          <div className={classes.playLists}>
            {dummyLists.map((list) => {
              return (
                <div
                  key={Math.floor(Math.random() * (1000 - 1 + 1)) + 1}
                  className={classes.playList}
                >
                  <div className={classes.content}>
                    <h1>{list.name}</h1>
                    <p>{list.des}</p>
                    <p>{list.creator}</p>
                  </div>

                  <button onClick={props.innerListLefter}>Explore Album</button>

                  {/* <img src={list.img} alt="test" /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Home
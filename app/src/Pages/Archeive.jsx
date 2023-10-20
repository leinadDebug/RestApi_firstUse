import axios from "axios";
import React, { useEffect, useState } from "react";
import { CapitalizeFirstLetter, CreateDate, baseUrl } from "../constants/const";
import {PuffLoader} from "react-spinners"
// import Svg from "../assets";

function Archeive() {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios.get(`${baseUrl}posts/`).then((res) => {
      console.log("first");
      console.log(res.data);
      setPosts(res.data);
      setIsloading(false);
    });
  });

  return (
    <div className="pt-10">
      <h1 className="text-3xl font-serif text-amber-600 font-display">
        Archieve
      </h1>

      {isloading ? (
        <PuffLoader color="#ffb801" />
      ) : (
        <div className="flex flex-col gap-3 mt-4">
          {posts.map((item) => {
            return (
              <div
                key={item._id}
                className="p-5 border border-amber-600 rounded-lg ">
                <div className="text-2xl font-semibold text-amber-600">
                  {item.title}
                </div>
                <p>
                  by {CapitalizeFirstLetter(item.author)} on{" "}
                  {CreateDate(item.date)}{" "}
                </p>
                <p className="mt-2 flex gap-2">
                  {item.tags.map((res, index) => (
                    <span
                      className="bg-yellow-950 text-white p-1 text-sm"
                      key={index}>
                      {res}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Archeive;

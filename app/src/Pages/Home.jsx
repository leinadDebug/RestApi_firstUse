import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, CapitalizeFirstLetter, CreateDate } from "../constants/const";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}posts/latest`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data); // Set the data from the response to the post state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col pt-10">
      <h1 className="text-4xl text-amber-600 font-bold justify-content-start  font-display">
        Latest Articles
      </h1>
      <div className="flex flex-col gap-10 mt-2 p-10">
        {post?.map((item) => {
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
    </div>
  );
};

export default Home;

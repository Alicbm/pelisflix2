import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { reviews as setReviews } from "../features/mainSlices";
import { Review } from "../types";
import user from '../images/user.png'
import "./Reviews.css";

export const Reviews = () => {
  const { movieSelected, reviews } = useAppSelector(
    (state) => state.mainReducer
  );
  const dispatch = useAppDispatch();
  const url_img = process.env.REACT_APP_URL_IMAGE;

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-Us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handle = (data: string) => {
    const info = data?.slice(0, 6)
    
    let resFinal;

    if(info === '/https'){
      const res = data.slice(1, data.length)
      resFinal =  res 
    }else if(data == null){
      resFinal =  user
    }else{
      resFinal =  url_img + data
    }

    return resFinal;    
  }

  React.useEffect(() => {
    const getPosts = async () => {
      const mainUrl = process.env.REACT_APP_MAIN_URL;
      const key = process.env.REACT_APP_KEY;

      try {
        const res = await fetch(
          `${mainUrl}/movie/${movieSelected.id}/reviews?api_key=${key}`
        );
        const data = await res.json();          

        dispatch(setReviews(data.results));
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [movieSelected]);

  return (
    <div className="Reviews">
      {reviews.map((review: Review) => (
        <div className="Reviews-container" key={review.id}>
          <div className="Reviews-container__user">
            <div className="Reviews-container__user-image">
              {
                <img
                  src={handle(review.author_details.avatar_path)}
                  alt={review.author_details.username}
                />
              }
            </div>
            <div className="Reviews-container__user-user">
              <h2>
                A review by{" "}
                {review.author_details.username.length > 15
                  ? review.author_details.name
                  : review.author_details.username}
              </h2>
              <p>
                Created by <strong>{review.author_details.username}</strong>, on{" "}
                {formatDate(review.created_at)}
              </p>
            </div>
          </div>
          <div className="Reviews-container__comment">
            <p>
              {review.content.split(" ").splice(0, 40).join(" ")}{" "}
              <a href={review.url} target="_blank" rel="noopener noreferrer">
                ...read the rest.
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

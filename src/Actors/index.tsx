import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actors as setActors } from "../features/mainSlices";
import { TypeActors } from "../types";
import unknown from '../images/unknown.jpg'
import "./Actors.css";

export const Actors = () => {
  const { actors, movieSelected } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()


  React.useEffect(() => {
    const getPosts = async () => { 
      const mainUrl = process.env.REACT_APP_MAIN_URL  
      const key = process.env.REACT_APP_KEY  
      
      try {
        const actorsFetch = await fetch(`${mainUrl}/movie/${movieSelected.id}/credits?api_key=${key}`);
        const dataActors = await actorsFetch.json();
        const dataCurt = dataActors.cast.splice(0, 20)

        dispatch(setActors(dataCurt));        

      } catch (error) {
        console.log(error);
      }
    }
    getPosts()
  }, [movieSelected])

  return (
    <div className="Actors">
      <h2>Top Billed Cast</h2>
      <div className="Actors-container">
        {actors.map((actor: TypeActors) => (
          <div className="Actors-container__items" key={actor.id}>
            <img 
              src={
                actor.profile_path ?
                `${process.env.REACT_APP_URL_IMAGE}/${actor.profile_path}`
                : unknown
              } 
              alt={actor.name} 
            />
            <h3>{actor.name.split(" ").splice(0, 2).join(" ")}</h3>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

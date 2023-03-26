import React from 'react'
import { useAppSelector } from '../store/hooks';
import './Video.css'

export const Video = () => {
  const { video, movieSelected } = useAppSelector(state => state.mainReducer)
 
  return (
    <div className="Video">
      <div className="Video-title">
        <h2>{movieSelected.title}</h2>
        <p>Trailer</p>
      </div>
      <div className="Video-movie">
        <iframe
          src={`https://www.youtube.com/embed/${video?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

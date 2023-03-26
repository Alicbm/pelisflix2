import React from 'react'
import logo from '../images/pelisflix_logo.png'
import { section as setSection, nameSection as setNameSection } from '../features/mainSlices'
import { TfiMenu } from 'react-icons/tfi'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useNavigate } from 'react-router-dom'
import { Trending } from '../types'
import './Header.css'

export const Header = () => {
  const [modal, setModal] = React.useState<boolean>(false)
  const { nameSection } = useAppSelector(state => state.mainReducer)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getPosts = async (option: string, name: string) => {
    const mainUrl = process.env.REACT_APP_MAIN_URL;
    const key = process.env.REACT_APP_KEY;
    const allMovies: Trending[] = [];

    try {
      for (let i = 1; i <= 2; i++) {
        const res = await fetch(
          `${mainUrl}/movie/${option}?api_key=${key}&page=${i}`
        );
        const data = await res.json();

        allMovies.push(...data.results);
      }

      dispatch(setSection(allMovies));
      dispatch(setNameSection(name));
      navigate("/sections");
      setModal(false);

      console.log(nameSection);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='Header'>
      <div 
        onClick={() => navigate('/')}
        className='Header-logo'
      >
        <img src={logo} alt="Pelisflix logo" />
      </div>
      <ul className={modal ? 'Header-categories --modal-active' : 'Header-categories'}>
        <li
          onClick={() => getPosts('popular', 'Popular')}
        >Popular</li>
        <li
          onClick={() => getPosts('upcoming', 'Upcoming')}
        >Upcoming</li>
        <li
          onClick={() => getPosts('top_rated', 'Top Rated')}
        >Top Rated</li>
      </ul>
      <div 
        onClick={() => setModal(!modal)}
        className='Header-menu'>
        <TfiMenu />
      </div>
    </div>
  )
}

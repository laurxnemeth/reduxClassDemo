import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAnime, fetchAnimeAsync } from "../redux/animeSlice";

//eventually, component will map through results from that
// fetchAnimeAsync
const TopAnimeList = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(getAnime);
  // accessing data is API dependent
  // in this case, they have an object with the data inside of a 
  // data 
  // const anime = useSelector((state) => state.anime.data.data)
  console.log(data);

  useEffect(() => {
    dispatch(fetchAnimeAsync());
  }, [dispatch])

  return (
    <div id="anime-list">
      <h1>Top 20 Anime</h1>
      {
        data && data.length ? data.map((anime) => {
          return <span key={anime.mal_id}>{anime.title}</span>
        }) : <h3>Oh no! No data</h3>
      }
    </div>
  )
  
}

export default TopAnimeList;
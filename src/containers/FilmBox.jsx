import React, {useState} from 'react'
import FilmList from '../components/FilmList'
import Film from '../components/Film'
import '../containers/FilmBox.css'



const FilmBox = () => {

    const [films, setFilms] = useState([
        {
            id: 1,
            film: "10 Things I Hate About You",
            url: "https://www.imdb.com/title/tt0147800/"
        },
        {
            id: 2, 
            film: "Barbie",
            url: "https://www.imdb.com/title/tt1517268/?ref_=fn_al_tt_1"
        },
        {
            id: 3,
            film: "The Lego Movie",
            url: "https://www.imdb.com/title/tt1490017/"
        },
        {
            id: 4,
            film: "Love Actually",
            url: "https://www.imdb.com/title/tt0314331/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_love%2520actua"
        }
    ])

    // const showFilm = (){

    // }

    return (
        <>
            <h2 className="film-box">Some upcoming releases include...</h2>
            <FilmList films={films}/>
        
            <p>woohooo this works! (in the film box (outer))</p>
            <hr></hr>
            <div className='upcoming-btn'>
                <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a>
            </div>
        </>
    )
}

export default FilmBox
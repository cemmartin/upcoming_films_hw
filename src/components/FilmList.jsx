import Film from "./Film"

const FilmList = ({films}) => {

    const filmReactComponents = films.map((filmInfo) => {
        return <Film key={filmInfo.id} film={filmInfo.film}/>
    })

   return (
    <>
        <p>I'm a film list!!!!</p>
        {filmReactComponents}
    </>
   )
}

export default FilmList

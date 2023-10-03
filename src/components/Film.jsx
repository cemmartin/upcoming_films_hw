const Film = ({film, /*children*/}) => {

    return (
        <>
            <ul>
                <li><a href={"film"}>{film}</a></li>
                {/* <p>{children}</p> */}
                    {/* these links do not work!! how do I get them sorted */}
                    {/* I feel like i need an on click somewhere */}
            </ul>
        </>
    )
}

export default Film
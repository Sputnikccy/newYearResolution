function Book(props){
    console.log(props)
    
    return(
        <p>{props[0].name.book}</p>
    )
}
export default Book
function Card(props) {
    const {image, name, status} = props
    return (
        
        <div className="Container">
        <div className="Card">
            <img src={image} alt="" />
            <h2 className="Tittle">{name}</h2>
            <h2 className="Tittle">{status}</h2>
         </div> 
         </div>  
    );
}

export { Card }
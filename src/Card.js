import React from 'react';

const Card = ({title, data, id}) => {
    return (
        <div>
            {data[id].map(item =>(
                <div className="Card">
                <h1 > {title} </h1>
                <h2> {item.intro} </h2>
                <p> {item.Comment} </p>

            </div>
            ))}
        </div>
        
        
        
    )
}

export default Card;

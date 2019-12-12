import React from "react";
import {Link} from 'react-router-dom';

function ProjectCard(props){
    return(
        <div> 
        <h1 key={item.ein}>
            <Link to={`/projects/${item.ein}`}> {item.charityName} </Link>  
        </h1>
        <img src="https://picsum.photos/200/300?random={item.ein}"></img>       
    </div>
    );
}

export default ProjectCard;
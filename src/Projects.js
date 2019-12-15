import React, {useState, useEffect} from 'react'; 
import './App.css'; 
// import { Link } from "react-router-dom"; 
// import ProjectDetail from './ProjectDetail';
import ProjectCard from './Components/ProjectCard'; 


const Projects = () => {
    useEffect(() => {
       fetchItems();  
    }, []);

    const [items, setItems] = useState([]);
    
    const fetchItems = async () => { 
        const data = await fetch('http://data.orghunter.com/v1/charitysearch?user_key=8c3b0d8c7913b089bcb7c90514badd1a&state=CA',
        );
        const response = await data.json();  
        console.log(response.data); 
        setItems(response.data);
    }


    return(
        <>
        <h1>Projects Page</h1>
        <div> 
            {items.map((project) =>
            <ProjectCard 
                ein={project.ein}
                charity={project.charityName}
            />
        )} 
        </div>     
        </>
    ); 

}

export default Projects; 
        
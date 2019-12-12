import React, {useState, useEffect} from 'react'; 
import './App.css'; 
import { Link } from "react-router-dom"; 
// import ProjectDetail from './ProjectDetail';



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
        <div> 
            <h1>This is the Projects Page</h1> 
            <div> 
                {items.map(item => ( 
                    <div>
                        <h2 key={item.ein}>
                            <Link to={`/projects/${item.ein}`}> {item.charityName} </Link>  
                        </h2>
                        <img alt="Organization Logo" src="https://picsum.photos/200/300?random={item.ein}"></img>  
                     </div>  
                //   <ProjectDetail />
                ))}
            </div>
            <button>Learn More</button>
        </div> 
    );
}

export default Projects; 
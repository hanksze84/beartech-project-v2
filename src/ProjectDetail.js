import React, {useState, useEffect} from 'react'; 
import './App.css'; 



const ProjectDetail = (props) => {
    
    const [item, setItem] = useState([]);
    const fetchItem = async () => { 
        const data = await fetch(`http://data.orghunter.com/v1/charitysearch?user_key=8c3b0d8c7913b089bcb7c90514badd1a&state=CA&ein=${props.match.params.id}`);
        const response = await data.json();  
        console.log(response); 
        setItem(response.data);
    }

    useEffect(() => {
        console.log("props", props.match.params.id);
        fetchItem(); 
    }, [props.match.params.id]);
    
         return(
            <div>
                <h1>Organization Name</h1> 
                <h2>{item.charityName}</h2> 
                <img alt="Organization Logo" src="https://picsum.photos/200/300?random={item.ein}"></img>  
            </div>
    );
}
    export default ProjectDetail; 



// const ProjectDetail = () => { 
//     useEffect (() => {}, []);

//     const [item, setItem] = useState({}); 




//     return (
//         <div> 
//             <h1>Item</h1>
//         </div>
//     );
// }




// const ProjectDetail = (props) => {
//     return(
//         <div>
//             <h1>Project</h1> 
//             <h2 key={props.ein}>
//                 <Link to={`/projects/${props.ein}`}> {props.charityName} </Link>  
//             </h2>
//             <img src="https://picsum.photos/200/300?random={item.ein}"></img>  
//         </div>
//     );
// }


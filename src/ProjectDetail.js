import React, {useState, useEffect} from 'react'; 
import './App.css'; 

// Steps
// as we click into each specific page, how does the projectdetail page know what to show? 
// to show the projectcard specific info, this page needs to know use the ID from the URL to access the specific API endpoint



const ProjectDetail = (props) => {
    
    const [item, setItem] = useState([]);
    const fetchItem = async () => { 
        console.log("alert");
        console.log(props.match.params);
        const data = await fetch(`https://api.airtable.com/v0/appxuEnMon9Mg0aU2/Project%20Database/${props.match.params.id}/?api_key=key5yXNWuQ6WSlZca`);
        const response = await data.json();  
        console.log(response); 
        setItem(response.fields);
    }

    useEffect(() => {
        console.log(alert);
        console.log("props", props.match.params.id);
        fetchItem(); 
    }, [props.match.params.id]);
         return(
            <div>
                <h1>{item.ContactName}</h1> 
                <h2>{item.CompanyName}</h2> 
            </div>
    );
}

// const ProjectDetail = (props) => {
//     return(
//         <div>
//             <h1>Organization Name</h1> 
//         </div>
// );
// }

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


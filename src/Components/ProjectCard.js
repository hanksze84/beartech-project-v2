import React from "react";
import {Link} from 'react-router-dom';

const ProjectCard = (props) => { 
    return(
        <div> 
        <h1 key={props.ein}>
            <Link to={`/projects/${props.ein}`}> {props.charity} </Link>  
        </h1>
        <h2>{props.ein}</h2>
        {/* The following code has issue,, the injection is not working, the picture is not dynamically changin */}
        <img src={`https://picsum.photos/200/300?random=${props.ein}`}></img>       
    </div>
    );
}

export default ProjectCard; 




// import React from "react";
// import {Link} from 'react-router-dom';

// function ProductCard(props){
//     return(
//         <div>
//             <img className="productImg" src={props.image} alt="product image"></img>
//             <h3 key={props.sku}>
//             <Link to={`/shop/${props.sku}`}>{props.name}</Link>
//             </h3>
//             <h6>{props.salePrice}</h6>
//         </div>
//     );
// }

// export default ProductCard;
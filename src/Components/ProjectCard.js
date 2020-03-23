import React from "react";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';

const ProjectCard = (props) => { 
    return(
        <Card>
          <a href={ 'projects/' + props.id }>
            <Image src={props.Attachments} rounded fluid/>
            {/* <Card.Img variant="top" src={props.Attachments} /> */}
          </a>
          <Card.Body>
            <Card.Title>{props.CompanyName}</Card.Title>
            <Card.Text>
            {props.ProjectDescription}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>    
                <Badge variant="warning">{props.ProjectSubcategory}</Badge>
            </div>
          </Card.Footer>
        </Card>
    
        //     <div> 
    //     <h1>
    //         <Link to={`/projects/${props.ein}`}> {props.charity} </Link>  
    //     </h1>
    //     <h2>{props.ein}</h2>
    //     {/* The following code has issue,, the injection is not working, the picture is not dynamically changin */}
    //     <img src={`https://picsum.photos/200/300?random=${props.ein}`}></img>       
    // </div>
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
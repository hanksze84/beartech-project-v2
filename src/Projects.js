import React, {useState, useEffect} from 'react'; 
import './App.css'; 
// import { Link } from "react-router-dom"; 
// import ProjectDetail from './ProjectDetail';
import ProjectCard from './Components/ProjectCard'; 
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Projects = () => {
    useEffect(() => {
       fetchItems();  
    }, []);

    const [items, setItems] = useState([]);
    const API_Key = 'key5yXNWuQ6WSlZca'; 

    const fetchItems = async () => { 
        const data = await fetch('https://api.airtable.com/v0/appxuEnMon9Mg0aU2/Project%20Database?api_key=key5yXNWuQ6WSlZca',
        );
        const response = await data.json();  
        console.log(response.records[1].fields.CompanyName);
        console.log(response.records[2].fields.ProjectSubcategory[0]); 
        console.log(response.records[2].fields.Attachments[0].url);
        console.log(response.records);
        // console.log(response.records.slice(1).slice(0,-1));
        // setItems(response.records.slice(1).slice(0,-1));
        setItems(response.records);
    }


    return(
        <>
        <h1>Projects Page</h1>
            <Container> 
                <Row>
                    {items.map((project) =>
                    <Col sm={4}>
                        <ProjectCard 
                            CompanyName={project.fields.CompanyName}
                            ProjectDescription={project.fields.ProjectDescription}
                            ProjectSubcategory={project.fields.ProjectSubcategory[0]}
                            Attachments={project.fields.Attachments[0].url}
                            ProjectSubcategory = {project.fields.ProjectSubcategory[0]}
                            OrganizationURL = {project.fields.OrganizationURL}
                            id = {project.id}
                        />
                    </Col>
                    )} 
                </Row> 
            </Container>
        </>
    ); 

}

export default Projects; 
        
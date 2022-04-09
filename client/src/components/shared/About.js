import Card from "../Card"
import Badge from "react-bootstrap/esm/Badge";

const About = ()=>{

    return (
        <Card>
        <div>
            <h1>About page</h1>
            <h2>Have you been searching for the perfect pet? </h2>
            <h3>We have unlimited ROBOT PETS!!!!</h3>
            <h3>Dogs, Cats, Birds, Pigs, Porcupines, Porpoise, Horses, Clams, Octopus and Dinosaurs and many more.</h3>
            <h3>Our team members are here to help you get any kind of pet you desire.</h3>
            <h3>Team Members</h3>
            <div>
                
            <li><Badge bg="primary">Brenda</Badge></li>
            <li><Badge bg="primary">Joe</Badge></li>
            <li><Badge bg="primary">Katherine</Badge></li>
            </div>
            <h2>Check out our like pets or all our pets pages to get ideas of what kind of pets you can get.</h2>
        </div>
        </Card>
    )
} 
export default About
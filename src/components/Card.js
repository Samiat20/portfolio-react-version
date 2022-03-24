import Thegang from "../img/projects/shapes.png"
function Card(props){
    return(
        <div className="project">
        <a href={props.details.link} target="_blank"> <img src={Thegang} alt="The Gang" /></a>
        <h2> {props.details.name} </h2>
        <p> Description: {props.details.description} </p>
      </div>

    )
}export default Card
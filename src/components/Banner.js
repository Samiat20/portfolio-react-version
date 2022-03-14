import profilepicture from '../img/Samiat.jpg'

function Banner (){
    return(
        <div className="wrapper">
        <div className="header">
          <img src={profilepicture} />
          <div className="intro">
            <h1 className="first"> Hi, I am</h1> 
            <h1 className="name"> Samiat</h1>
            <p> I am a frontend Engineer </p>
            <p> HTML, Css, Javascript, React </p>
          </div>
        </div>
      </div>

    )
}
export default Banner
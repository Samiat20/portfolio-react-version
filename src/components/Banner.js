import profilepicture from '../img/Samiat.jpg'

function Banner (){
    return(
        <div className="wrapper">
        <div className="header">
          <img src={profilepicture} />
          <div className="intro">
            <h1 className="first"> Hello, I am</h1> 
            <h1 className="name"> Samiat</h1>
            <p> I am a frontend Engineer </p>
            <p> HTML, CSS, Javascript, React etc. </p>
          </div>
        </div>
      </div>

    )
}
export default Banner
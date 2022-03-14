import Banner from './components/Banner';
import Title from './components/Title';
import Card from './components/Card';
import './App.css';
const projects= [
  {
  name: "Todo",
  description:"This is a todo app where you can register your daily, weekly or general tasks ",
  link:"https://wonderful-goodall-dede27.netlify.app/",
  img:'../img/projects/todo.png'
  },
  {
      name: "The gang",
      description:"This is a fan page for cartoon characters",
      link: "https://condescending-meninsky-b3526e.netlify.app/",
      img:"../img/projects/shapes.png" 
  }
]

function App() {
  return (
    <div className="App">
      <Banner/>
      <Title name='About Me'/>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
         by injected humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
           It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
         The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    </p>
    <Title name= "Projects"/>
      {projects.map ((project)=> <Card details = {project}/>)}
    </div>
  );
}

export default App;

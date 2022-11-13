import tecstore from '../images/tecstore.jpg';
import tecstore2 from '../images/teccc.jpg';

import '../styles/Home.css';
import logoprincipal from "../images/tslogo.png"



function Home(){
    return (
      <div>
        
      
        
        <div id = "p"  >
        
        <img id= "img"  src={tecstore} alt=""></img>
        </div>
      
    
 

     <div  class="title">
      <h1 id = "texto">TecnoStore - Innovation Tech</h1>
      </div>




<div id = "p" className="split-slideshow">
  <div className="slideshow">
    <div className="slider">
      <div className="item">
      </div>
      <div className="item">
        <img id= "img" src={tecstore2} alt="" />
      </div>
    </div>
  </div>
  <div className="slideshow-text">
    
  </div>
</div>

<div id = "p" >

<img src={logoprincipal} alt='logo'  ></img><h3 id = "final"  >  TecnoStore </h3>
</div>

</div>



    );
  };
  export default Home;
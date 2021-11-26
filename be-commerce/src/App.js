import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Componente1 } from './Components/Basico/Componente1';
import NavBar from './Components/NavBarr/NavBar';
import Propiedades from './Components/Basico/Propiedades';
import { Componente2 } from './Components/Basico/Componente2';
import ItemListContainer1 from './Components/ItemListContainer1';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './Components/NavBarr/NavBar1';
import tensiometro from './img/tensiometro.jpg';
import imagenes from './img/imagenes';
import { Form } from 'react-bootstrap';
import Boton from './Components/Basico/Boton';
import Item from './Components/ItemList/Item';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
 


const products = [
  { id: 1, foto:'./img/ter1.jpg'},
  { id: 2, foto:'./img/ter2.jpg'},
  { id: 3, foto:'./img/ter3.jpg'},
]; 




const getFetch = new Promise((aceptado,rachazada)=>{
  setTimeout(() => {
    aceptado(products)
  }, 2000);
})




function App() {

  
  const [count, setCount]= useState(0)

  const handlerOnClick=()=>{
    setCount(count + 1)
    console.log(count)
  }

  
 getFetch 
 .then(data => {
   return data
 })
.then(resp => console.log(resp))
.catch(err => console.log(err))
.finally(()=> console.log('Se ejecuta al finalizar la promesa'))

/*
  console.log(data)) /* método para capturar la respuesta que yo le estoy devolviendo */
/*


 console.log(1)
 console.log(2)
 setTimeout(()=>{
 console.log(3)
 }, 2000) /* evento asíncrónico */
 console.log(4)


 
 console.log('antes del rendering')
  
  
  //Objeto style
      const style = {backgroundColor: '#00aae4',
                      borderColor: 'red'
                      }
  
    /*
      const handlerOnClick = ()=>{
          console.log('saludar')
          console.log('despedir')
                     }
  */
 
  return (
   <>
            <section>
            <NavBar1/>
            </section>
            <hr/>
            <Componente1/>
            <section>
            <Propiedades/>
            </section>
            <hr/>
            <ItemListContainer1
            cadena="Hola, Bienvenido a mi App"
             />
            <NavBar/>
            <hr/>
            
            <hr/>
            <Item/>
            <div>
            <Form boton={Boton}/>
            <center>
            {count}<br/>
            <button onClick={handlerOnClick}>Click aquí </button>
            </center>
            </div><br/>
            
        
            <div class="imagen1">
              <img src={imagenes.img1}>
              </img>
            </div>
           
            
      </>
      
       );

  }

export default App;

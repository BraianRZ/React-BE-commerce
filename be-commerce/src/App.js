import logo from './logo.svg';
import './App.css';
import { Componente1 } from './Components/Basico/Componente1';
import NavBar from './Components/NavBarr/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';



function App() {

  let condition = 'verdadero'
  let resultado = ''
  
  console.log(`El resultado es ${condition==='verdadero' ? 'correcto' : 'incorrecto'}`)
  
  
  //Objeto style
      const style = {backgroundColor: '#00aae4',
                      borderColor: 'red'
                      }
  
  
      const handlerOnClick = ()=>{
          console.log('saludar')
          console.log('despedir')
                     }
  
  return (
   <>
            <Componente1/>
            <NavBar/>
            <ItemListContainer/>
           

      <div className="App" style={ style } onClick={handlerOnClick}> 
          Este es un componente App
          <img alt=''></img>
          <img alt='' />
          <input /> 
      </div>
      </>
      
       );

  }

export default App;

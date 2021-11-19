import logo from './logo.svg';
import './App.css';
import { Componente1 } from './Components/Basico/Componente1';
import NavBar from './Components/NavBarr/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import Propiedades from './Components/Basico/Propiedades';
import { Componente2 } from './Components/Basico/Componente2';
import ItemListContainer1 from './Components/ItemListContainer1';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './Components/NavBarr/NavBar1';



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
            <ItemListContainer/>
            <hr/>
           
            
      </>
      
       );

  }

export default App;

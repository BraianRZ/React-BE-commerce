import Boton from './Boton';
import Button from './Boton'

function Form ({ title, children, boton}){
    console.log(boton);
    console.log('Form');
    return (
        <>
            <h2> {title} </h2>
            {children}
            <imput type="text" placeholder="soy imput"/><br/>

            { boton ( { buttonText: 'boton', nombre: 'Braian'})}

        </>
    )
}
export default Form
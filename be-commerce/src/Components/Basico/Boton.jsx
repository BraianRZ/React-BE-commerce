import Button from "@restart/ui/esm/Button";

const Boton =({buttonText='Soy Boton', nombre}) =>{
     
    console.log('Boton');
    return (
        <>
            {nombre}
            <Button>{buttonText}</Button>
        </>
    )
}
export default Boton

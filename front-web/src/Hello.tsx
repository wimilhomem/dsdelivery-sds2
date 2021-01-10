import { useEffect } from "react";

type Props = {
  message: string;
}

function Hello( {message}:Props){

  useEffect(()=>{
    //chamada para API para busca
    console.log('Componente iniciou')
  },[]
    
  );
  return (
    <h1>Hello {message} !</h1>
    )
    
  
}
export default Hello;
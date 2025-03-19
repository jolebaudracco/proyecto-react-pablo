import Botoncito from "./Botoncito";


function Sign() {
    const listado = ['SALAME', 'PAPA', 'HUEVO', 'tomate']
  return (

      <>
      {/* <Button variant="contained">Pablo</Button>
      <Button variant="contained">Jole</Button>
      <Button variant="contained">Jole</Button>
      <Button variant="contained">Jole</Button>
      <Button variant="contained">Jole</Button>
      <Button variant="contained">Jole</Button> */}
      <Botoncito text={'Hola Pablo'}/>
      {
        listado.map((palabra) => {
            return <Botoncito text={palabra}/>
        })

      }
      
      </>
  );
}

export default Sign;
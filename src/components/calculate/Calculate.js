import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function Calculate() {
    const [valor, setValor] = useState(5)




    return (
        <>
        <Box sx={{backgroundColor: 'red', display: 'flex', flexDirection: 'row', justifyContent: 'center', p: 3}}>

            <Button onClick={()=>setValor(valor + 1)} sx={{mr: 2}} variant="contained">+1</Button>
            <Box sx={{flexDirection: 'column'}}>
                <Typography sx={{color: 'black', fontSize: '20px', fontWeight: 'bold'}}>resultado: </Typography>
                <Typography sx={{color: 'black', fontSize: '20px', fontWeight: 'bold'}}>{valor}</Typography>
            </Box>
            <Button onClick={()=>setValor(valor - 1)} sx={{ml: 2}} variant="contained">-1</Button>
        
        </Box>
        </>
    );
  } 

  export default Calculate;
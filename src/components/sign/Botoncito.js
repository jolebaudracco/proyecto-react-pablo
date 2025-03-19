import { Button } from "@mui/material";

function Botoncito({text}) {
  return (

      <Button sx={{m: 1}} variant="contained">{text}</Button>
       
  );
}

export default Botoncito;
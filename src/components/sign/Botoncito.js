import { Button } from "@mui/material";

function Botoncito({ text }) {
  return (
    <Button
      sx={{
        m: 1,
        px: 3,
        py: 1.5,
        fontWeight: 'bold',
        color: 'white',
        background: 'linear-gradient(45deg, #ff6ec4, #7873f5, #4ADEDE, #4AEF8D)',
        backgroundSize: '300% 300%',
        animation: 'gradientMove 6s ease infinite',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1) rotate(-1deg)',
          boxShadow: '0 0 25px rgba(255, 255, 255, 0.6)',
        },
        '@keyframes gradientMove': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default Botoncito;


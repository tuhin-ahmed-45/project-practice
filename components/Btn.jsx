import { Button } from "@mui/material";

function Btn({props, backgroundImage}) {
  return (
    <Button sx={{
      backgroundImage: "${backgroundImage}",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0% 0%',
      boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.1)',
      borderRadius: '27px',
      opacity: 1,
      color: "white", fontSize: "12px"
    }}>{props}</Button>
  )
}

export default Btn
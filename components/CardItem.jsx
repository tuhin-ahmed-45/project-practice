import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Btn from "./Btn";

function CardItem(props, backgroundImage) {
  const backgroundImageUrl = 'linear-gradient(90deg, #CE2527 0%, #1A66B0 100%)'
  return (
    <div>
      <Card sx={{ width: '333px', padding: "15px" }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Truck type
            </Typography>
            <Box sx={{ border: '2px solid black', padding: "3px 5px", borderRadius: "4px" }}>D 203927</Box>
          </Box>
          <Typography variant="h5" component="div">
            Captain Name
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Pick up location
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Jeddah
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Pick up location
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Jeddah
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Pick up location
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Jeddah
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Pick up location
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Jeddah
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Pick up location
            </Typography>
            <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
              Jeddah
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
                Pick up location
              </Typography>
              <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
                Jeddah
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
                Pick up location
              </Typography>
              <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
                Jeddah
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
                Pick up location
              </Typography>
              <Typography sx={{ fontSize: "14px", mb: 1 }} color="text.secondary">
                Jeddah
              </Typography>
            </Box>
          </Box>
          <CardActions>
            <Btn props={"Edit"} backgroundImage={backgroundImageUrl} />
          </CardActions>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardItem
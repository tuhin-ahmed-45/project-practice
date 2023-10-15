import { Assignment, AvTimer, Business, Description, PersonOutline, PinDrop, SettingsOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const SideBar = () => {
  return (
    <Box sx={{paddingLeft: "30px"}}>
      <Box sx={{paddingTop: "30px"}}>
        <Typography variant="h6" component="h6">
          Ahmed Al Salem
        </Typography>
        <Typography variant="p" component="p">
          Jeddah, KSA
        </Typography>

        {/* icons */}
        <Box sx={{display: 'flex', flexDirection: "column", paddingTop: "50px"}}>
          <Box sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
            <Box sx={{ paddingRight: "10px" }}><AvTimer /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Dashboard</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
            <Box sx={{ paddingRight: "10px" }}><Assignment /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Reports</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
            <Box sx={{ paddingRight: "10px" }}><PersonOutline /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Captains</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
            <Box sx={{ paddingRight: "10px" }}><Business /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Enterprise Company</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center",paddingTop: "30px" }}>
            <Box sx={{ paddingRight: "10px"}}><Business /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Logistic Company</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center",paddingTop: "30px" }}>
            <Box sx={{ paddingRight: "10px" }}><PinDrop /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Trips</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" , paddingTop: "30px"}}>
            <Box sx={{ paddingRight: "10px" }}><Description /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Billing</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
            <Box sx={{ paddingRight: "10px" }}><SettingsOutlined /></Box>
            <Box sx={{fontSize: "20px", fontFamily:"Poppins"}}>Setting</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SideBar
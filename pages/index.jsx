import MainBar from '@/components/MainBar';
import SideBar from '@/components/SideBar';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
      <Box gridColumn="span 4">
        <SideBar />
      </Box>
      <Box gridColumn="span 8">
        <MainBar />
      </Box>
    </Box>
  );
}

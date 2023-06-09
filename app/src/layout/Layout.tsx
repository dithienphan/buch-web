import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '../componets/Copyright';
import { NavBar } from '../componets/navigation/NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <Container maxWidth="xl">
        <Box sx={{ my: 4, alignItems: 'stretch' }}>
          {children}
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

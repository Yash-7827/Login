import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

const WelcomeLanding = () => {
    return(
        <Box>
      <AppBar position="static" sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', padding: '0vh 2vh 0vh 2vh'}}>
        <Toolbar>
          <Typography variant="h6">
            News
          </Typography>
        </Toolbar>
        <Button color="inherit">Login</Button>
      </AppBar>
    </Box>
    );
}

export default WelcomeLanding;
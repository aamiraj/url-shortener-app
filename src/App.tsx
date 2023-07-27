import { RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";
import router from "./router/router";
import UserProvider from "./contexts/UserProvider";

function App() {
  return (
    <Container maxWidth="xl">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Container>
  );
}

export default App;

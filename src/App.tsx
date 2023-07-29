import { RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";
import router from "./router/router";
import UserProvider from "./contexts/UserProvider";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <Container maxWidth="xl">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ErrorBoundary>
    </Container>
  );
}

export default App;

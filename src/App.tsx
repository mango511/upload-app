import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import DashboardPage from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  );
};

export default App;

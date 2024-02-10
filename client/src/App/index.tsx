import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { store } from "../store";

import { Header } from "./components/Header";

import { Main } from "./pages/Main";
import { Car } from "./pages/Car";

const theme = createTheme();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<Main />} />
              <Route path="/:id" element={<Car />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

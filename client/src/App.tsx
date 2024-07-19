import { BrowserRouter as Routes } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";
function App() {
  return (
    <Routes>
      <CustomRoutes />
    </Routes>
  );
}

export default App;

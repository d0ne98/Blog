import {createRoot} from "react-dom/client"
import App from "./components/App"
import { AuthProvider } from "./AuthContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  );

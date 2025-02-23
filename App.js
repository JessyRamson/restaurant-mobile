import AuthProvider from "./src/context/AuthContext";
import Navigation from "./src/navigation/navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

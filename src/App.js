import Characters from "./components/Characters";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;

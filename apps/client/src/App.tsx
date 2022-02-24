import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { trpc } from "@tcll/react/utils/trpc";

import HomePage from "./pages/home";
import Navbar from "./components/nav";
import Fab from "./components/fab";
import Modal from "./components/modal";

const API_URL = import.meta.env.API_URL || "http://localhost:4000/trpc";

function App() {
  const [modal, setModal] = useState(false);
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: API_URL as string,
    })
  );

  function handleShowNewModal() {
    setModal(!modal);
  }

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Modal onClose={handleShowNewModal} showModal={modal} />
          <Fab onClick={handleShowNewModal} />
          <Navbar />
          <HomePage />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;

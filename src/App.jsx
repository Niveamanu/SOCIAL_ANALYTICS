import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sharedlayout from "./pages/Sharedlayout";
import DynamicForm from "./pages/Form";

import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "./GlobalContext/context";
function App() {
  const { currentItem } = useGlobalContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sharedlayout />}>
            <Route index element={<DynamicForm />} />
            <Route path="/:stream" element={<DynamicForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;

import Modal from 'react-modal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/components/templates/DefaultLayout';
import AddClientPage from '@/pages/AddClientPage/AddClientPage';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/addClient" element={<AddClientPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

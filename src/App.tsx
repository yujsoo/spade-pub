import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/components/templates/DefaultLayout';
import AddClientPage from '@/pages/AddClientPage/AddClientPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<AddClientPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

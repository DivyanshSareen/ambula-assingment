import { Route, Routes } from 'react-router';
import {
  TodoListPage,
  ListingPage,
  CartPage,
} from './pages';
import DenseAppBar from './components/DenseAppBar';

function App() {
  return (
    <div className='App'>
      <DenseAppBar />
      <Routes>
        <Route
          path='todo-list'
          element={<TodoListPage />}
        />

        <Route
          path='listing'
          element={<ListingPage />}
        />
        <Route
          path='cart'
          element={<CartPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

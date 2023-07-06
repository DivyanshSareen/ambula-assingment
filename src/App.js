import { Route, Routes } from 'react-router';
import {
  ShoppingCartPage,
  TodoListPage,
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
          path='shop'
          element={<ShoppingCartPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

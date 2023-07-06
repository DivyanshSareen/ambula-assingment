import { Route, Routes } from 'react-router';
import {
  TodoListPage,
  ListingPage,
  CartPage,
  PokemonPage,
  AboutPage,
  HomePage,
  ContactPage,
} from './pages';
import DenseAppBar from './components/DenseAppBar';

function App() {
  return (
    <div
      className='App'
      style={{ maxWidth: '400px' }}>
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
        <Route
          path='pokemon'
          element={<PokemonPage />}
        />
        <Route path='/' element={<HomePage />} />
        <Route
          path='/about'
          element={<AboutPage />}
        />
        <Route
          path='/contact'
          element={<ContactPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

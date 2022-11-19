import './App.css';
import { Routes, Route } from 'react-router-dom'
import Categories from './component/Categories';
import Home from './pages/Home';
import Find from './pages/Find';

const App =() => {
  return (
    <Routes>
      <Route element={<Categories />}>
        <Route path='/' element={<Home />} />
        <Route path='/find' element={<Find />} />
      </Route>
    </Routes>
  );
}

export default App;

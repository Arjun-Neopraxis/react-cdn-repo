import './App.css';
// import HeaderBanner from './components/header_banner';
import HeaderBanner from './header_banner';
import MyReactComponent from './MyReactComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/headerbanner' element={<HeaderBanner/>}/>
        <Route path='/reactcomponent' element={<MyReactComponent/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

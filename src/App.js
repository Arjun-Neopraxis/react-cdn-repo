import './App.css';
import HeaderBanner from './components/header_banner';
import MyReactComponent from './MyReactComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/headerbanner' element={<HeaderBanner/>}/>
        <Route path='/reactcomponent' element={<MyReactComponent/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

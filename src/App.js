
import './App.css';
import ContactList from './component/ContactList';
import Login from './component/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">    <BrowserRouter>
<Routes>
      <Route exact path='/' element={<Login/>} />
      <Route exact path='/contactList' element={<ContactList/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

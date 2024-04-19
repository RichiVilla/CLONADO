
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import LeftComponent from './components/LeftComponent';
import RightComponentCalendar from './components/RightComponentCalendar';
function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>                
      <LeftComponent/>  
      <RightComponentCalendar />   
    </BrowserRouter>
  </>
)
}

export default App;

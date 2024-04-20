
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import LeftComponent from './components/LeftComponent';
import RightComponentCalendar from './components/RightComponentCalendar';
import RightComponentCommunity from './components/RightComponentCommunity';
function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>                
      <LeftComponent/>        
      <RightComponentCalendar />   
      <RightComponentCommunity /> 
    </BrowserRouter>
  </>
)
}

export default App;

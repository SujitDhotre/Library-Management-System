import { BrowserRouter,Route,Routes } from 'react-router-dom';  
import './App.css';
import Menubar from './Components/Menubar';
import StudentForm from './Components/StudentForm';
import AddBooks from './Components/AddBooks';
import IssuBook from './Components/IssueBook';
import Allbooks from './Components/Reports/Allbooks';
import Dashboard from './Components/Dashboard';
import AllUsers from './Components/Reports/AllUsers'

function App() {
  return (
    <>
    <div className='container-xxl p-2 mx'>
    <Menubar/>
    {/* All routes  */}
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/home" element={<Dashboard/>} />
        <Route path='/student' element={<StudentForm/>}></Route>
        <Route path='/addbook' element={<AddBooks/>}></Route>
        <Route path='/issuebook' element={<IssuBook/>}></Route>
        <Route path='/allbooks' element={<Allbooks/>}></Route>
        <Route path='/AllUsers' element={<AllUsers/>}></Route>
      </Routes>
    </div>
      
    </>
  );
}

export default App;

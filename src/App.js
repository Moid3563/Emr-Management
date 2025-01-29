import './App.css';
import {Button } from '@mui/material';
import ButtonComponent from './ReusableComponent/ButtonComponent';
import SearchBarComponent from './ReusableComponent/SearchBarComponent';
import SideBarComponent from './ReusableComponent/SideBarComponent';
import CardsComponent from './ReusableComponent/CardsComponent';
import TableComponent from './ReusableComponent/TableComponent';
import NotesComponent from './ReusableComponent/NotesComponent';
import NotesEditor from './ReusableComponent/NotesEditor';
import SearchSymptom from './ReusableComponent/SearchSymptom';
import Medication from './ReusableComponent/Medication';
import Vitals from './ReusableComponent/Vitals';
// import SaveIcon from '@mui/icons-material/Save';

// const sampleData = [
//   {
//     name: 'Wade Warren',
//     gender: 'M',
//     age: 30,
//     lastVisit: '10 Dec 2024',
//     patientId: 2116,
//     contact: '+91 9771844566',
//     visitType: 'consultation',
//     slotTime: '05:00 PM',
//     slotDate: '12 Dec 2024',
//     paymentStatus: '---',
//   },
//   {
//     name: 'Wade Warren',
//     gender: 'M',
//     age: 30,
//     lastVisit: '10 Dec 2024',
//     patientId: 2116,
//     contact: '+91 9771844566',
//     visitType: 'consultation',
//     slotTime: '05:00 PM',
//     slotDate: '12 Dec 2024',
//     paymentStatus: '---',
//   },
//   {
//     name: 'Wade Warren',
//     gender: 'M',
//     age: 30,
//     lastVisit: '10 Dec 2024',
//     patientId: 2116,
//     contact: '+91 9771844566',
//     visitType: 'consultation',
//     slotTime: '05:00 PM',
//     slotDate: '12 Dec 2024',
//     paymentStatus: '---',
//   },
// ];



function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  const handleFilterClick = () => {
    console.log('Filter button clicked!');
  };

  const columns = [
    { label: "Name", field: "name", align: "left" },
    { label: "Age", field: "age", align: "center" },
    { label: "Email", field: "email", align: "left" },
    { label: "Contact", field: "contact", align: "left" },
  ];
  
  const rows = [
    { name: "John Doe", age: 30, email: "john.doe@example.com", contact:'9890828105'},
    { name: "Jane Smith", age: 25, email: "jane.smith@example.com", contact:'9254020202' },
    { name: "Sam Wilson", age: 28, email: "sam.wilson@example.com", contact:'8425262728' },
    { name: "Jack Watson", age: 23, email: "jack.watson@example.com", contact:'9028112554' },
  ];
  


  return (
    <div className="App">
     <h1>EMR Management</h1> 
      {/* <ButtonComponent
        label="Add New Patient"
        onClick={handleClick}
      /> */}
      <br/>
      <br/>
      {/* <NotesComponent/> */}
      {/* <NotesEditor/> */}
      {/* <TableComponent  columns={columns} rows={rows}/> */}
      <Vitals/>
      <SearchSymptom/>
      <Medication/>
      <br/>
      <br/>
      {/* <SearchBarComponent
      placeholder="Search for anything here..."
      onSearchClick={handleSearch}
      onFilterClick={handleFilterClick}
      onChange={onchange}
      /> */}
      {/* <SideBarComponent/> */}
      {/* <CardsComponent/> */}
    </div>
  );
}

export default App;

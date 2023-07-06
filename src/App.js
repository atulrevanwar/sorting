import logo from './logo.svg';
import './App.css'
import { data } from './components/data'
import { useEffect, useState } from 'react';

function App() {
  const [wdata,setwdata] = useState([]);
  useEffect(()=>{
    setwdata(data);
  },[]);
  function filterData(){
    let city = document.getElementById('inputCity').value;
    let filteredData;
    if(city === ''){
      filteredData = data;
    }else {
      filteredData = data.filter((item)=>(item.City.toLocaleLowerCase()).includes(city.toLocaleLowerCase()));
    }

    setwdata(filteredData);
    console.log(filteredData);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ alignSelf: 'center' }}>Smart Weather App</h3>
        <input id='inputCity' type="text" onChange={filterData} placeholder="Enter City" className="inputText" />
        {/* <button className="button" onClick={filterData}>Submit</button> */}
      </header>

      <table>
        <tbody>
          <tr>
            <th>Sr</th>
            <th>City</th>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Pincode</th>
            <th>Status</th>
          </tr>
          {wdata.map((item, i) => {
            return <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.City}</td>
              <td>{item.Weather}</td>
              <td>{item.Temperature}</td>
              <td>{item.Pincode}</td>
              <td>{item.Status}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

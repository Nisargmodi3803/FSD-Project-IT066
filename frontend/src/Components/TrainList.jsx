import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import './TrainList.css';

export default function TrainList() {
  return (
    <div className='trainlist'>
      <div className='wrap'>
        <form className='search-form'>
          <h1>TRAIN LIST</h1>
          <br />
          <div className='input-pair'>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input type='text' placeholder='From Location' />
            </div>
            <div className='input-box'>
              <FaLocationDot className='icon' />
              <input type='text' placeholder='To Location' />
            </div>
            <div className='button'>
              <button type='submit'>Search</button>
            </div>
            <div className='button'>
              <button type='submit'>Reset</button>
            </div>
          </div>
        </form>
      </div>

      <div className='table-container'>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Train Number</th>
                <th>From</th>
                <th>To</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Gujarat Queen</td>
                <td>19033</td>
                <td>Valsad</td>
                <td>Ahmedabad</td>
                <td>300</td>
                <td>50</td>
                <td><button>Delete</button></td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for chart.js
import './Home1.module.css'; // Import CSS file

const SalesPrediction = () => {
  const [inputData, setInputData] = useState({
    lastWeekSales: '',
    eventDay: false,
    dayOfWeek: '',
  });
  const [salesData, setSalesData] = useState([]);
  const [predictedSales, setPredictedSales] = useState([]);
  const [predictionDay, setPredictionDay] = useState('');
  const [predictionEventDay, setPredictionEventDay] = useState(false); // New state for event day during prediction

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputData({
      ...inputData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Insert data into the table
  const insertData = () => {
    if (inputData.lastWeekSales && inputData.dayOfWeek) {
      setSalesData([...salesData, inputData]);
      setInputData({ lastWeekSales: '', eventDay: false, dayOfWeek: '' });
    }
  };

  // Predict sales function (with realistic variation and event day consideration)
  const predictSales = () => {
    if (predictionDay) {
      // Find the corresponding data for the selected day
      const salesEntry = salesData.find((data) => data.dayOfWeek === predictionDay);

      if (salesEntry) {
        // Get the past sales value
        const pastSales = parseFloat(salesEntry.lastWeekSales);

        // Logic for predicting sales based on event day
        let prediction;
        if (predictionEventDay) {
          // If it's an event day, increase the sales by 10% to 20%
          const randomFactor = Math.random() * 0.1 + 0.1; // Random variation between +10% and +20%
          prediction = pastSales + pastSales * randomFactor;
        } else {
          // If it's not an event day, decrease the sales by 10% to 20%
          const randomFactor = Math.random() * 0.1 + 0.1; // Random variation between -10% and -20%
          prediction = pastSales - pastSales * randomFactor;
        }

        // Save the predicted sales for the selected day
        setPredictedSales([...predictedSales, { dayOfWeek: predictionDay, value: prediction }]);
      } else {
        alert("No past data available for the selected day.");
      }
    } else {
      alert("Please select a day for prediction.");
    }
  };

  // Graph Data
  const chartData = {
    labels: salesData.map((data) => data.dayOfWeek), // Days of the week as labels
    datasets: [
      {
        label: 'Past Sales',
        data: salesData.map((data) => parseFloat(data.lastWeekSales)),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Predicted Sales',
        data: salesData.map((data) => {
          // Find the predicted sales for this day
          const prediction = predictedSales.find((pred) => pred.dayOfWeek === data.dayOfWeek);
          return prediction ? prediction.value : null;
        }),
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        borderDash: [5, 5], // Dashed line to indicate prediction
      },
    ],
  };

  return (
    <div className="container">
      <h1>Data Analytics</h1>
      
      {/* Input Form */}
      <div className="form">
        <label>
          Last Week Sales:
          <input
            type="number"
            name="lastWeekSales"
            value={inputData.lastWeekSales}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Event Day:
          <input
            type="checkbox"
            name="eventDay"
            checked={inputData.eventDay}
            onChange={handleInputChange}
            
          />
        </label>
        <label>
          Day of the Week:
          <select name="dayOfWeek" value={inputData.dayOfWeek} onChange={handleInputChange}>
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>
        <button onClick={insertData}>Insert</button>
      </div>

      {/* Select Prediction Day */}
      <div className="form">
        <label>
          Select Day for Prediction:
          <select value={predictionDay} onChange={(e) => setPredictionDay(e.target.value)}>
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>
        <label>
          Event Day for Prediction:
          <input
            type="checkbox"
            checked={predictionEventDay}
            onChange={(e) => setPredictionEventDay(e.target.checked)}
          />
        </label>
        <button onClick={predictSales}>Predict Sales</button>
      </div>

      {/* Table */}
      <h2>Inserted Sales Data</h2>
      <table>
        <thead>
          <tr>
            <th>Last Week Sales</th>
            <th>Event Day</th>
            <th>Day of the Week</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((data, index) => (
            <tr key={index}>
              <td>{data.lastWeekSales}</td>
              <td>{data.eventDay ? 'Yes' : 'No'}</td>
              <td>{data.dayOfWeek}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display Predicted Sales */}
      {predictedSales.length > 0 && (
        <h2>
          Predicted Sales for {predictedSales[predictedSales.length - 1].dayOfWeek}: 
          {predictedSales[predictedSales.length - 1].value.toFixed(2)}
        </h2>
      )}

      {/* Graph */}
      <div className="graph-container">
        <h2>Sales Graph</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default SalesPrediction;

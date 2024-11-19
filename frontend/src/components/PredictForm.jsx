// // frontend/src/components/PredictForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const PredictForm = () => {
//     const [formData, setFormData] = useState({
//         day_of_week: '',
//         past_sales: '',
//         current_stock: '',
//         event_day: ''
//     });

//     const [prediction, setPrediction] = useState(null);
//     const [error, setError] = useState(null);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/predict', {
//                 day_of_week: parseInt(formData.day_of_week),
//                 past_sales: parseInt(formData.past_sales),
//                 current_stock: parseInt(formData.current_stock),
//                 event_day: parseInt(formData.event_day)
//             });
//             setPrediction(response.data.predicted_sales);
//             setError(null);
//         } catch (err) {
//             setError(err.response?.data?.error || 'Error predicting sales');
//             setPrediction(null);
//         }
//     };

//     return (
//         <div>
//             <h2>Predict Next Week's Sales</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Day of Week:</label>
//                     <input type="number" name="day_of_week" value={formData.day_of_week} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Past Sales:</label>
//                     <input type="number" name="past_sales" value={formData.past_sales} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Current Stock:</label>
//                     <input type="number" name="current_stock" value={formData.current_stock} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Event Day (0 or 1):</label>
//                     <input type="number" name="event_day" value={formData.event_day} onChange={handleChange} required min="0" max="1" />
//                 </div>
//                 <button type="submit">Predict</button>
//             </form>
//             {prediction !== null && (
//                 <div>
//                     <h3>Predicted Sales: {prediction.toFixed(2)}</h3>
//                 </div>
//             )}
//             {error && (
//                 <div style={{ color: 'red' }}>
//                     <h3>{error}</h3>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PredictForm;

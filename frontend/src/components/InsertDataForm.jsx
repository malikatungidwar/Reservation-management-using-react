// // frontend/src/components/InsertDataForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const InsertDataForm = () => {
//     const [formData, setFormData] = useState({
//         day_of_week: '',
//         // menu_item_id: '',
//         past_sales: '',
//         current_stock: '',
//         event_day: '',
//         next_week_sales: ''
//     });

//     const [message, setMessage] = useState(null);
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
//             const response = await axios.post('http://localhost:5000/insert', {
//                 day_of_week: parseInt(formData.day_of_week),
//                 // menu_item_id: parseInt(formData.menu_item_id),
//                 past_sales: parseInt(formData.past_sales),
//                 current_stock: parseInt(formData.current_stock),
//                 event_day: parseInt(formData.event_day),
//                 next_week_sales: parseInt(formData.next_week_sales)
//             });
//             setMessage(response.data.status);
//             setError(null);
//             setFormData({
//                 day_of_week: '',
//                 // menu_item_id: '',
//                 past_sales: '',
//                 current_stock: '',
//                 event_day: '',
//                 next_week_sales: ''
//             });
//         } catch (err) {
//             setError(err.response?.data?.error || 'Error inserting data');
//             setMessage(null);
//         }
//     };

//     return (
//         <div>
//             <h2>Insert Sales Data</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Day of Week:</label>
//                     <input type="number" name="day_of_week" value={formData.day_of_week} onChange={handleChange} required />
//                 </div>
//                 {/* <div>
//                     <label>Menu Item ID:</label>
//                     <input type="number" name="menu_item_id" value={formData.menu_item_id} onChange={handleChange} required />
//                 </div> */}
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
//                 <div>
//                     <label>Next Week Sales:</label>
//                     <input type="number" name="next_week_sales" value={formData.next_week_sales} onChange={handleChange} required />
//                 </div>
//                 <button type="submit">Insert Data</button>
//             </form>
//             {message && (
//                 <div style={{ color: 'green' }}>
//                     <h3>{message}</h3>
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

// export default InsertDataForm;

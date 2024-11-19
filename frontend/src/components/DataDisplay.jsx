// // frontend/src/components/DataDisplay.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DataDisplay = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/data');
//                 setData(response.data);
//                 setError(null);
//             } catch (err) {
//                 setError(err.response?.data?.error || 'Error fetching data');
//             }
//         };
//         fetchData();
//     }, []);
// // 
//     return (
//         <div>
//             <h2>Sales Data</h2>
//             {error && (
//                 <div style={{ color: 'red' }}>
//                     <h3>{error}</h3>
//                 </div>
//             )}
//             {!error && data.length === 0 && <p>No data available.</p>}
//             {!error && data.length > 0 && (
//                 <table border="1">
//                     <thead>
//                         <tr>
//                             <th>Day of Week</th>
//                             {/* <th>Menu Item ID</th> */}
//                             <th>Past Sales</th>
//                             <th>Current Stock</th>
//                             <th>Event Day</th>
//                             <th>Next Week Sales</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{item.day_of_week}</td>
//                                 {/* <td>{item.menu_item_id}</td> */}
//                                 <td>{item.past_sales}</td>
//                                 <td>{item.current_stock}</td>
//                                 <td>{item.event_day}</td>
//                                 <td>{item.next_week_sales}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default DataDisplay;

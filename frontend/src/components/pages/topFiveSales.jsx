import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

// Component to display the top five sales data
export default function TopFiveSales() {
  // State variables for holding data, loading status, and error handling
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading status to true while fetching data
      setError(null); // Clear any previous errors

      try {
        // Fetch data from the server using Axios
        const response = await axios.get('http://localhost:8080/api/topsales', {
          withCredentials: true, // Include cookies if necessary
        });
        
        // Update state with the fetched data
        setRows(response.data);
      } catch (error) {
        // Log and handle any errors that occur during data fetching
        console.error('Error fetching data:', error);
        setError(error); // Set error state for handling
      } finally {
        setIsLoading(false); // Reset loading status regardless of success or failure
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render the component
  return (
    <div className="max-w-[40rem] mx-auto p-4 md:p-10">
      <div style={{ height: 526, width: '100%', background: 'white' }}>
        {/* Display loading indicator or error message conditionally */}
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error: {error.message}</p>}
        {/* Render the data grid component */}
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 8 } } }}
          pageSizeOptions={[8, 16, 24]}
        />
      </div>
    </div>
  );
}

// Column configuration for the data grid
const columns = [
  { field: 'product', headerName: 'Product', width: 180, editable: false },
  {
    field: 'amt',
    headerName: 'Amount',
    type: 'number',
    width: 90,
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
    editable: true,
    // Custom renderer for displaying currency symbol
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>₹ {params.value}</div>
    ),
  },
  {
    field: 'dateCreated',
    headerName: 'Date (MM/DD/YYYY)',
    type: 'string',
    width: 180,
    headerAlign: 'right',
    align: 'right',
    // Custom value getter to format date using moment.js
    valueGetter: (params) => moment(new Date(params.value)).format('MMM Do YYYY'),
  },
];

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios"; // Import Axios
import { useState, useEffect } from "react";
import moment from "moment";

/**
 * Component to display the sales of the day.
 */
export default function TodayRev() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:8080/api/topsales", {
          withCredentials: true, // Include cookies if necessary
        });
        setRows(response.data.filter((row) => isToday(row.dateCreated)));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error); // Set error state for handling
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Function to check if a date string represents today's date.
   * @param {string} dateString - Date string to check
   * @returns {boolean} - True if the date is today, otherwise false
   */
  const isToday = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  };

  /**
   * Function to calculate total revenue for today.
   * @returns {number} - Total revenue for today
   */
  const todayTotal = () => {
    // Include filtering for today's data similar to `rows` filtering
    const todaysRows = rows.filter((row) => isToday(row.dateCreated));
    let tempSum = 0;
    todaysRows.forEach((row) => {
      tempSum += row.price;
    });
    return tempSum;
  };

  return (
    <>
      <h1 className="mx-auto bg-white w-fit p-4 mt-8 rounded font-bold">
        Today's Revenue: ₹{todayTotal()}
      </h1>
      <div className="max-w-[40rem] mx-auto p-4 md:p-10">
        <div style={{ height: 424, width: "100%", background: "white" }}>
          {isLoading && <p>Loading data...</p>}
          {error && <p>Error: {error.message}</p>}
          <DataGrid
            rows={rows.filter((row) => isToday(row.dateCreated))} // Filter for today's entries
            columns={columns}
            initialState={{
              pagination: { paginationModel: { pageSize: 6 } },
            }}
            pageSizeOptions={[6, 12, 18]}
          />
        </div>
      </div>
    </>
  );
}

// Columns configuration for the DataGrid
const columns = [
  { field: "product", headerName: "Product", width: 180, editable: false },
  {
    field: "amt",
    headerName: "Amount",
    type: "number",
    width: 90,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
    editable: true,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        ₹ {params.value}
      </div>
    ),
  },
  {
    field: "dateCreated",
    headerName: "Date (MM/DD/YYYY)",
    type: "string",
    width: 180,
    headerAlign: "right",
    align: "right",
    valueGetter: (params) =>
      moment(new Date(params.value)).format("MMM Do YYYY"),
  },
];

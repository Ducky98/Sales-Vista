import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function todayRev() {
  const todayTotal = () =>{
    let tempSum = 0;
    rows.forEach(row => {
      tempSum += row.price;
    });
    return tempSum;
  }
  return (
    <>
    <h1 className='mx-auto bg-white w-fit p-4 mt-8 rounded font-bold'>Today's Revanue: ₹{todayTotal()}</h1>
    <div className='max-w-[40rem] mx-auto p-4 md:p-10'>
      <div style={{ height: 370, width: '100%', background: 'white' }}>
        <DataGrid rows={rows} columns={columns} 
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 15]}/>
      </div>
    </div>
    </>
  );
}

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
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        ₹ {params.value}
      </div>
    ),
  },
  {
    field: 'dateCreated',
    headerName: 'Date (MM/DD/YYYY)',
    type: 'date',
    width: 180,
    editable: true,
    headerAlign: 'right',
    align: 'right',
    valueGetter: (params) => new Date(params.value),
  }
];

const rows = [
  { id: 1, product: 'David', amt: 324, price: 6000, dateCreated: '04/05/2023' },
  { id: 2, product: 'Alice', amt: 420, price: 7500, dateCreated: '04/05/2023' },
  { id: 3, product: 'Alice', amt: 420, price: 7500, dateCreated: '04/05/2023' },
  { id: 4, product: 'Alice', amt: 420, price: 7500, dateCreated: '04/05/2023' },
  { id: 5, product: 'John', amt: 200, price: 3000, dateCreated: '04/05/2023' }
];
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function topFiveSales() {
  return (
    <div className='max-w-[40rem] mx-auto p-4 md:p-10'>
      <div style={{ height: 526, width: '100%', background: 'white' }}>
        <DataGrid rows={rows} columns={columns} 
        initialState={{
          pagination: { paginationModel: { pageSize: 8 } },
        }}
        pageSizeOptions={[8, 16, 24]} checkboxSelection/>
      </div>
    </div>
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
  { id: 1, product: 'David', amt: 324, price: 6000, dateCreated: '11/05/2023' },
  { id: 2, product: 'Alice', amt: 420, price: 7500, dateCreated: '12/06/2023' },
  { id: 3, product: 'John', amt: 200, price: 3000, dateCreated: '05/07/2023' },
  { id: 4, product: 'Ella', amt: 550, price: 9000, dateCreated: '09/08/2023' },
  { id: 5, product: 'Michael', amt: 350, price: 5500, dateCreated: '03/10/2023' },
  { id: 6, product: 'Sara', amt: 280, price: 4300, dateCreated: '07/11/2023' },
  { id: 7, product: 'Emma', amt: 380, price: 7800, dateCreated: '02/12/2023' },
  { id: 8, product: 'James', amt: 290, price: 6200, dateCreated: '01/01/2024' },
  { id: 9, product: 'Sophia', amt: 470, price: 8800, dateCreated: '05/02/2024' },
  { id: 10, product: 'William', amt: 390, price: 7200, dateCreated: '09/03/2024' },
  { id: 11, product: 'Olivia', amt: 420, price: 7600, dateCreated: '12/04/2024' },
  { id: 12, product: 'Benjamin', amt: 460, price: 9200, dateCreated: '05/05/2024' },
  { id: 13, product: 'Ava', amt: 410, price: 7400, dateCreated: '12/06/2024' },
  { id: 14, product: 'Lucas', amt: 340, price: 6800, dateCreated: '11/07/2024' },
  { id: 15, product: 'Isabella', amt: 380, price: 8200, dateCreated: '12/08/2024' },
  { id: 16, product: 'Mason', amt: 450, price: 8900, dateCreated: '10/09/2024' },
  { id: 17, product: 'Mia', amt: 320, price: 6400, dateCreated: '03/10/2024' }
];
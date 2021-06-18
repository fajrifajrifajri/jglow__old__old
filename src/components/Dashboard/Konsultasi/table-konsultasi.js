import React, { useMemo, useState, useEffect } from "react";
import { useTable } from 'react-table';
import axios from 'axios';

// Styling
import '../../../Assets/css/index.css';

export const TableKonsultasi = () => {
	
	const [loadingData, setLoadingData] = useState(true);
	const [data, setData] = useState([]);
	const [hapus, setHapus] = useState(0);

	useEffect(() => {
	async function getData() {
	  await axios
		.get("http://localhost:5000/konsultasi/")
		.then((res) => {
		  // check if the data is populated
		  console.log(res.data);
		  setData(res.data);
		  // you tell it that you had the result
		  setLoadingData(false);
		});
	}
	if (loadingData) {
	  // if the result is not ready so you make the axios call
	  getData();
	}
	}, []);
	
	const columns = useMemo(() => 
	[
		{
			Header: 'Nama',
			accessor: 'nama'
		},
		{
			Header: 'Alamat',
			accessor: 'alamat'
		},
		{
			Header: 'No Telp',
			accessor: 'noTelp'
		},
		{
			Header: 'No Agent',
			accessor: 'noAgent'
		},
		{
			Header: 'Spesifikasi Kulit',
			accessor: 'spesifikasiKulit'
		},
		{
			Header: 'Kondisi',
			accessor: 'kondisi'
		},
		{
			Header: 'Foto Agent',
			accessor: 'fotoAgent'
		},
		{
			Header: 'Foto Kulit',
			accessor: 'fotoKulit'
		},
		{
		  // width: 300,
		  Header: "Delete",
		  accessor: "_id",
		  Cell: ({ cell }) => (
			<button key={cell.row.values._id} onClick={ () => { deleteExercise(cell.row.values._id) }}>
			  {cell.row.values._id}
			</button>
		  )
		}
	], [])
	
	const tableInstance = useTable({
		columns,
		data
	})
	
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance
	
	const deleteExercise = (id) => {
		axios.delete('http://localhost:5000/konsultasi/'+id)
			.then(res => console.log(res.data));
			setHapus({
				konsultasi: data.filter(el => el._id !== id)
			})
	}
	
	return (
		<table {...getTableProps()} className="w-full border border-black border-collapse">
			<thead>
			{headerGroups.map((headerGroup) => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column) => (
						<th {...column.getHeaderProps ()} className="border border-black p-4">{column.render('Header')}</th>
					))}
				</tr>
			))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map( (cell) => {
								return <td {...cell.getCellProps()} className="border border-black p-4">{cell.render('Cell')}</td>
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
	
}
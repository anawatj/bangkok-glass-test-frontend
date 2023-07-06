import React from 'react';
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
const columns = [
    {
        name: 'OrderDate',
        selector: row => row.orderDate,
        sortable: true,
        fixed: true,
    },
    {
        name: 'Region',
        selector: row => row.regionName,
        sortable: true,
        fixed: true,
    },
    {
        name: 'City',
        selector: row => row.cityName,
        sortable: true,
        fixed: true,
    },
    {
        name: 'Category',
        selector: row => row.categoryName,
        sortable: true,
        fixed: true,
    },
    {
        name: 'Product',
        selector: row => row.productName,
        sortable: true,
        fixed: true,
    },
    {
        name: 'Quantity',
        selector: row => row.quantity,
        sortable: true,
        right: true,
    },
    {
        name: 'UnitPrice',
        selector: row => row.unitPrice,
        sortable: true,
        right: true,
    },
    {
        name: 'TotalPrice',
        selector: row => row.totalPrice,
        sortable: true,
        right: true,
    },

];


const tableDataItems = [{
    orderDate: "01/01/2020",
    regionName: "East",
    cityName: "Boston",
    categoryName: "Bars",
    productName: "Carrot",
    quantity: 33,
    unitPrice: 1.77,
    totalPrice: 58.41

}]
export default () => {
    const router = useRouter();
    const handleAddClick=()=>{
       // e.preventDefault()
        router.push("/create");
    }
    const render=()=>{
        return <div>
        <Button as="a" variant="primary" onClick={()=>handleAddClick()}>
            Add
        </Button>
        <span>	<DataTable
            title="Orders"
            columns={columns}
            data={tableDataItems}
        />
        </span>
    </div>
    }
    return render();
    
}
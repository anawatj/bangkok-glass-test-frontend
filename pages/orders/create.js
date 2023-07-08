import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import { listRegion,listCategory,listCity } from '../../apis/common-api';
export default () => {
    const [orderDate,setOrderDate] = useState('');
    const [regionId,setRegionId] = useState('');
    const [regions,setRegions]=useState([]);
    const [categories,setCategories]=useState([]);
    const [cities,setCities]=useState([]);

    useEffect( ()=>{
       
        var promiseRegion = listRegion();
        var promiseCategory = listCategory();
        Promise.all([
            promiseRegion,
            promiseCategory
        ]).then(res=>{
            console.log(JSON.stringify(res));
            setRegions(res[0].data);
            setCategories(res[1].data);
        })
      
    },[])
    const handleRegionChange = (e)=>{
        setRegionId(e.target.value);
        listCity(e.target.value).then(res=>{
            setCities(res.data);
        })
    }

    const render = () => {
        return <div>
            <form>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>OrderDate</label>
                            <input type="date" className='form-control' />
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Region</label>
                            <select className='form-control' onChange={(e)=>handleRegionChange(e)}>
                                <option>Please Select</option>
                                {regions.map(region=>{
                                    return <option key={region.value} value={region.value}>{region.text}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>City</label>
                            <select className='form-control'>
                                <option>Please Select</option>
                                {cities.map(city=>{
                                    return <option key={city.value} value={city.value}>{city.text}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Category</label>
                            <select className='form-control'>
                                <option>Please Select</option>
                                {categories.map(category=>{
                                    return <option key={category.value} value={category.value}>{category.text}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Product</label>
                            <select className='form-control'>
                                <option>Please Select</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Quantity</label>
                            <input type="number" className='form-control'></input>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Unit Price</label>
                            <input type="text" readOnly={true} className='form-control'></input>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label>Total Price</label>
                            <input type="text" readOnly={true} className='form-control'></input>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Button as="a" variant="primary" type="submit">
                            Save
                        </Button>&nbsp;
                        <Button as="a" variant="primary" type="reset">
                            Clear
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    }
    return render();
}
import React from 'react'
import Button from 'react-bootstrap/Button';
export default () => {
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
                            <select className='form-control'>
                                <option>Please Select</option>
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
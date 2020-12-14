import React from 'react';

const UpdateCustomerBtn = props => {

  const {handleIsUpdating} = props

  const handleUpdate = () => {
    // event.preventDefault()
    handleIsUpdating()

  }

  return (
    <div>
      <button className="btn btn-dark" onClick={handleUpdate} >Update</button>
    </div>
  );
}

export default UpdateCustomerBtn;

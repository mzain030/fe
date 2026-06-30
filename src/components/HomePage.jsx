import React, { useState } from 'react'

const HomePage = () => {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  return (
    <div>
        <div className='header'>
      
<div>
    <h1>
    User Information
</h1>

</div>
<div class="input-group" style={{width:"300px"}}>
   
    <input type="text" class="form-control" placeholder='Search'/>
  </div>
<div>

<button type="button" class="btn btn-info">Add New User</button>

</div>
</div>

{/* table section  */}
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</table>

    </div>
  )
}

export default HomePage

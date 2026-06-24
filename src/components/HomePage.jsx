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
<div>
    <input type='search' placeholder='seach'></input>
</div>
<div>

<button type="button" class="btn btn-info">Add New User</button>

</div>
</div>

    </div>
  )
}

export default HomePage

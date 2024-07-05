import React from 'react'
import "./AddClient.css"

const AddClient = () => {
  return (
    <div className='addclient-form-container'>
      <form action="" className='addclient-form'>
        <h2 className='addclient-header'>Client</h2>
        <div className='addclient-client-name'>
          <label htmlFor="clientname" className='clientname'>Category</label>
          <input type="text" placeholder='Enter a category' className='client-input'/>
        </div>
        <div className='addclient-client-name'>
          <label htmlFor="clientname" className='clientname'>Representative</label>
          <input type="text" placeholder='Representative name' className='client-input'/>
        </div>
        <div className='addclient-client-name'>
          <label htmlFor="clientname" className='clientname'>Date of creation</label>
          <input type="text" placeholder='dd/mm/yyyy' className='client-input'/>
        </div>
        <div className='addclient-client-name'>
          <label htmlFor="clientname" className='clientname'>Address</label>
          <input type="text" placeholder='Province, District, Sector, Cell' className='client-input'/>
        </div>
        <div className='addclient-client-name'>
          <label htmlFor="clientname" className='clientname'>Email</label>
          <input type="text" placeholder='ganzac@gmail.com' className='client-input'/>
        </div>
        <div className='addclient-client-name'>
          <label htmlFor="clientname" className='clientname'>Phone</label>
          <input type="text" placeholder='0788333333' className='client-input'/>
        </div>
        <div className='addclient-client-name'>
          <label htmlFor="clientname" className='clientname'>Bank Account IBAN</label>
          <input type="text" placeholder='Bank Account' className='client-input'/>
        </div>
        <button type='submit' className='client-btn'>Add Client</button>
      </form>
    </div>
  )
}

export default AddClient
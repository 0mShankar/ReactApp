import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="male"?"selected":""}`}>
                <span className="label-text text-gray-300"> Male</span> 
                <input type="checkbox"  className="checkbox checkbox-primary" 
                checked={selectedGender ==="male"}
                onChange={()=>onCheckboxChange("male")}
                />
            </label>
        </div>


        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}>
                <span className="label-text text-gray-300"> Female</span> 
                <input type="checkbox"  className="checkbox checkbox-primary"
                checked={selectedGender ==="Female"}
                onChange={()=>onCheckboxChange("Female")}
                />
            </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox

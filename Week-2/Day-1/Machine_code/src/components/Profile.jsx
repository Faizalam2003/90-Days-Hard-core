import React from 'react'

const Profile = ({data , setData, errors}) => {
    const {name , email ,interest , age} = data

    const handleDataChange = (e , item)=>{
        setData(prev=>({
            ...prev,
            [item]:e.target.value
        }))

    }

    console.log(errors)
  return (
    <div>
        <div>
            <label>  Name: </label>
            <input type="text" placeholder='name here' value={name} onChange={(e)=>handleDataChange(e, "name")} /> 
            {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
        <label>  Email: </label>
        <input type="text" placeholder='Email here' value={email} onChange={(e)=>handleDataChange(e, "email")} />
        </div>

        <div>
        <label>  age: </label>
        <input type="number" placeholder='Email here' value={age} onChange={(e)=>handleDataChange (e, "age")} />
        </div>
    </div>
  )
}

export default Profile
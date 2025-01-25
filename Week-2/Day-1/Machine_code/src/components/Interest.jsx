import React from 'react'

const Interest = ({data , setData}) => {
    const {interest} = data

    const handleDataChange = (e)=>{
       setData(prev=>({
        ...prev,
        interest : e.target.checked ? [...prev.interest , e.target.name] : 
        prev.interest.filter((item)=>item !== e.target.name)
       }))
    }
    console.log(interest)

    
    
  return (
    <div>
        <div>
        <label>
            <input type="checkbox" name='coding' 
            checked={interest.includes("coding")}
            onChange={handleDataChange}
             />
            Coding
        </label>
        </div>

        <div>
        <label>
            <input type="checkbox" name='javascript'
            checked={interest.includes("javascript")}
            onChange={handleDataChange}
             />
            javascript
        </label>
        </div>
        <div>
        <label>
            <input type="checkbox" name='writing'
            checked={interest.includes("writing")}
            onChange={handleDataChange}
             />
            writing
        </label>
        </div>
    </div>
  )
}

export default Interest
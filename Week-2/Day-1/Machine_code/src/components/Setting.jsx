import React from 'react'

const Setting = ({data , setData}) => {
    const {theme} = data

    const handleDataChange = (e)=>{
        setData(prev=>({
            ...prev, 
            theme:e.target.name
        }))
    }

 
  return (
    <div>
        <div>
        <label>
            <input type="radio" name='dark' 
            checked={theme === "dark"}
            onChange={handleDataChange}
             />
            dark
        </label>
        </div>
        <div>
        <label>
            <input type="radio" name='light' 
            checked={theme === "light"}
            onChange={handleDataChange}
             />
            light
        </label>
        </div>
    </div>
  )
}

export default Setting
import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest'
import Setting from './Setting'
import './TabForm.css';

const TabForm = () => {

    const [data , setData] = useState({
        name:"faiz",
        email:"faiz@123",
        interest:["reading","writing","coding", "javascript"],
        age:"24",
        theme:["light","dark"]
    })


    // error handling 
    const [errors , setError] = useState({
        name:'name is not empty'
    })

    // check the active tab
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            name:"Profile",
            component:Profile,
    },{
        name:"Interest",
        component:Interest
    },{
        name:"Setting",
        component:Setting
    }

]

const ActiveTabComponents  = tabs[activeTab].component
console.log(ActiveTabComponents)

const handleNextClick = ()=>{
    setActiveTab(activeTab +1)

}

const handlePrevClick = ()=>{
    setActiveTab(activeTab -1)

}

const  handleSubmit = ()=>{
    // make a api call
    console.log(data)

}
  return (
    <div>
        <div className='heading-container'>
            {tabs.map((tab, index)=><div key={index} className='heading' onClick={()=>setActiveTab(index)}>{tab.name}</div>)}
        </div>
        <div className='tab-body'>
              <ActiveTabComponents data={data}  setData ={setData} errors={errors} />
        </div>

        <div>
            {activeTab >0 &&
            <button onClick={handlePrevClick}>Prev</button>}
            {activeTab < tabs.length-1 &&
            <button onClick={handleNextClick}>Next</button>}
            {activeTab ===tabs.length-1 &&
            <button onClick={handleSubmit}>Submit</button>}
        </div>
    </div>
  )
}

export default TabForm
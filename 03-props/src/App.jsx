import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
   
    <div className='Parent'>
      <Card user='Shivam' age={19} img= 'https://images.unsplash.com/photo-1787946178275-abedbdd2cf70?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'/> 
      <Card user='Sidd' age={18} img= 'https://images.unsplash.com/photo-1788090834876-2b120fee1b4f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
   
  )
}

export default App
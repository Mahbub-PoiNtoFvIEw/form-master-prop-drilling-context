

import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import CustomHookForm from './components/CustomHookForm/CustomHookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/Simpleform/SimpleForm'

function App() {

  // const handleSignUp = data =>{
  //   console.log('sign up data',data)
  // }

  // const handleUpdateProfile = data =>{
  //   console.log('update profile data',data)
  // }

  return (
    <>
    {/* <SimpleForm></SimpleForm> */}
    {/* <StatefulForm></StatefulForm> */}
    {/* <RefForm></RefForm> */}
    {/* <CustomHookForm></CustomHookForm> */}
    {/* <ReuseableForm 
    formTitle={'Sign Up'}
    handleSubmit={handleSignUp}
    >
      <div>
        <h2 className="font-bold text-3xl ml-20 mt-6">Sign Up</h2>
      </div>
    </ReuseableForm>
    <ReuseableForm 
    formTitle={'Update Profile'}
    submitButtonText='Update'
    handleSubmit={handleUpdateProfile}
    >
      <div>
        <h2 className="font-bold text-3xl ml-20 mt-6">Update Profile</h2>
      </div>
    </ReuseableForm> */}
    <GrandPa></GrandPa>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import FoodLog from "./pages/FoodLog"
import Profile from "./pages/Profile"
import ActivityLog from "./pages/ActivityLog"
const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}/>
        <Route path="food" element={<FoodLog/>}/>
        <Route path="activity" element={<ActivityLog/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="home" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
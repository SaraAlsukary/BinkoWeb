import { Header } from "@components/common"
import { Outlet } from "react-router-dom"



const HomePage = () => {
  return (
    <>
      <Header />
      <div><Outlet /></div>
    </>
  )
}

export default HomePage

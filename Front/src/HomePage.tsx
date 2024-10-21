import { Header } from "@components/common"
import Menu from "@components/common/Menu/Menu"
import { useAppSelector } from "@hooks/app";
import { Outlet } from "react-router-dom"



const HomePage = () => {
  const { authState } = useAppSelector(state => state.auth);

  return (
    <>
      <Header />
      <div >
        <Outlet />
      </div>
      {authState ? <Menu /> : ''}

    </>
  )
}

export default HomePage

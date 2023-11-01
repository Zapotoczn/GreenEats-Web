import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaRegSun, 
  FaUserAlt, 
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        <SidebarItem Icon={FaRegSun} Text="Configurações" />
      </Content>
    </Container>
  )
}

export default Sidebar
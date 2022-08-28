import React from 'react'
import { Container, Content } from './styles'
import { 
  FaEnvelope, 
  FaHome, 
  FaTasks,
  FaRegCalendarAlt,
  FaSearch,
  FaClipboard, 
  FaRegSun,
  FaTimes,
  FaUserAlt 
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem/SidebarItem'


const Sidebar = ({active}) => {

  const closeSidebar = () => {
    active(false)
}

return (
  <Container sidebar={active}>
    <FaTimes onClick={closeSidebar}/>
    <Content>
      <SidebarItem Icon={FaHome} Text="Home"/>
      <SidebarItem Icon={FaSearch} Text="Search"/> 
      <SidebarItem Icon={FaUserAlt} Text="Users"/>
      <SidebarItem Icon={FaEnvelope} Text="Email"/>
      <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar"/>
      <SidebarItem Icon={FaTasks} Text="Tasks" />
      <SidebarItem Icon={FaClipboard} Text="Projects"/>
      <SidebarItem Icon={FaRegSun} Text="Settings"/>
    </Content>
  </Container>
)
}

export default Sidebar;
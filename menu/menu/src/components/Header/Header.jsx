import React, { useState } from 'react';
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { Container } from './styles';
import Sidebar from '../Sidebar/Sidebar';


const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
     < RiBarChartHorizontalFill onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} /> }
    </Container>
  )
}

export default Header
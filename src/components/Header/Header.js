import React from 'react';

import Navbar from '../Navbar/Navbar';

import { HeaderBlock, HeaderText, Link} from '../Header/style';

const Header = () => {
  return (
    <HeaderBlock>
      <Link to='/'>
        <HeaderText>&lt; Juliana Madeira Tecnologia &gt;</HeaderText>      
      </Link>
      <Navbar/>
    </HeaderBlock>
  )
}

export default Header
import { useState } from 'react';
import { 
  Container, 
  Content, 
  LeftSide,
  RightSide,
  MobileIcon,
  LinkItem  
} from './styles'

import Logo from '@assets/lol.png'

import { useLocation } from 'react-router-dom'

import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { pathname } = useLocation();

  const [clicked, setClicked] = useState(false);

  return(
    <Container>
      <Content>

        <MobileIcon onClick={() => setClicked(!clicked)}>
          {clicked ? <FaTimes color="#FFF" /> : <FaBars color="#FFF" />}
        </MobileIcon>

        <LeftSide onClick={() => setClicked(false)}>
          <LinkItem to="/">
            <img src={Logo} alt="Logo league of legends" />
          </LinkItem>
        </LeftSide>

        <RightSide onClick={() => setClicked(!clicked)} clicked={clicked}>
          <LinkItem to="/" $active={pathname === '/'}>Home</LinkItem>
          <LinkItem to="/characters" $active={pathname === '/characters'}>Characters</LinkItem>
          <LinkItem to="/game" $active={pathname === '/game'}>Game</LinkItem>
        </RightSide>

      </Content>
    </Container>
  )
}
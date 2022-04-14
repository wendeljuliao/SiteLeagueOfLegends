import { 
  Container, 
  Content, 
  LeftSide,
  RightSide,
  LinkItem  
} from './styles'

import Logo from '@assets/lol.png'

import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation();

  return(
    <Container>
      <Content>

        <LeftSide>
          <LinkItem to="/" >
            <img src={Logo} alt="Logo league of legends" />
          </LinkItem>
        </LeftSide>

        <RightSide>
          <LinkItem to="/" active={pathname === '/'}>Home</LinkItem>
          <LinkItem to="/characters" active={pathname === '/characters'}>Characters</LinkItem>
          <LinkItem to="/game" active={pathname === '/game'}>Game</LinkItem>
        </RightSide>

      </Content>
    </Container>
  )
}
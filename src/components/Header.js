import React, {useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/Car/carSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  
  return (
    <Container>
      <a>
        <img src="images/logo.svg" />
      </a>
      <Menu >
      {cars &&
        cars.map((car, index) =>{ (
          <a key={index} href="#">
            {car}
           </a>
      )})
    }

      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>{setBurgerStatus(true)}}></CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>{setBurgerStatus(false)}}></CustomClose>
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))
        }
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  top:0;
  z-index: 1;
  left:0;
  right:0;
  position:fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex:1;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 786px) {
    display:none
  }
`
const RightMenu = styled.div`
  display:flex;
  align-items: center;
  padding:0 10px;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
  }

`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  transition: 0.4s ease;
  right:0;
  background-color: white;
  width: 300px;
  z-index: 1;
  list-style: none;
  padding: 20px;
  display:flex;
  flex-direction:column;
  align-items: space-between;
  text-align: start;
  transform: ${props=>props.show ? 'translateX(0%)': 'translateX(100%)'};
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
      font-weight: 600;  
    }
  }

`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content:flex-end;
`
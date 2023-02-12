import styled from "styled-components"
import { FacebookIcon } from '../../public/images/icons/FacebookIcon'
import { InstagramIcon } from '../../public/images/icons/InstagramIcon'
import { SpotifyIcon } from '../../public/images/icons/SpotifyIcon'
import { Container } from "./Container"
import LogoTextuaria from "../../public/images/logo-textuaria"
import { useState } from "react"

const Header = () => {

    const [activeMobileMenu, setActiveMobileMenu] = useState(false)

    return (
        <HeaderStyled>
            <HeaderContainer>
                <Logo href="/">
                    <LogoTextuaria width="100%" color="#fff" />
                </Logo>

                <NavStyled id="nav-header" className={ activeMobileMenu ? 'active' : ''}>
                    <span style={{ width: 130 +'px' }}></span>

                    <MenuLinksList >
                        <li className={  'active' }><a href="#">O que fazemos</a></li>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Cases</a></li>
                        <li><a href="#">Depoimentos</a></li>
                        <li><a href="#">Loja</a></li>
                        <li><a href="#">Contatos</a></li>
                    </MenuLinksList>

                    <SocialIcons>
                        <li>
                            <a href="www.facebook.com" target="_blank">
                                <FacebookIcon />
                            </a>
                        </li>
                        <li>
                            <a href="www.instagram.com" target="_blank">
                                <InstagramIcon />
                            </a>
                        </li>
                        <li>
                            <a href="www.instagram.com" target="_blank">
                                <SpotifyIcon />
                            </a>
                        </li>
                    </SocialIcons>
                </NavStyled>

                <Hamburger onClick={ () => setActiveMobileMenu(!activeMobileMenu) } className={ activeMobileMenu ? 'active' : ''}>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                </Hamburger>

            </HeaderContainer>
        </HeaderStyled>
    )
}

export { Header }

const HeaderStyled = styled.header`
    width: 100vw;
    position: fixed;
    top: 25px;
    z-index: 9999;
`

const HeaderContainer = styled(Container)`
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.a`
    width: 130px;
    min-width: 100px;
    transition: 200ms ease-in-out;
    
    svg path {
        transition: 200ms ease-in-out;
    }

    &:hover {
        scale: 1.05;

        & svg path {
            fill: var(--green) !important;
        }
    }


    @media screen and (max-width: 1024px) {
        width: 100px;
        height: 100px;
    }
`

const NavStyled = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        height: 100vh;
        width: 250px;
        background-color: #91C09Eda;
        right: -25px;
        position: relative;
        top: -25px;
        padding: 80px 30px;

        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: flex-start;

        transition: 200ms ease-in-out;
        transform: translateX(100%);
        opacity: 0;
            
        &.active {
            transform: translateX(0);
            opacity: 1;
        }
    }
`    

const MenuLinksList = styled.ul`
    display: flex;
    align-self: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        position: relative;
        margin-top: 30px;
        width: 100%;
    }
    
    li {
        margin: 0px 25px;
        width: max-content;
        text-align: right;

        @media screen and (max-width: 1024px) {
            margin: 0px;

            &::after {
                content: '';
                border-bottom: 1px solid #ffffff45;
                display: block;
                width: 100%;
                margin: 20px 0;
            }
        }
        
        a {
            display: block;
            position: relative;
            text-decoration: none;
            color: var(--white);
            transition: 200ms ease-in-out;

            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -10px;
                border-bottom: 3px solid var(--green);
                width: 0;
                height: 0;
                transition: 200ms ease-in-out;
            }  

            &:hover {
                &:after {
                    width: 100%;
                }
            }
        }

        &.active {
            a {
                font-weight: 600;
            }
        }
    }
`

const SocialIcons = styled.ul`
    display: flex;
    align-items: center;

    li {
        margin-left: 10px;

        @media screen and (max-width: 1024px) {
            &:first-child {
                margin-left: 0;
            } 
        }
        
        a {
            width: fit-content;
            
        }
        
        svg {
            &:hover > path {
                fill: var(--green);

                @media screen and (max-width: 1024px) {
                    fill: var(--white); 
                }
            }
            
            path {
                transition: 200ms ease-in-out;
            }
        }
    }
`

const Hamburger = styled.button`
    display: none;
    border: none;
    background: none;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      position: absolute;
      z-index: 9999;
      top: 0; 
      right: 15px;
    }

    & .hamburger__line {
        width: 30px;
        height: 4px;
        margin-bottom: 5px;
        background-color: #fff;
        display: block;
        position: relative;
        transition: 200ms ease-in-out;    
    }

    &.active {
        span {
            &:first-of-type {
                transform: translateY(9px) rotate(135deg);
            }

            &:nth-of-type(2) {
                opacity: 0;
            }

            &:last-of-type {
                transform: translateY(-9px) rotate(-135deg);
            }

        }
    }
`


import Image from "next/image"
import Link from "next/link"
import styled, { keyframes } from "styled-components"
import facebookGreenIcon from '../../public/images/icons/facebook-green.svg'
import facebookRedIcon from '../../public/images/icons/facebook-red.svg'
import spotfyGreenIcon from '../../public/images/icons/spotify-green.svg'
import spotfyRedIcon from '../../public/images/icons/spotify-red.svg'
import instagramGreenIcon from '../../public/images/icons/instagram-green.svg'
import instagramRedIcon from '../../public/images/icons/instagram-red.svg'

const Header = () => {
    return (
        <HeaderStyled>
            <div className="container">

                <Logo href="/">
                    <img src="/images/logo-textuaria-amarelo.webp" alt="Textuaria" />
                </Logo>

                <nav id="nav-header">
                    <Hamburger>
                        <span className="hamburger__line"></span>
                        <span className="hamburger__line"></span>
                        <span className="hamburger__line"></span>
                    </Hamburger>

                    <MenuLinksList>
                        <li className="active">
                            <a href="#">O que fazemos</a>
                        </li>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Cases</a></li>
                        <li><a href="#">Depoimentos</a></li>
                        <li><a href="#">Loja</a></li>
                        <li><a href="#">Contatos</a></li>
                    </MenuLinksList>
                </nav>

                <SocialIcons>
                    <SocialIcon href="www.facebook.com" target="_blank" primaryImage={facebookGreenIcon} secondaryImage={facebookRedIcon} />
                    <SocialIcon href="www.facebook.com" target="_blank" primaryImage={spotfyGreenIcon} secondaryImage={spotfyRedIcon} />
                    <SocialIcon href="www.facebook.com" target="_blank" primaryImage={instagramGreenIcon} secondaryImage={instagramRedIcon} />
                </SocialIcons>
            </div>
        </HeaderStyled>
    )
}

export { Header }

const animateBlinkTextCursor = keyframes`
    0%, 100% {
        border-right-color: #00000075;
    }
    50% {
        border-right-color: transparent;
    }
`

const HeaderStyled = styled.header`
    width: 100vw;
    height: 50px;
    background-color: var(--yellow);
    position: sticky;
    top: 70px;
    margin-top: 50px;

    .container {
        max-width: 1440px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const Logo = styled.a`
    height: 120px;
    transition: 200ms ease-in-out;
    border-radius: 50%;
    box-shadow: 0 0 10px #00000025;

    &:hover {
        scale: 1.05;
        rotate: 5deg;
        }

    @media screen and (max-width: 1024px) {
        width: 100px;
        height: 100px;
    }

    img {
        object-fit: contain;
        object-position: 1% 3%;
        border-radius: 100%;
        width: 100%;
        height: 100%;
    }
`

const Hamburger = styled.button`
    width: 30px;
    height: 25px;
    display: none;
    border: none;
    background: none;
    cursor: pointer;
`

const MenuLinksList = styled.ul`
    display: flex;
    transition: 200ms ease-in-out;

    li {
        margin: 0px 25px;
        
        a {
            display: block;
            position: relative;
            text-decoration: none;
            color: var(--text-color);
            transition: 200ms ease-in-out;

            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -15px;
                border-bottom: 3px solid var(--red);
                width: 0;
                transition: 200ms ease-in-out;
            }  

            &:hover {
                scale: 1.05;

                &:after {
                    width: 100%;
                }
            }
        }
    }
`

const SocialIcons = styled.div`
    display: flex;
`

const SocialIcon = styled.a`
 background-image: url(${spotfyGreenIcon.src});
 background-image: url(${props => props.primaryImage.src});
 background-size: cover;
 width: 25px;
 height: 25px;
 transition: 200ms ease-in-out;
 margin-left: 10px;

 &:hover {
    background-image: url(${props => props.secondaryImage.src});
 }
`




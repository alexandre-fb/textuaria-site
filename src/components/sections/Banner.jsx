import styled, { keyframes } from "styled-components"
import bgImage from '../../../public/images/bg/banner.webp'
import { Container } from "../Container"

const BannerSection = () => {

    return (
        <>
        <SectionStyled bgImage={bgImage}>
            <Container>
                <AnimatedTextWrapper>
                    <h2>Comunicando</h2> 
                    <ul>
                        <li>
                            <AnimatedText className="animated-text" steps={10}>cultura.</AnimatedText>
                        </li>
                        <li>
                            <AnimatedText className="animated-text"steps={13}>literatura.</AnimatedText>
                        </li>
                        <li>
                            <AnimatedText className="animated-text" steps={7}>arte.</AnimatedText>
                        </li>
                        <li>
                            <AnimatedText className="animated-text" steps={8}>sonhos.</AnimatedText>
                        </li>
                    </ul>
                </AnimatedTextWrapper>
            </Container> 
        </SectionStyled>
        </>
    )
}

export { BannerSection }

//animation
const blinkTextCursor = keyframes`
    0%, 100% {
        border-right-color: #fff;
    }
    50% {
        border-right-color: transparent;
    }
`

const slideUp = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(-300%);
    }
`

const typeText = keyframes`
    0%, 90%, 100% {
        width: 0;
    }
    25%, 75% {
        width: 100%;
    }
`
//end animation

const SectionStyled = styled.section`
    position: relative;
    width: 100vw;
    height: 600px;
    background-image: url(${ props => props.bgImage.src });
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: var(--dark-gray);
    background-blend-mode: multiply;

    @media screen and (max-width: 1920px) {
        background-size: 150%;
    }

    @media screen and (max-width: 1024px) {
        background-size: 200%;
    }

    @media screen and (max-width: 769px) {
        background-size: 300%;
    }
`

const AnimatedTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    transform: translateY(300%);
    transform: translate(15%, 250%);

    h2 {
        color: var(--white);
        font-size: 2.5em;
        white-space: nowrap;
        overflow: hidden;
        margin-right: 10px;
        
        font-family: var(--serif);
        font-weight: 300;
    }

    ul {
        position: relative;
        top: 0;
        height: 75px;
        overflow: hidden;

        li {
            color: var(--white);
            width: min-content;
            overflow: hidden;
            animation: ${ slideUp } 16s steps(4, start) infinite;
        }
    }
`

const AnimatedText = styled.h2`
    border-right: 2px solid var(--white);
    font-size: 5em !important;
    white-space: nowrap;
    display: block;
    animation: ${ typeText } 4s steps(${props => props.steps}, start) infinite, ${ blinkTextCursor } 500ms linear infinite;
`

// export { BannerSection }
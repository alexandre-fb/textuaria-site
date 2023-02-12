import styled, { keyframes } from "styled-components"
import bgImage from '../../../public/images/bg/banner.webp'
import { Container } from "../Container"
import { SectionDefault } from "../SectionDefault"
import { SectionTitle } from "../SectioTitle"

const WhatWeDoSection = () => {

    return (
        <SectionStyled>
            <Container>
                <SectionTitle>O que fazemos</SectionTitle>
                <ServicesWrapper>
                    <ul>
                        <li>
                            <div className="service-icon"></div>
                            <h3>Serviço</h3> 
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquid natus consequatur ratione laborum quod fugiat eius veritatis iure atque culpa temporibus corrupti, explicabo, beatae quia ad distinctio reprehenderit modi.</p>   
                        </li>
                        <li>
                            <div className="service-icon"></div>
                            <h3>Serviço</h3> 
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquid natus consequatur ratione laborum quod fugiat eius veritatis iure atque culpa temporibus corrupti, explicabo, beatae quia ad distinctio reprehenderit modi.</p>   
                        </li>
                        <li>
                            <div className="service-icon"></div>
                            <h3>Serviço</h3> 
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquid natus consequatur ratione laborum quod fugiat eius veritatis iure atque culpa temporibus corrupti, explicabo, beatae quia ad distinctio reprehenderit modi.</p>   
                        </li>
                    </ul>
                </ServicesWrapper>
            </Container> 
        </SectionStyled>
    )
}

export { WhatWeDoSection }

const SectionStyled = styled(SectionDefault)`
    background-color: var(--light-yellow);
`

const ServicesWrapper = styled.div`
    padding: 100px 0;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 70px;
    }

    li { 
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        flex-basis: 30%;

        .service-icon {
            width: 120px;
            height: 120px;
            background-color: var(--red);
            border-radius: 50%;
            margin-bottom: 25px;
        }

        h3 {
            font-size: 1.5em;
            margin-bottom: 15px;
            font-family: var(--serif);
        }

        p {
            text-align: center;
        }
    }
`

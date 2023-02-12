import styled from "styled-components";

const SectionTitle = styled.h2`
    font-family: var(--serif);
    font-size: 2em;
    width: fit-content;
    color: ${ props => props.textColor ? props.textColor : '#4D4D4D' };

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${ props => props.underlineColor ? props.underlineColor : '#E65540' };
        margin-top: -5px;
        opacity: .3;
        transition: 200ms ease-in-out;
    }

    &:hover:after {
        opacity: 1;
    }
`

export { SectionTitle }
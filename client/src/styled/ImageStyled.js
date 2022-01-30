import styled from 'styled-components';

export const ImageWrapperStyled = styled.div`
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ImageLayer = styled.div`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    overflow: hidden;
    background-color: transparent;
    background-image: url(${props => props.image_src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
`;

export const StyledImage = styled.img`
    width: auto;
    height: 10rem;
    border: none;
`;
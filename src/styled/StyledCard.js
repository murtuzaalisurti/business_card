import styled from 'styled-components';

export const CardWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #23252C;
    height: 100vh;
`;

export const CardStyled = styled.div`
    background-color: #1A1B21;
    /* height: 30rem; */
    width: 17rem;
    border: 1px solid transparent;
    border-radius: 0.9rem;
    overflow: hidden;
`;

export const MainContentWrapperStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const IntroductionWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IntroductionStyled = styled.div`
    .name, .occupation, .website{
        margin: 0;
        text-align: center;
    }
    .name{
        font-size: 1.3rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: white;
    }
    .occupation{
        font-size: 0.8rem;
        font-family: 'Lato', sans-serif;
        color: #F3BF99;
    }
    .website{
        font-size: 0.6rem;
        margin-top: 0.5rem;
        color: #767676;
        font-family: 'Inter', sans-serif;
    }
`;

export const ContactCTAWrapperStyled = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 1.1rem 1.3rem 1.1rem;

    a{
        width: 38%;
    }
    
    button {
        cursor: pointer;
        width: 100%;
        padding: 0.3rem 0.6rem;
        outline: none;
        font-family: 'Inter', sans-serif;
        font-size: 0.7rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;
        font-weight: 500;
    }
    .email{
        background-color: #ffffff;
        color: #374151;
    }
    .linkedin{
        background-color: #5093E2;
        color: #ffffff;
    }
`;

export const AboutWrapper = styled.div`
    padding: 0 2rem;

    .about, .interests{
        margin-bottom: 1rem;
    }
    .title, .desc{
        font-family: 'Inter', sans-serif;
        font-size: 0.6rem;
        color: #9a9a9a;
    }
    .title{
        color: #F5F5F5;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
    }
`;

export const SocialsStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    color: #918E9B;
    padding: 0.6rem 0.5rem;
    font-size: 1.5rem;
    background-color: #161619;

    a{
        color: #918E9B;
    }
`;
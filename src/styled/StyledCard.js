import styled from 'styled-components';

export const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #23252C;
    height: 100%;
    width: 40%;
    position: sticky;
    top: 2rem;
    margin-bottom: 2rem;
`;

export const CardStyled = styled.div`
    background-color: ${props => props.theme === "dark" ? "#1A1B21" : "#F5F5F5"};
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
    margin-bottom: 1.5rem;
    .name, .occupation, .website{
        margin: 0;
        text-align: center;
    }
    .name{
        font-size: 1.3rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: white;
        color: ${props => props.theme === "dark" ? "white" : "black"}
    }
    .occupation{
        font-size: 0.8rem;
        font-family: 'Lato', sans-serif;
        color: #F3BF99;
        color: ${props => props.theme === "dark" ? "#F3BF99" : "#d46c1f"}
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
        margin-bottom: 1.5rem;
    }
    .title, .desc{
        font-family: 'Inter', sans-serif;
        font-size: 0.6rem;
        color: #9a9a9a;
        color: ${props => props.theme === "dark" ? "#9a9a9a" : "#7e7e7e"}
    }
    .title{
        color: #F5F5F5;
        color: ${props => props.theme === "dark" ? "#F5F5F5" : "#252525"};
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

export const EmailStyled = styled(SocialsStyled)`
    font-size: 0.6rem;
    font-family: 'Poppins', sans-serif;
    padding: 0.8rem 0.5rem;
    color: ${props => props.theme === "dark" ? "#918E9B" : "#747474"};
    background-color: ${props => props.theme === "dark" ? "#161619" : "#D5D4D8"};
`;
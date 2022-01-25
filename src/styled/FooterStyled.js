import styled from 'styled-components';

export const StyledFooter = styled.div`
    padding-bottom: 2rem;

    .text1{
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        color: #757677;
    }
    a{
        color: #757677;
        text-decoration: none;
        transition: color 0.3s ease-out, text-decoration 0.3s ease-out;

        &:hover{
            color: #ffffff;
            text-decoration: underline;
        }
    }
`;
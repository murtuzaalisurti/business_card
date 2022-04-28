import styled from 'styled-components';

export const StyledFooter = styled.div`
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    .product-hunt-link{
        margin-top: 1rem;
    }
    .product-hunt-link img{
        width: 200px;
        height: 43px;
    }
`;
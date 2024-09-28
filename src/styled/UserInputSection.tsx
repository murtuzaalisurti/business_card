import styled from 'styled-components';

export const UserInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40%;
    padding: 0 0 2rem 1rem;

    #image{
        display: none;
    }
    input, textarea, button, label {
        font-family: 'Poppins', sans-serif;
    }
    input, textarea, button, label, input::placeholder, textarea::placeholder{
        font-size: 0.85rem;
    }

    @media screen and (max-width: 45em){
        width: 85%;
        align-items: center;
        padding: 0;
    }
`;

export const Input = styled.input`
    background-color: #1A1B21;
    color: #ffffff;
    outline: none;
    border: 3px solid transparent;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    width: 85%;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #1A1B21;
    color: #6e6e6e;
    transition: color 0.3s ease-in-out;
    outline: none;
    border: 3px solid transparent;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    cursor: pointer;
    width: 85%;

    > i{
        font-size: 1.5rem;
    }

    &:hover{
        color: #ffffff;
    }
    &.focus{
        border: 3px solid red;
    }
`;

export const Textarea = styled.textarea`
    background-color: #1A1B21;
    color: #ffffff;
    outline: none;
    border: 3px solid transparent;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    width: 85%;
`;

export const Button = styled.button`
    background-color: #ffb681;
    color: #000000;
    padding: 0.7rem 2rem;
    width: fit-content;
    font-size: 1rem;
    outline: none;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    margin-bottom: 2rem;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.3 : 1};

    > i{
        margin-left: 1rem;
    }
    .load{
        transform: rotate(0deg);
        animation: load 1s ease-out infinite both;
    }
    @keyframes load{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    &.for-mobile{
        display: none;
    }

    &:hover{
        background-color: ${props => !props.disabled && '#ffa665'};
        transition: background-color 0.3s ease-in;
    }

    @media screen and (max-width: 45em){
        &.for-mobile{
            display: block;
            margin-top: 2rem;

            .content{
                font-family: 'Poppins', sans-serif;
                
                > i{
                    margin-left: 0.5rem;
                }

                .warn{
                    margin-top: 0.3rem;
                    font-size: 0.6rem;
                    font-style: italic;
                }
            }
        }
        &.for-desktop{
            display: none;
        }
    }
`;

export const ThemesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    gap: 1rem;
    font-size: 0.85rem;
    font-family: 'Poppins', sans-serif;
    background-color: #1A1B21;
    padding: 0.7rem 1rem 1rem 1rem;
    border-radius: 0.4rem;

    @media screen and (max-width: 45em){
        justify-content: center;
        p{
            display: block;
            width: 100%;
            text-align: center;
        }
    }
    
    p{
        color: #6e6e6e;
        margin: 0;
    }
`;

export const SelectTheme = styled.div`
    height: 2rem;
    width: 2rem;
    border: 0.2rem solid transparent;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        box-shadow: 0 0 1rem 0rem #ffb681;
    }
`;
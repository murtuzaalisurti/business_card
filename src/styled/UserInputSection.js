import styled from 'styled-components';

export const UserInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 40%;
    padding: 0 0 2rem 1rem;

    p{
        font-family: 'Inter', sans-serif;
        color: #ffffff;
        margin-top: 1rem;
    }
    #image{
        display: none;
    }
`;

export const Input = styled.input`
    background-color: #1A1B21;
    color: #ffffff;
    outline: none;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
`;

export const Label = styled.label`
    background-color: #1A1B21;
    color: #ffffff;
    outline: none;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
`;

export const Textarea = styled.textarea`
    background-color: #1A1B21;
    color: #ffffff;
    outline: none;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    padding: 0.7rem 1rem;
`;

export const Button = styled.button`
    background-color: #ffb681;
    color: #000000;
    padding: 0.7rem 0.5rem;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    outline: none;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    margin-bottom: 2rem;
    cursor: pointer;
`;
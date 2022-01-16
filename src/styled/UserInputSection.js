import styled from 'styled-components';

export const UserInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 40%;
    padding: 0 0 2rem 1rem;
`;

export const Input = styled.input`
    background-color: #1A1B21;
    outline: none;
    border: 1px solid transparent;
    padding: 0.7rem 1rem;
`;

export const Textarea = styled(Input)``;
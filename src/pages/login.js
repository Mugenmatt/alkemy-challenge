import styled from 'styled-components/macro';

const FormBox = styled.div`
    width: 40%;
    margin: auto;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
`;

const FormTitle = styled.h1`
    margin: 0 0 3% 0;
    font-weight: 500;
`;

const FormData = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Input = styled.input`
    width: 70%;
    border-radius: 20px;
    border: 1px solid #000;
    padding: 2%;
    margin: 3% 0;
    cursor: pointer;
`;

const SendBtn = styled.input`
    width: 40%;
    font-size: 1.5em;
    font-weight: 700;
    border-radius: 20px;
    border: 1px solid #000;
    background-color: #ccc;
    padding: 2%;
    margin: 3% 0;
    cursor: pointer;
    :hover {
        background-color: #000;
        color: #fff;
        border: 1px solid #fff;
    }
`;

export const Login = () => {
    return (
        <FormBox>
            <FormTitle>LOGIN</FormTitle>
            <FormData method="POST" action="" >

                <Input type="text" placeholder="Type here..." />

                <Input type="password" placeholder="Type here..." />

                <SendBtn type="submit" value="ENTER" />

            </FormData>
        </FormBox>
    )
}
import { Redirect } from 'react-router';
import {
    Background,
    FormBox,
    FormTitle,
    ErrorMessage,
    FormData,
    LabelInput,
    Input,
    SendBtn
} from '../assets/styledComponents/styledLogin'

export const Login = (props) => {
    const { handleName, handleEmail, handlePassword, handleSubmit, invalidInput, emptyInput } = props;
    const isLogged = localStorage.getItem('isAuthorized');

    if(isLogged === 'true') {
        return <Redirect to='/' />
    }
    return (

        <>
            <Background></Background>
            <FormBox>

                <FormTitle>LOGIN</FormTitle>
                {emptyInput && <ErrorMessage> Inputs cannot be empty! </ErrorMessage>}
                {invalidInput && <ErrorMessage> Invalid email or password </ErrorMessage>}
                
                <FormData >

                    <LabelInput>Your Name</LabelInput>
                    <Input type="text" placeholder="Type your name here..." onChange={handleName} />

                    <LabelInput>Email</LabelInput>
                    <Input type="text" placeholder="Type your email here..." onChange={handleEmail} />

                    <LabelInput>Password</LabelInput>
                    <Input type="password" placeholder="Type your password here..." onChange={handlePassword} />

                    <SendBtn type="button" onClick={handleSubmit} value="SUBMIT" />

                </FormData>

            </FormBox>
            
        </>
    )
}

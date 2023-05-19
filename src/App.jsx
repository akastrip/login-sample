import './App.css'
import {Button, Input, PasswordInput} from "@mantine/core";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {useEffect, useState} from "react";

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const onSubmit = () => {
        const isCaptchaValid = validateCaptcha(captcha);
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const isValidPassword = regex.test(password);
        const isValidInput = isCaptchaValid && username && isValidPassword;

        if(isValidInput) {
            alert('Login Successful')
        } else {
            alert('Login Failed')
        }
    }

  return (
    <>
        <div className={'login-container'}>
            <Input.Wrapper
                id="input-demo"
                withAsterisk
                label="Username"
                description="Please enter your username"
            >
                <Input id="input-demo" placeholder="Your username" onChange={({ target: { value }}) => setUsername(value)} />
            </Input.Wrapper>
            <PasswordInput
                placeholder="Password"
                label="Password"
                description="Include at least a number and special character. Length between 6 to 16 chars"
                withAsterisk
                onChange={({ target: { value }}) => setPassword(value)}
            />
            <LoadCanvasTemplate />
            <Input.Wrapper
                id="captcha-demo"
                withAsterisk
                label="Captcha"
            >
                <Input id="captcha-input-demo" placeholder="Captcha Input" onChange={({ target: { value }}) => setCaptcha(value)} />
            </Input.Wrapper>
            <Button onClick={onSubmit}>
                Submit
            </Button>
        </div>
    </>
  )
}

export default App

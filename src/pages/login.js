import { Header, Button, Box, Main, Image, Text, TextInput, Label } from "grommet";
import React from "react";
import backgroud from '../assets/background.png';


function Login() {

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const HandleSubmit = () => {
        if (email === 'teste@mail.com' && password === '123456') {

        }
    }

    return (
        <Box style={{
            width: '100vw',
            height: '100vh',
            // maxWidth: '1366px', 
            backgroundImage: `url(${backgroud})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '8%',
            paddingRight: '8%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
            align="center">

            <Box align="center" background={'white'} pad="7%" style={{ borderRadius: '40px' }} gap="large">

                <Text style={{ fontSize: '2rem' }}> Login cartoon </Text>
                <TextInput
                    placeholder="Login"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type={'password'}
                />
                <Button label="Entrar" style={{ backgroundColor: '#ff6978', borderColor: 'transparent' }} onClick={HandleSubmit} />
            </Box>

        </Box>
    );
}

export default Login;

import { Header, Button, Box, Main, Image, Text } from "grommet";
import React from "react";
import backgroud from './assets/background.png';
import content1 from './assets/content1.png';
import icon1 from './assets/Icon 4.png';
import icon2 from './assets/Icon 2.png';
import icon3 from './assets/Icon 3.png';
import icon4 from './assets/Icon.png';


function App() {
  return (
    <>
      <Box style={{
        width: '100vw',
        height: '100vh',
        // maxWidth: '1366px', 
        backgroundImage: `url(${backgroud})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingLeft: '8%',
        paddingRight: '8%'
      }}>

        <Header style={{ marginLeft: '8%', marginRight: '8%', marginTop: '2%' }}>
          <Box direction="row" gap="medium">
            <Button color={'white'}> Caixas </Button>
            <Button color={'white'}> Pontos </Button>
            <Button color={'white'}> Coletas </Button>
          </Box>
          <Box direction="row" gap="medium">
            <Button color={'white'}> Sua cidade </Button>
            <Button color={'white'}> Carrinho </Button>
          </Box>

        </Header>
        <Box align="center" justify="center">
          <img
            src={content1}
            alt=""
            style={{ width: '80vw', marginLeft: '30%', marginTop: '5%' }}
          />
          <Box align="center" justify="center" style={{ marginTop: '-10%' }}>
            <Text size={'4xl'} color={"white"}> Nossas caixas</Text>
            <Text size={'1xl'} color={"white"}> Conhecidas pela qualidade elevada e unica</Text>
            <Text size={'1xl'} color={"white"}> 100% reciclavel</Text>

            <Text size={'1xl'} color={"white"} style={{ marginTop: '8%' }}> Icone seta para baixo</Text>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box align="center" justify="center" style={{ paddingTop: '2%' }}>
          <Text size={"4xl"} style={{ textAlign: 'center' }}> QUEM SOMOS?</Text>
        </Box>

        <Box style={{ marginLeft: '10%', marginTop: '5%' }}>
          <Text> Leite cartoon</Text>
          <Box style={{ marginLeft: '5%', width: '35%' }}>
            <Text style={{ textAlign: 'left' }}>
              Nosso leite é o primeiro produto 100% brasileiro com embalagem de fibra vegeral, você pode ingerir sem culpa alguma :)
            </Text>
          </Box>
        </Box>

        <Box style={{ marginLeft: '10%', marginTop: '5%' }}>
          <Text> Embalagem retprnável</Text>
          <Box style={{ marginLeft: '5%', width: '35%' }}>
            <Text style={{ textAlign: 'left' }}>
              O leite Cartoon é totalmente retornável, ao se digerir a algum dos nossos postos de coleta, você, pagando um valor extremamente inferior, leva uma caixa do zero e acumula pontos pra trocar aqui no site
            </Text>
          </Box>
        </Box>
      </Box>

      <Box align="center" justify="center" style={{ paddingTop: '2%' }} direction="row" gap="10%">
        <img alt="" src={icon1} style={{ width: '100px' }} />
        <img alt="" src={icon2} style={{ width: '100px' }} />
        <img alt="" src={icon3} style={{ width: '80px' }} />
        <img alt="" src={icon4} style={{ width: '100px' }} />
      </Box>

    </>
  );
}

export default App;

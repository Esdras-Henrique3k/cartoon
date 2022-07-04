import React from 'react'
import { Header, Button, Box, Main, Image, Text } from "grommet";
import backgroud from '../assets/background.png';
import cx1 from '../assets/cx1.png';
import cx2 from '../assets/cx2.png';
import '../index.css';
import './index.scss';
import { Link } from "react-router-dom";
function Produtos() {


    return (
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
            <Link to="/">
              <Button color={'white'} label={<Text color={'white'}> Inicio </Text>} />
            </Link>
            <Link to="/coleta">
              <Button color={'white'} label={<Text color={'white'}> Pontos </Text>} />
            </Link>
            <Link to="/parceiros">
              <Button color={'white'} label={<Text color={'white'}> Parceiros </Text>} />
            </Link>
          </Box>
          <Box direction="row" gap="medium">
            <Link to="/login">
              <Button color={'white'} label={<Text color={'white'}> Entrar </Text>} />
            </Link>
            <Link to="/carrinho">
              <Button color={'white'} label={<Text color={'white'}> Carrinho </Text>} />
            </Link>
          </Box>


        </Header>
            <Header>
                <div class="product">
                    {/* <span class="product__price">120</span> */}
                    <img class="product__image" style={{ width: '150px' }} src={cx1} alt="" />
                    <h1 class="product__title">Caixa cartoon</h1>
                    <hr />
                    <p>Caixa suporta 1 litro </p>
                    <a href="#" class="product__btn btn">Comprar</a>
                </div>
                <div class="product">
                    {/* <span class="product__price">$120</span> */}
                    <img class="product__image" style={{ width: '150px' }} src={cx2} alt="" />
                    <h1 class="product__title">Caixa cartoon</h1>
                    <hr />
                    <p>Caixa suporta 1 litro</p>
                    <a href="#" class="product__btn btn">Comprar</a>
                </div>
            </Header>

        </Box >
    )
}

export default Produtos;
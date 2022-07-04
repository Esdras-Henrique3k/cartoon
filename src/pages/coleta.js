import { Header, Button, Box, Main, Image, Text, TextInput, Label } from "grommet";
import React from "react";
import backgroud from '../assets/background.png';

import Swal from 'sweetalert2'

// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet';

import { Link } from "react-router-dom";

import SimpleMap from "./map";
function Coleta() {

    const position = [51.505, -0.09];

    const handleSearch = () => {
        Swal.fire({
            title: 'Erro!',
            text: 'Infelizmente não encontramos pontos de coleta proximo a sua região!',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
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
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center'
        }}
        // align="center"
        >
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

            <SimpleMap />

            <Box align="center" style={{ marginTop: '3%' }}>
                <Button style={{ backgroundColor: '#fff2ed', padding: '1%', borderRadius: '30px' }} onClick={handleSearch}> <Text style={{ color: 'black' }}>Buscar ponto mais proximo de você</Text></Button>
            </Box>


        </Box>
    );
}

export default Coleta;

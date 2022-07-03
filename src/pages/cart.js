import React from 'react'
import { Header, Button, Box, Main, Image, Text } from "grommet";
import backgroud from '../assets/background.png';
import '../index.css';
import cx1 from '../assets/cx1.png';
import cx2 from '../assets/cx2.png';
function Cart() {

    const [qt1, setQtd1] = React.useState(1);
    const [qt2, setQtd2] = React.useState(1);
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
                    <Button color={'white'}> Caixas </Button>
                    <Button color={'white'}> Pontos </Button>
                    <Button color={'white'}> Coletas </Button>
                </Box>
                <Box direction="row" gap="medium">
                    <Button color={'white'}> Sua cidade </Button>
                    <Button color={'white'}> Carrinho </Button>
                </Box>

            </Header>

            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Carrinho</b></h4></div>
                                <div className="col align-self-center text-right text-muted">3 items</div>
                            </div>
                        </div>
                        <div className="row border-top border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img alt="" className="img-fluid" src={cx1} /></div>
                                <div className="col">
                                    <div className="row text-muted">Caixa cartoon</div>
                                    <div className="row">1 Litro</div>
                                </div>
                                <div className="col">
                                    <a onClick={() => setQtd1(qt1 - 1)} style={{ cursor: 'pointer' }}>-</a>
                                    <a className="border">{qt1}</a>
                                    <a onClick={() => setQtd1(qt1 + 1)} style={{ cursor: 'pointer' }}>+</a>
                                </div>
                                <div className="col">R$ 66.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row main align-items-center">
                                <div className="col-2"><img alt="" className="img-fluid" src={cx2} /></div>
                                <div className="col">
                                    <div className="row text-muted">Caixa cartoon</div>
                                    <div className="row">500 ml</div>
                                </div>
                                <div className="col">
                                    <a onClick={() => setQtd2(qt2 + 1)} style={{ cursor: 'pointer' }}>-</a>
                                    <a href="#" className="border">{qt2}</a>
                                    <a onClick={() => setQtd2(qt2 + 1)} style={{ cursor: 'pointer' }}>+</a>
                                </div>
                                <div className="col">R$ 66.00 <span className="close">&#10005;</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Resumo</b></h5></div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: 0 }}>ITEMS 2</div>
                            <div className="col text-right">R$ 132.00</div>
                        </div>
                        <form>
                            <p>Ponto de coleta</p>
                            <select><option className="text-muted">Escolher ponto de coleta</option></select>
                            <p>Troca de pontos</p>
                            <input id="code" placeholder="Quantos pontos quer trocar" />
                        </form>
                        <div className="row" style={{
                            borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'
                        }}>
                            < div className="col" > PREÇO TOTAL</div>
                            <div className="col text-right">R$ 137.00</div>
                        </div>
                        <button className="btn">Encomendar</button>
                    </div>
                </div>

            </div >
        </Box >
    )
}

export default Cart;
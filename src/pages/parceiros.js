import React from 'react'
import { Header, Button, Box, Main, Image, Text } from "grommet";
import backgroud from '../assets/background.png';
import '../index.css';

function Parceiros() {

    const [qt1, setQtd1] = React.useState(1);
    const [qt2, setQtd2] = React.useState(1);
    return (
        <Box style={{
            width: '100vw',
            height: '100%',
            // maxWidth: '1366px', 
            backgroundImage: `url(${backgroud})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
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
            <div class="container">
                <div class=" text-center mt-0 ">

                    <h1 style={{ color: 'white' }}>Parceiros</h1>


                </div>


                <div class="row">
                    <div class="col-lg-7 mx-auto">
                        <div class="card mt-2 mx-auto p-4 bg-light">
                            <div class="card-body bg-light">

                                <div class="container">
                                    <form id="contact-form" role="form">



                                        <div class="controls">

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="form_name">Nome</label>
                                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Nome *" required="required" data-error="Firstname is required." />

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="form_email">Email *</label>
                                                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Email *" required="required" data-error="Valid email is required." />

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label for="form_message">Mensagem *</label>
                                                        <textarea id="form_message" name="message" class="form-control" placeholder="Escreva sua mensagem." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                                        >
                                                    </div>

                                                </div>


                                                <div class="col-md-12">

                                                    <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Vire parcerio" />

                                                </div>

                                            </div>


                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>
            </div>

            <section class="section section-default mt-none mb-none">
                <div class="container">
                    <h2 class="mb-sm" style={{ color: 'white' }}>Nossos Parceiros</h2>
                    <strong>
                        <div class="row">
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Logo_UFMG.png" />
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    {/* <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png" /> */}
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    {/* <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png" /> */}
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    {/* <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png" /> */}
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    {/* <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png" /> */}
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    {/* <img alt="" src="https://www.pmits.co.uk/Portals/0/img/opera3_logo.png" /> */}
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    {/* <img alt="" src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png" /> */}
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="square-holder">
                                    {/* <img alt="" src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg" /> */}
                                </div>
                            </div>
                        </div>
                    </strong>
                </div>
            </section>
        </Box >
    )
}

export default Parceiros;
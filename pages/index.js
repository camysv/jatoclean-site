import Head from "next/head"
import Image from "next/image"
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Home() {
    return (
        <div class="main">
            <Head>
                <title>JatoClean</title>
            </Head>
            <div class="main-top"> 
                <div class="logo shadow-light">
                    <Image src="/jatoclean-logo.svg" layout="fill" />
                </div>
            </div>
            <div class="main-bottom">
                <div class="main-bottom-title-box">
                    <div class="main-bottom-title shadow-light">
                        <p class="text-big">MANTENHA SEU AMBIENTE LIMPO E PROTEGIDO</p>
                        <p class="text-mid">LAVAGEM E HIGIENIZAÇÃO DE CARROS E ESTOFADOS</p>
                    </div>
                </div>
                <div class="main-bottom-images-box">
                    <div class="main-bottom-image-mask">
                        <div class="main-bottom-image">
                            <div class="transparent-layer"></div>
                            <div class="image-text">ESTOFADOS</div>
                            <Image src="/sofa.png" layout="fill"/>
                        </div>
                        <div class="main-bottom-image">
                            <div class="transparent-layer"></div>
                            <div class="image-text">TAPETES</div>
                            <Image src="/tapete.png" layout="fill"/>
                        </div>
                        <div class="main-bottom-image">
                            <div class="transparent-layer"></div>
                            <div class="image-text">CARROS</div>
                            <Image src="/carro.png" layout="fill"/>
                        </div>
                    </div>
                </div>
                <div class="main-bottom-social-box shadow-light">
                    <div class="main-bottom-social-text">
                        <span class="text-mid">
                            ENTRE EM CONTATO CONOSCO E SOLICITE SEU ORÇAMENTO
                        </span>
                    </div>
                    <div class="main-bottom-social-icons">
                        <div class="main-bottom-icons-box">
                            <div class="icon-social" id="facebook" onClick={() => window.open("https://facebook.com/jatocleaneco", '_blank')}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div class="icon-social" id="instagram" onClick={() => window.open("https://instagram.com/jatocleaneco", '_blank')}>
                                <FontAwesomeIcon icon={faInstagram} />  
                            </div>
                            <div class="icon-social" id="whatsapp" onClick={() => window.open("https://bit.ly/jatocleanwpp", '_blank')}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                        </div>
                        <div class="main-bottom-text">
                            <p class="text-mid">LOUVEIRA - SP</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Home
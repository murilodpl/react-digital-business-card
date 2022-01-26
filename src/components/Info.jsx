import profileImg from '../img/profile-img.jpg'
import mailImg from '../img/mail.svg'
import linkedinImg from '../img/linkedin.svg'

export default function Info() {
    return (
        <div className='infoSection'>
            <img width="317px" height="317px" src={profileImg} alt="Imagem de perfil Murilo" />

            <div className="infoContent">
                <h1>Murilo Leopoldino</h1>
                <h2>Frontend Developer</h2>
                <small>mleopoldino.website</small>

                <div className="btnDiv">
                    <a class="btnEmail" href="mailto:mdpleopoldino@gmail.com">
                        <img src={mailImg} alt="Email Icon" />
                        Email
                    </a>

                    <a class="btnLinkedin" href="https://www.linkedin.com/in/murilo-de-paula-leopoldino-a85ba5144/" target="_blank">
                        <img src={linkedinImg} alt="Linkedin Icon" />
                        Linkedin
                    </a>
                </div>
            </div>
        </div>
    )
}
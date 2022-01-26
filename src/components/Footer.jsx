import twitterIcon from "../img/twitterIcon.svg"
import faceIcon from "../img/faceIcon.svg"
import instaIcon from "../img/instaIcon.svg"
import gitIcon from "../img/gitIcon.svg"

export default function Footer() {
    return (
        <footer>
            <a href="https://www.twitter.com/" target="_blank" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter Icon" />
            </a>

            <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                <img src={faceIcon} alt="Facebook Icon" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                <img src={instaIcon} alt="Instagram Icon" />
            </a>

            <a href="https://github.com/murilodpl/" target="_blank" aria-label="GitHub">
                <img src={gitIcon} alt="GitHub Icon" />
            </a>
        </footer>
    )
}
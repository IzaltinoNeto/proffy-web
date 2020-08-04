
import  React  from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


export default function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/61153697?s=60&v=4" alt="avatar" />
                        <div>
                            <strong>Alguem</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                    Dori me Interimo, adapare Dori me Ameno Ameno Latire Latiremo Dori me Ameno Omenare imperavi ameno Dimere, dimere matiro Matiremo
                    <br/><br/>
                    Ameno Omenare imperavi emulari, ameno Omenare imperavi emulari, ameno Ameno dore Ameno dori me Ameno dori me Ameno dom Dori me reo
                    <br></br>
                    Ameno dori me Ameno dori me Dori me am Ameno Omenare imperavi ameno Dimere dimere matiro Matiremo Ameno
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>Entrar em Contato
                        </button>
                    </footer>
                </article>
    );
}
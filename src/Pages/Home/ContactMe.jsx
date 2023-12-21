export default function ContactMe() {
    return <section id="contact" className="contact--section">
        <div className="contact--section_text-container">
            <p className="sub--title">Contact Me</p>
            <h2>Get In Touch</h2>
            <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className="contact--section_info-Container">
        <h3>Contact info</h3>
            <div className="info--container__icon">
                <img className="info--icon" src="./img/envelop.png" alt="email" />
                <a href="mailto:admypung@gmail.com" target="_blank">admypung@gmail.com</a>
            </div>
            <div className="info--container__icon">
                <img className="info--icon" src="./img/phone.png" alt="" />
                <a href="tel:+639984910448" target="_blank">+63998-491-0448</a>
            </div>
            <div className="info--container__icon">
                <img className="info--icon" src="./img/address.png" alt="" />
                <a href="#">Metro Manila, Philippines</a>
            </div>
        </div>
    </section>
}
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="hero--sub-title">Hey, I'm Ayman</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Web Designer</span>{" "}
                        <br />
                        & Developer
                    </h1>
                    <p className="hero--section--description">
                    Skilled web designer and developer with a passion for creating visually appealing and highly functional websites.
                    </p>
                </div>
                <a href="mailto:admypung@gmail.com" className="btn btn-primary">Get In Touch</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero-image-1.png" alt="Hero Section" />
            </div>
        </section>
    )

}
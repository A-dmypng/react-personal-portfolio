import data from "../../data/index.json";

export default function MySKills() {
    return(
        <section className="skills">
            <div className="container">
        <div className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <h2 className="section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product Chain" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </section>
    )
}       
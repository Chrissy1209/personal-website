import sx from "./About.module.sass";

const About = () => {
  return (
    <div className={sx.layout}>
      <div className={sx.container}>
        <div className="title-group">
          <div className={sx.title}>
            <div style={{marginBottom: "15px"}}>
              <h1 style={{margin: 0}}>- My journey -</h1>
            </div>
            <p style={{fontSize: "18px"}}>I'm a Forbes 30 Under 30 creator and entrepreneur dedicated to building technologies and empowering people who are laying the foundation for a Golden Age for humanity.</p>
          </div>
        </div>
        <div className="item-wrapper">
          <div className={sx.item}>
            <div className={sx.imageBox}>
              <img className={sx.image} alt="Maicoin" src="image/item-icon.png" />
            </div>
            <div>
              <div className={sx.heading}>MaiCoin</div>
              <div className={sx.body}>July 2022 - Present</div>
              <div className="text-wrapper">
                <p>Beyond the joy of supporting so many young civic innovators explore their passions and skills, I am grateful for how much time it gave me to explore the roots of civilizational decline and fragility.</p>
                <p></p>
                <p>Given the growing number of existential risks facing Americans and all of humanity, my research has showed me that there may be nothing more important to humanity's long-term flourishing than investing in and building what I call "foundational technologies" that enable hyperlocal resilience, self-sustainability, dynamism, and ecological regeneration.</p>
                <p></p>
                <p>Beyond the joy of supporting so many young civic innovators explore their passions and skills, I am grateful for how much time it gave me to explore the roots of civilizational decline and fragility.</p>
                <p></p>
                <p>Given the growing number of existential risks facing Americans and all of humanity, my research has showed me that there may be nothing more important to humanity's long-term flourishing than investing in and building what I call "foundational technologies" that enable hyperlocal resilience, self-sustainability, dynamism, and ecological regeneration.</p>
              </div>
            </div>
          </div>
          <div className={sx.item}>
            <div className={sx.imageBox}>
              <img className={sx.image} alt="Maicoin" src="image/item-icon.png" />
            </div>
            <div>
              <div className={sx.heading}>MaiCoin</div>
              <div className={sx.body}>July 2022 - Present</div>
              <div className="text-wrapper">
                <p>Beyond the joy of supporting so many young civic innovators explore their passions and skills, I am grateful for how much time it gave me to explore the roots of civilizational decline and fragility.</p>
                <p></p>
                <p>Given the growing number of existential risks facing Americans and all of humanity, my research has showed me that there may be nothing more important to humanity's long-term flourishing than investing in and building what I call "foundational technologies" that enable hyperlocal resilience, self-sustainability, dynamism, and ecological regeneration.</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className={sx.item}>
            <div className={sx.imageBox}>
              <img className={sx.image} alt="Maicoin" src="image/item-icon.png" />
            </div>
            <div>
              <div className={sx.heading}>MaiCoin</div>
              <div className={sx.body}>July 2022 - Present</div>
              <div className="text-wrapper">
                <p>Beyond the joy of supporting so many young civic innovators explore their passions and skills, I am grateful for how much time it gave me to explore the roots of civilizational decline and fragility.</p>
                <p></p>
                <p>Given the growing number of existential risks facing Americans and all of humanity, my research has showed me that there may be nothing more important to humanity's long-term flourishing than investing in and building what I call "foundational technologies" that enable hyperlocal resilience, self-sustainability, dynamism, and ecological regeneration.</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

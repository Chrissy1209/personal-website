// import Item from "../Item"
import { useEffect } from "react";
import sx from "./About.module.sass";

const About = () => {
  const itemData = [{
    id: 'liu',
    name: 'Linköping University',
    date: 'Jul 2023 - Aug 2023',
    text: ''
  }, {
    id: 'maicoin',
    name: 'MaiCoin',
    date: 'Jul 2022 - Jun 2023',
    text: ''
  },{
    id: 'grad-project',
    name: '繫念',
    date: 'Jul 2022 - Jun 2023',
    text: ''
  }, {
    id: 'yzu',
    name: 'Yuan Ze University',
    date: 'Sep 2019 - Sep 2023',
    text: ''
  }];

//   useEffect(() => {
//     const x = () => {
//       itemData.map((e) => {
//         console.log(e.name)
//       })
//     };
//     x();
//   }, []);

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

          {itemData.map((e) => {
            return(
              <div key={e.name} className={sx.item}>
                <div className={sx.imageBox}>
                  <img className={sx.image} alt={e.name} src={`image/item-icon-`+ e.id + `.png`} />
                </div>
                <div>
                  <div className={sx.heading}>{e.name}</div>
                  <div className={sx.body}>{e.date}</div>
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
            );
          })}

          {/* <div className={sx.item}>
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
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default About;

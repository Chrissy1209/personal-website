import Item from "../Item";
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
          {itemData.map((e) => <Item key={e.id} id={e.id} name={e.name} date={e.date} text={e.text} />)}
        </div>
      </div>
    </div>
  );
}

export default About;

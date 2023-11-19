import Item from "../Item";
import sx from "./About.module.sass";

const About = () => {
  const itemData = [{
    id: 'liu',
    name: 'Linköping University',
    link: 'https://liu.se/en',
    date: 'Jul 2023 - Aug 2023',
    text:
      <>
        <p>
          I participated in a summer exchange program in Sweden this past July, where I enrolled in a  <b>Leadership and Organizational Behavior</b> course alongside nearly 30 individuals from 12 different countries.
        </p>
        <p>
          Our Swedish teacher organized a variety of engaging activities and discussions for us, including corporate role-playing. In this exercise, we assumed different roles within a company to gain insights into the internal decision-making process and the significance of communication, both within an organization and between companies.
        </p>
        <p>
          Being part of such a diverse class, I acquired valuable skills in interacting, communicating, and collaborating with people from vastly different cultures. In the final week of the course, (I successfully contributed to a group analysis report on contemporary leadership figures.)
        </p>
      </>
  }, {
    id: 'maicoin',
    name: 'MaiCoin',
    link: 'https://group.maicoin.com',
    date: 'Jul 2022 - Jun 2023',
    text:
      <>
        <p>
          I participated in a summer exchange program in Sweden this past July, where I enrolled in a  <span className={sx.strong}>Leadership and Organizational Behavior</span> course alongside nearly 30 individuals from 12 different countries.
        </p>
        <p>
          Our Swedish teacher organized a variety of engaging activities and discussions for us, including corporate role-playing. In this exercise, we assumed different roles within a company to gain insights into the internal decision-making process and the significance of communication, both within an organization and between companies.
        </p>
        <p>
          Being part of such a diverse class, I acquired valuable skills in interacting, communicating, and collaborating with people from vastly different cultures. In the final week of the course, (I successfully contributed to a group analysis report on contemporary leadership figures.)
        </p>
      </>
  }, {
    id: 'grad-project',
    name: 'Graduation Project《繫念》',
    link: null,
    date: 'Jul 2022 - Jun 2023',
    text:
      <>
        <p>
          I participated in a summer exchange program in Sweden this past July, where I enrolled in a  <span className={sx.strong}>Leadership and Organizational Behavior</span> course alongside nearly 30 individuals from 12 different countries.
        </p>
        <p>
          Our Swedish teacher organized a variety of engaging activities and discussions for us, including corporate role-playing. In this exercise, we assumed different roles within a company to gain insights into the internal decision-making process and the significance of communication, both within an organization and between companies.
        </p>
        <p>
          Being part of such a diverse class, I acquired valuable skills in interacting, communicating, and collaborating with people from vastly different cultures. In the final week of the course, (I successfully contributed to a group analysis report on contemporary leadership figures.)
        </p>
      </>
  }, {
    id: 'yzu',
    name: 'Yuan Ze University',
    link: 'https://infocom.yzu.edu.tw',
    date: 'Sep 2019 - Sep 2023',
    text:
      <>
        <p>
          I participated in a summer exchange program in Sweden this past July, where I enrolled in a  <span className={sx.strong}>Leadership and Organizational Behavior</span> course alongside nearly 30 individuals from 12 different countries.
        </p>
        <p>
          Our Swedish teacher organized a variety of engaging activities and discussions for us, including corporate role-playing. In this exercise, we assumed different roles within a company to gain insights into the internal decision-making process and the significance of communication, both within an organization and between companies.
        </p>
        <p>
          Being part of such a diverse class, I acquired valuable skills in interacting, communicating, and collaborating with people from vastly different cultures. In the final week of the course, (I successfully contributed to a group analysis report on contemporary leadership figures.)
        </p>
      </>
  }];

  return (
    <div className={sx.layout}>
      <div className={sx.container}>
        <div className="title-group">
          <h1 className={sx.title}>- My journey -</h1>
          <p className={sx.subTitle}>I'm a Forbes 30 Under 30 creator and entrepreneur dedicated to building technologies and empowering people who are laying the foundation for a Golden Age for humanity.</p>
        </div>
        <div className="item-wrapper">
          {itemData.map((e) => <Item key={e.id} id={e.id} name={e.name} link={e.link} date={e.date} text={e.text} />)}
        </div>
      </div>
    </div>
  );
}

export default About;

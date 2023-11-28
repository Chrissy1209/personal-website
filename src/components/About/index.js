import Item from "../Item";
import sx from "./About.module.sass";

const links = {
  leadershipFigures: 'https://drive.google.com/file/d/1vh9lmS-SFPL-_R-JAsicbYHWX5nQ9IEi/view?usp=sharing',
  qubic: 'https://www.qubic.market/?gclid=Cj0KCQiAgOefBhDgARIsAMhqXA6mrn45trkttgGmtAGN59SSA6HWlbLfn5A3wmMC872WLBDizE1n7ToaAqVEEALw_wcB'
};

const itemData = [{
  id: 'liu',
  name: 'Linköping University',
  link: 'https://liu.se/en',
  date: 'Jul 2023 - Aug 2023',
  text:
    <>
      <p>
        In July 2023, I participated in a summer exchange program in Sweden, where I enrolled in a <strong>Leadership and Organizational Behavior</strong> course alongside nearly 30 individuals from 12 different countries.
      </p>
      <p>
        I actively engaged a variety of activities and discussions, including treasure hunting and <strong>corporate role-playing</strong>. We assumed different roles within a company to gain insights into the internal decision-making process and the significance of <strong>communication</strong>, both within an organization and between companies.
      </p>
      <p>
        It was an incredibly rewarding experience. Being part of such a diverse class, I acquired valuable skills in <strong>interacting, communicating, and collaborating</strong> with people from vastly different cultures, and succeeded in a group project on <strong><a className={sx.link} href={links.leadershipFigures} target="_blank">Contemporary Leadership Figures</a></strong>.
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
        During my last year of college, I pursued a <strong>frontend/blockchain engineering</strong> internship at MaiCoin, attending daily stand-up, weekly one-on-one sessions, and solving problems through collaborative efforts.
      </p>
      <p>
        - - -
      </p>
      <ul style={{ paddingInlineStart: '2rem' }}>
        <li>
          Established an <strong>admin dashboard</strong> to support daily operations for <strong><a className={sx.link} href={links.qubic} target="_blank">Qubic</a></strong> (an NFT Wallet), managing KYC user list and push notifications using Next.js, TypeScript and Material-UI.
        </li>
        <li>
          Built an <strong>NFT verification platform</strong> for users who want to redeem their NFT by Next.js, Firebase cloud function and GraphQL.
        </li>
        <li>
          Implemented two websites and two landing pages from concept to deployment, standardized outputs with <strong>responsive web design</strong> and <strong>mobile-first</strong> strategy.
        </li>
      </ul>
      <p>
        Eager to apply these experiences in future roles, I look forward to contributing my skills to dynamic projects and further advancing as a frontend engineer.
      </p>
    </>
}, {
  id: 'grad-project',
  name: 'Graduation Project《繫念》',
  link: null,
  date: 'Jul 2022 - Mar 2023',
  text:
    <>
      <p>
        While I worked at MaiCoin, I concurrently managed my graduation project. It was the most fulfilling period as I led a team of 6 and earned the Best Popularity Award.
      </p>
      <p>
        I actively engaged a variety of activities and discussions, including treasure hunting and <strong>corporate role-playing</strong>. I assumed different roles within a company to gain insights into the internal decision-making process and the significance of <strong>communication</strong>, both within an organization and between companies.
      </p>
      <p>
        Being part of such a diverse class, I gained valuable skills in <strong>interacting, communicating, and collaborating</strong> with people from vastly different cultures, and I'm excited to apply these enriched perspectives to future challenges and opportunities.
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
        In July 2023, I participated in a summer exchange program in Sweden, where I enrolled in a <strong>Leadership and Organizational Behavior</strong> course alongside nearly 30 individuals from 12 different countries.
      </p>
      <p>
        I actively engaged a variety of activities and discussions, including treasure hunting and <strong>corporate role-playing</strong>. I assumed different roles within a company to gain insights into the internal decision-making process and the significance of <strong>communication</strong>, both within an organization and between companies.
      </p>
      <p>
        Being part of such a diverse class, I gained valuable skills in <strong>interacting, communicating, and collaborating</strong> with people from vastly different cultures, and I'm excited to apply these enriched perspectives to future challenges and opportunities.
      </p>
    </>
}];

const About = () => {
  return (
    <div className={sx.layout}>
      <div className={sx.container}>
        <div className="title-group">
          <h1 className={sx.title}>- My journey -</h1>
          <p className={sx.subTitle}>
            I'm a recent graduate and passionate frontend engineer with internship experience at MaiCoin, I've successfully contributed to projects, honing both development and project management skills, and looking for new challenges to grow further in technology and coding!
          </p>
        </div>
        <div className="item-wrapper">
          {itemData.map((e) => <Item key={e.id} id={e.id} name={e.name} link={e.link} date={e.date} text={e.text} />)}
        </div>
      </div>
    </div>
  );
}

export default About;

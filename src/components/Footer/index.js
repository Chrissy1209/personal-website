import sx from "./Footer.module.sass";

const links = {
  github: 'https://github.com/Chrissy1209',
  linkedin: 'https://www.linkedin.com/in/chrissy-hsu-999703227/',
  resume: 'https://drive.google.com/file/d/1q8HJRU-pDIwfuEPhGwKoBNqQIJk64Yzi/view?usp=share_link'
};

const Footer = () => {
  return (
    <div className={sx.container}>
      <div className="title-group">
        <h1 className={sx.title}>- Contact me -</h1>
        <p className={sx.subTitle}><strong>You can find me on <a className={sx.link} href={links.resume} target="_blank">my resume</a> or <br /> everywhere below 🚀</strong></p>
        {/* <p className={sx.subTitle}><strong><a className={sx.link} href={links.resume} target="_blank">my resume</a> or <br/>You can find me everywhere below 🚀</strong></p> */}
        {/* <p className={sx.subTitle}><strong>You can find me everywhere below 🚀</strong></p> */}
      </div>
      <div className={sx.mediaGroup}>
        <div>
          <a className={sx.target} href={links.github} target="_blank">
            <img className={sx.image} alt='GitHub' src={`image/media-github.jpeg`} />
          </a>
        </div>
        <div>
          <a className={sx.target} href={links.linkedin} target="_blank">
            <img className={sx.image} alt='LinkedIn' src={`image/media-linkedin.jpeg`} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;
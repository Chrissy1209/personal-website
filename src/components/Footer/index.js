import sx from "./Footer.module.sass";

const Footer = () => {
  return (
    <div className={sx.container}>
      <div className="title-group">
        <h1 className={sx.title}>- Contact me -</h1>
        <p className={sx.subTitle}><strong>You can find me everywhere below 🚀</strong></p>
      </div>
      <div className={sx.mediaGroup}>
        <div>
          <a className={sx.target} href="https://github.com/Chrissy1209" target="_blank">
            <img className={sx.image} alt='GitHub' src={`image/media-github.jpeg`} />
          </a>
        </div>
        <div>
          <a className={sx.target} href="https://github.com/Chrissy1209" target="_blank">
            <img className={sx.image} alt='LinkedIn' src={`image/media-linkedin.jpeg`} />
          </a>
        </div>
      </div>
    </div>
  )
};

export default Footer;
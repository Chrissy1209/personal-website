import sx from "./Header.module.sass";

const Header = () => {
  return (
    <div>
      <header className={sx.container}>
        <div className={sx.gradientText}>
          <p>
            <i>Hi, I'm</i>
            <br />
            <b><span className={sx.title}>CHRISSY HSU</span></b>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;

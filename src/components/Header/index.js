import sx from "./Header.module.sass";

const Header = () => {
  return (
    <div>
      <header className={sx.container}>
        <div className={{}}>
          <p>
            <i>Hi, I'm</i>
            <br />
            <b><span style={{ fontSize: '56px' }}>CHRISSY HSU</span></b>
          </p>
        </div>
      </header>
    </div>
  );
}

export default Header;

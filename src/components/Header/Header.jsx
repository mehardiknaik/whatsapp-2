import logo from "./logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const Text = "WhatsApp-2";
  return (
    <div className={styles.Container}>
      <img src={logo} width={35} height={35} alt="" />
      <div className={styles.text}>
        {[...Text].map((txt,index) => (
          <li key={index}>
            <input type="checkbox" />
            <div>{txt}</div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Header;

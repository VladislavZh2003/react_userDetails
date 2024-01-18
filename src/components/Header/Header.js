import S from "./Header.module.css";

const Header = ({children}) => {
  return <header className={S.header}>{children}</header>;
};

export default Header;

import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";

const Logo = styled.h1`
  background: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    text-transform: none;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

const Header = () => (
  <HeaderStyles>
    <div className="bar">
      <Logo>
        <Link href="/">Hanger</Link>
      </Logo>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <Nav />
  </HeaderStyles>
);

export default Header;

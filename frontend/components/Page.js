import Header from "./Header";

const Page = ({ children }) => (
  <div>
    <Header />
    <h2>I am page component</h2>
    {children}
  </div>
);

export default Page;

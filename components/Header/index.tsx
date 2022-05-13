import Logo from "/public/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="px-4 py-2 bg-blue-500 max-h-16">
      <Logo className="fill-current text-amber-400" />
    </header>
  );
};

export default Header;

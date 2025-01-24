const Footer = () => {
  return (
    <footer className="bg-background-200 text-text-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} AI Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

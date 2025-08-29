const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-2">
          <p className="text-gray-600 text-sm">
            eGestor é desenvolvido por Zipline Tecnologia Ltda.
          </p>
          <p className="text-gray-600 text-sm">
            CNPJ 04.693.497/0001-21
          </p>
          <p className="text-gray-600 text-sm">
            © {currentYear} eGestor - Sistema Online de Gestão Empresarial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
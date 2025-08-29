const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-gray-600 text-sm">
              eGestor é desenvolvido por Zipline Tecnologia Ltda.
            </p>
            <p className="text-gray-600 text-sm">
              CNPJ 04.693.497/0001-21
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-gray-600 text-sm">
              © {currentYear} eGestor - Sistema Online de Gestão Empresarial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
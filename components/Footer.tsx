export default function Footer() {
  return (
    <footer className="bg-charcoal text-softGray py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-montserrat font-bold text-turquoise">
            Sebiche
          </h3>
          <p className="text-sm font-inter mt-2">
            Email: soysebiche@gmail.com
          </p>
          <p className="text-sm font-inter">Phone: +1 (469) 435-4914</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-softGray hover:text-coral">
            LinkedIn
          </a>
          <a href="#" className="text-softGray hover:text-coral">
            GitHub
          </a>
        </div>
        <div className="text-right">
          <p className="text-sm font-inter">
            © 2025 | Built with Next.js & Passion
          </p>
        </div>
      </div>
    </footer>
  );
}
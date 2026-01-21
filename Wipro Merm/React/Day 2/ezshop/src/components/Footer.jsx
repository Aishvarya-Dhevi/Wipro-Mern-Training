import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">EZShop</h3>
          <p className="text-sm">
            Your one-stop destination for fashion and lifestyle products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Support</h3>
          <p className="text-sm">Email: support@ezshop.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2026 EZShop. All rights reserved.
      </div>
    </footer>
  );
}
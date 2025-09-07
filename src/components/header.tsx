import { useState } from 'react'; 
import { 
  ShoppingCart,  
  Leaf, 
  User,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary-500 p-2 rounded-lg ml-3">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">گل سرای آنلاین</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-primary-600">صفحه اصلی</Link>
            <a href="#products" className="text-gray-700 hover:text-primary-600">محصولات</a>
            <Link to="/about" className="text-gray-700 hover:text-primary-600">درباره ما</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">تماس با ما</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-primary-600">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <Link 
              to="/login"
              className="p-2 text-gray-600 hover:text-primary-600"
            >
              <User className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 text-gray-700">صفحه اصلی</Link>
            <a href="#products" className="block py-2 text-gray-700">محصولات</a>
            <Link to="/about" className="block py-2 text-gray-700">درباره ما</Link>
            <Link to="/contact" className="block py-2 text-gray-700">تماس با ما</Link>
            <Link to="/login" className="block py-2 text-gray-700">ورود مدیریت</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;

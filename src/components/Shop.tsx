import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Star, 
  Leaf, 
  Phone, 
  Mail, 
  MapPin,
  User,
  Menu,
  X,
  Filter,
  ChevronDown,
  Truck,
  Shield,
  RefreshCw,
  Award
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  isNew?: boolean;
  isOnSale?: boolean;
  inStock: boolean;
}

interface ShopProps {
  onAdminLogin: () => void;
}

const Shop: React.FC<ShopProps> = ({ onAdminLogin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه محصولات');
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'همه محصولات',
    'گل‌های طبیعی',
    'گیاهان آپارتمانی',
    'کاکتوس و ساکولنت',
    'گیاهان باغچه‌ای',
    'لوازم نگهداری'
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'گل رز قرمز هلندی',
      price: 45000,
      originalPrice: 55000,
      category: 'گل‌های طبیعی',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg',
      description: 'گل رز قرمز زیبا و معطر، مناسب برای هدیه و تزئین',
      isOnSale: true,
      inStock: true
    },
    {
      id: 2,
      name: 'سانسوریا (زبان مادرشوهر)',
      price: 85000,
      category: 'گیاهان آپارتمانی',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1470114/pexels-photo-1470114.jpeg',
      description: 'گیاه آپارتمانی تصفیه کننده هوا، مقاوم و کم نگهداری',
      isNew: true,
      inStock: true
    },
    {
      id: 3,
      name: 'گل آفتابگردان',
      price: 35000,
      category: 'گل‌های طبیعی',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1359291/pexels-photo-1359291.jpeg',
      description: 'گل آفتابگردان شاد و پرانرژی برای فضاهای باز',
      inStock: true
    },
    {
      id: 4,
      name: 'کاکتوس کوچک تزئینی',
      price: 25000,
      category: 'کاکتوس و ساکولنت',
      rating: 4.6,
      reviews: 78,
      image: 'https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg',
      description: 'کاکتوس زیبا و کم نگهداری، مناسب برای دکوراسیون',
      inStock: true
    },
    {
      id: 5,
      name: 'گل لاله رنگارنگ',
      price: 40000,
      originalPrice: 50000,
      category: 'گل‌های طبیعی',
      rating: 4.8,
      reviews: 92,
      image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg',
      description: 'دسته گل لاله با رنگ‌های متنوع و زیبا',
      isOnSale: true,
      inStock: true
    },
    {
      id: 6,
      name: 'پتوس طلایی',
      price: 65000,
      category: 'گیاهان آپارتمانی',
      rating: 4.7,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
      description: 'گیاه آویز زیبا با برگ‌های طلایی رنگ',
      isNew: true,
      inStock: false
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'ارسال رایگان',
      description: 'برای خریدهای بالای ۲۰۰ هزار تومان'
    },
    {
      icon: Shield,
      title: 'ضمانت کیفیت',
      description: 'تضمین سلامت و کیفیت محصولات'
    },
    {
      icon: RefreshCw,
      title: 'بازگشت آسان',
      description: 'امکان بازگشت تا ۷ روز پس از خرید'
    },
    {
      icon: Award,
      title: 'مشاوره رایگان',
      description: 'راهنمایی کامل نگهداری گیاهان'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'همه محصولات' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
  };

  const toggleWishlist = (productId: number) => {
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-full">
              جدید
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full">
              تخفیف
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white px-2 py-1 text-xs rounded-full">
              ناموجود
            </span>
          )}
        </div>
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
        >
          <Heart 
            className={`w-4 h-4 ${wishlistItems.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 mr-2">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary-600">
              {product.price.toLocaleString()} تومان
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={() => addToCart(product.id)}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
              <a href="#" className="text-gray-700 hover:text-primary-600">صفحه اصلی</a>
              <a href="#" className="text-gray-700 hover:text-primary-600">محصولات</a>
              <a href="#" className="text-gray-700 hover:text-primary-600">درباره ما</a>
              <a href="#" className="text-gray-700 hover:text-primary-600">تماس با ما</a>
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
              <button 
                onClick={onAdminLogin}
                className="p-2 text-gray-600 hover:text-primary-600"
              >
                <User className="w-6 h-6" />
              </button>
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
              <a href="#" className="block py-2 text-gray-700">صفحه اصلی</a>
              <a href="#" className="block py-2 text-gray-700">محصولات</a>
              <a href="#" className="block py-2 text-gray-700">درباره ما</a>
              <a href="#" className="block py-2 text-gray-700">تماس با ما</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                زیبایی طبیعت را به خانه‌تان بیاورید
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                مجموعه‌ای منحصر به فرد از گل‌ها و گیاهان طبیعی با کیفیت بالا و قیمت مناسب
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  مشاهده محصولات
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                  مشاوره رایگان
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg"
                alt="گیاهان زیبا"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="جستجو در محصولات..."
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Filter className="w-5 h-5" />
                  فیلترها
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">محدوده قیمت</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="از" className="flex-1 px-3 py-2 border rounded-lg" />
                      <input type="number" placeholder="تا" className="flex-1 px-3 py-2 border rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">امتیاز</label>
                    <select className="w-full px-3 py-2 border rounded-lg">
                      <option>همه امتیازها</option>
                      <option>۵ ستاره</option>
                      <option>۴ ستاره به بالا</option>
                      <option>۳ ستاره به بالا</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">وضعیت</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="ml-2" />
                        <span className="text-sm">موجود</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="ml-2" />
                        <span className="text-sm">تخفیف‌دار</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">محصولات پیشنهادی</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مجموعه‌ای از بهترین گل‌ها و گیاهان با کیفیت عالی و قیمت مناسب
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">محصولی یافت نشد</h3>
              <p className="text-gray-600">لطفاً کلمات کلیدی دیگری امتحان کنید یا فیلترها را تغییر دهید.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">عضویت در خبرنامه</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            از جدیدترین محصولات، تخفیف‌های ویژه و نکات نگهداری گیاهان مطلع شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              عضویت
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primary-500 p-2 rounded-lg ml-3">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">گل سرای آنلاین</h3>
              </div>
              <p className="text-gray-300 mb-4">
                ارائه‌دهنده بهترین گل‌ها و گیاهان طبیعی با کیفیت بالا و خدمات عالی
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 cursor-pointer transition-colors">
                  <span className="text-sm">ت</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 cursor-pointer transition-colors">
                  <span className="text-sm">ا</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 cursor-pointer transition-colors">
                  <span className="text-sm">و</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">لینک‌های مفید</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">درباره ما</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">محصولات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">مشاوره</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">بلاگ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">خدمات مشتریان</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">راهنمای خرید</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">شرایط و قوانین</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">حریم خصوصی</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">پشتیبانی</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">تماس با ما</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 ml-3 text-primary-400" />
                  <span className="text-gray-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 ml-3 text-primary-400" />
                  <span className="text-gray-300">info@flowershop.ir</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 ml-3 text-primary-400" />
                  <span className="text-gray-300">تهران، خیابان ولیعصر</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © ۱۴۰۳ گل سرای آنلاین. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
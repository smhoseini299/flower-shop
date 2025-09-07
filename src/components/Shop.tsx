import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  Star, 
  Filter,
  ChevronDown,
  Truck,
  Shield,
  RefreshCw,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

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

const Shop: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه محصولات');
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const { addToCart } = useCart();

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

  const handleAddToCart = (product: Product) => {
    if (product.inStock) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
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
      <Link to={`/product/${product.id}`}>
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
        </div>
      </Link>
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
      >
        <Heart 
          className={`w-4 h-4 ${wishlistItems.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
        />
      </button>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        </Link>
        
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
          onClick={() => handleAddToCart(product)}
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
                <a href="#products" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  مشاهده محصولات
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                  مشاوره رایگان
                </a>
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
      <section id="products" className="py-12">
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
      <section className="py-16 bg-primary-600" id="contact">
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
    </div>
  );
};

export default Shop;
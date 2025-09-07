import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RefreshCw, 
  Award, 
  ChevronLeft 
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
  longDescription?: string;
  careInstructions?: string;
  isNew?: boolean;
  isOnSale?: boolean;
  inStock: boolean;
  additionalImages?: string[];
}

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
    longDescription: 'گل رز قرمز هلندی با گلبرگ‌های مخملی و رنگ درخشان، یکی از زیباترین و محبوب‌ترین گل‌های دنیا است. این گل نماد عشق و احساسات عمیق بوده و برای مناسبت‌های مختلف از جمله ولنتاین، سالگرد ازدواج و یا هدایای شخصی بسیار مناسب است.',
    careInstructions: 'برای نگهداری گل رز، آن را در گلدانی با آب تمیز و خنک قرار دهید. هر روز آب گلدان را تعویض کنید و از قیچی تیز برای کوتاه کردن ساقه استفاده کنید. دمای مناسب برای گل رز بین ۱۸ تا ۲۲ درجه سانتیگراد است.',
    isOnSale: true,
    inStock: true,
    additionalImages: [
      'https://images.pexels.com/photos/1624766/pexels-photo-1624766.jpeg',
      'https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg'
    ]
  },
  // Add other products from Shop.tsx here
];

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);

  const product = products.find(p => p.id === parseInt(productId || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">محصول مورد نظر یافت نشد</h2>
          <Link 
            to="/" 
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(10, quantity + change)));
  };

  const toggleWishlist = () => {
    setWishlist(!wishlist);
  };

  const addToCart = () => {
    // TODO: Implement actual cart functionality
    alert(`${quantity} عدد ${product.name} به سبد خرید اضافه شد`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center text-gray-600 hover:text-primary-600 mb-6"
        >
          <ChevronLeft className="w-5 h-5 ml-2" />
          بازگشت به فروشگاه
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <img
                src={product.additionalImages?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex gap-4">
              {[product.image, ...(product.additionalImages || [])].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index 
                      ? 'border-primary-600' 
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`تصویر ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <div className="flex items-center">
                  <div className="flex items-center ml-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} نظر)
                  </span>
                </div>
              </div>
              <button 
                onClick={toggleWishlist}
                className="p-2 rounded-full hover:bg-red-50 transition-colors"
              >
                <Heart 
                  className={`w-6 h-6 ${
                    wishlist 
                      ? 'text-red-500 fill-current' 
                      : 'text-gray-400'
                  }`} 
                />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold text-primary-600">
                    {product.price.toLocaleString()} تومان
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through mr-3">
                      {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.isOnSale && (
                  <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full">
                    تخفیف
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                    product.inStock
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-primary-600 ml-3" />
                  <span>ارسال رایگان</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-600 ml-3" />
                  <span>تضمین کیفیت</span>
                </div>
                <div className="flex items-center">
                  <RefreshCw className="w-6 h-6 text-primary-600 ml-3" />
                  <span>بازگشت آسان</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary-600 ml-3" />
                  <span>مشاوره رایگان</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">توضیحات محصول</h2>
              <p className="text-gray-600 mb-6">{product.longDescription || product.description}</p>

              {product.careInstructions && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">نکات نگهداری</h3>
                  <p className="text-gray-600">{product.careInstructions}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

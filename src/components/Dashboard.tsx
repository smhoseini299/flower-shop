import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye, Leaf, Package, Users, TrendingUp, LogOut } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  description: string;
}

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [showAddModal, setShowAddModal] = useState(false);

  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'گل رز قرمز',
      price: 45000,
      category: 'گل طبیعی',
      stock: 25,
      image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg',
      description: 'گل رز قرمز زیبا مناسب برای هدیه'
    },
    {
      id: 2,
      name: 'گیاه سانسوریا',
      price: 85000,
      category: 'گیاه آپارتمانی',
      stock: 15,
      image: 'https://images.pexels.com/photos/1470114/pexels-photo-1470114.jpeg',
      description: 'گیاه آپارتمانی تصفیه کننده هوا'
    },
    {
      id: 3,
      name: 'گل آفتابگردان',
      price: 35000,
      category: 'گل طبیعی',
      stock: 30,
      image: 'https://images.pexels.com/photos/1359291/pexels-photo-1359291.jpeg',
      description: 'گل آفتابگردان شاد و زیبا'
    },
    {
      id: 4,
      name: 'کاکتوس کوچک',
      price: 25000,
      category: 'کاکتوس',
      stock: 40,
      image: 'https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg',
      description: 'کاکتوس زیبا و کم نگهداری'
    }
  ]);

  const categories = ['همه', 'گل طبیعی', 'گیاه آپارتمانی', 'کاکتوس'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'همه' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { title: 'کل محصولات', value: products.length, icon: Package, color: 'bg-blue-500' },
    { title: 'موجودی', value: products.reduce((sum, p) => sum + p.stock, 0), icon: Leaf, color: 'bg-green-500' },
    { title: 'دسته‌بندی‌ها', value: categories.length - 1, icon: Filter, color: 'bg-purple-500' },
    { title: 'فروش امروز', value: '12', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const AddProductModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">افزودن محصول جدید</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">نام محصول</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="نام محصول را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">قیمت (تومان)</label>
            <input
              type="number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="قیمت را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">دسته‌بندی</label>
            <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500">
              {categories.slice(1).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              افزودن
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-primary-500 p-2 rounded-lg ml-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">پنل مدیریت گل سرا</h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <LogOut className="w-5 h-5" />
              خروج
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg ml-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="جستجو در محصولات..."
                  className="w-full pr-10 pl-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
            >
              <Plus className="w-5 h-5" />
              افزودن محصول
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    product.stock > 20 ? 'bg-green-100 text-green-800' :
                    product.stock > 5 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stock} عدد
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold text-primary-600">
                    {product.price.toLocaleString()} تومان
                  </span>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 text-sm bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100">
                    <Eye className="w-4 h-4" />
                    مشاهده
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
                    <Edit className="w-4 h-4" />
                    ویرایش
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100">
                    <Trash2 className="w-4 h-4" />
                    حذف
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">محصولی یافت نشد</h3>
            <p className="text-gray-500">با فیلترهای مختلف جستجو کنید یا محصول جدید اضافه کنید.</p>
          </div>
        )}
      </div>

      {showAddModal && <AddProductModal />}
    </div>
  );
};

export default Dashboard;
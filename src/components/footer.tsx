import React from 'react';
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
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
                            <li><Link to="/about" className="text-gray-300 hover:text-white">درباره ما</Link></li>
                            <li><a href="#products" className="text-gray-300 hover:text-white">محصولات</a></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white">مشاوره</Link></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">بلاگ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">خدمات مشتریان</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">راهنمای خرید</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">شرایط و قوانین</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">حریم خصوصی</a></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white">پشتیبانی</Link></li>
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
    )
}

export default Footer

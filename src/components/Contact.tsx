import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  User, 
  MessageCircle, 
  Clock 
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you'd send this to a backend
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ارتباط با گل سرای آنلاین
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              ما همیشه آماده پاسخگویی به سؤالات و دریافت نظرات شما هستیم. 
              با ما در تماس باشید تا بهترین تجربه را برایتان فراهم کنیم.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">تماس تلفنی</h3>
              <p className="text-gray-600 mb-2">۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="text-gray-600">۰۹۱۲-۳۴۵۶۷۸۹</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">پست الکترونیک</h3>
              <p className="text-gray-600 mb-2">info@flowershop.ir</p>
              <p className="text-gray-600">support@flowershop.ir</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">آدرس</h3>
              <p className="text-gray-600">
                تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                فرم تماس با ما
              </h2>
              <p className="text-gray-600 mb-8">
                لطفاً فرم زیر را پر کنید تا با شما تماس بگیریم. 
                ما حداکثر ظرف ۲۴ ساعت پاسخ شما را خواهیم داد.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-primary-600 ml-3" />
                  <span>ساعات پاسخگویی: شنبه تا چهارشنبه ۹ تا ۱۷</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-primary-600 ml-3" />
                  <span>پاسخگویی سریع و دوستانه</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  نام کامل
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  ایمیل
                </label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  شماره تماس
                </label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="شماره تماس خود را وارد کنید"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  پیام شما
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="پیام خود را بنویسید"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-center">
                  پیام شما با موفقیت ارسال شد. با شما تماس خواهیم گرفت.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            محل ما را در نقشه پیدا کنید
          </h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8716868355!2d51.40830637589638!3d35.689198072508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ffe21a1%3A0xf3b0a0a3a5bf9263!2sVanak%20Square%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1689012345678!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="گل سرای آنلاین - موقعیت مکانی"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Eye, EyeOff, Leaf, User, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin(username, password);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary-500 p-4 rounded-full">
              <Leaf className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">گل سرای آنلاین</h1>
          <p className="text-gray-600">به پنل مدیریت خوش آمدید</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نام کاربری
            </label>
            <div className="relative">
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="نام کاربری خود را وارد کنید"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              رمز عبور
            </label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-12 pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="رمز عبور خود را وارد کنید"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="ml-2 text-primary-600" />
              <span className="text-sm text-gray-600">مرا به خاطر بسپار</span>
            </label>
            <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
              رمز عبور را فراموش کردید؟
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 transition-all duration-200 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'در حال ورود...' : 'ورود'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            حساب کاربری ندارید؟{' '}
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              ثبت نام کنید
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
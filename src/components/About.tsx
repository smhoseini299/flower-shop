import React from 'react';
import { 
  Leaf, 
  Heart, 
  Globe, 
  Award, 
  Users, 
  Target 
} from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'مریم احمدی',
      role: 'بنیانگذار و مدیرعامل',
      image: 'https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg',
      description: 'با بیش از ۱۰ سال تجربه در دنیای گل و گیاه، مریم رویای ایجاد یک فضای سبز و زیبا را محقق کرده است.'
    },
    {
      name: 'علی رضایی',
      role: 'مدیر محصولات',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      description: 'متخصص گیاهان آپارتمانی و مشاور حرفه‌ای نگهداری گیاهان.'
    },
    {
      name: 'سارا کریمی',
      role: 'طراح گل و دکوراسیون',
      image: 'https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg',
      description: 'هنرمند خلاق در طراحی دسته‌گل و چیدمان گیاهان با سلیقه‌ای منحصر به فرد.'
    }
  ];

  const milestones = [
    { year: '۱۳۹۵', event: 'تأسیس گل سرای آنلاین' },
    { year: '۱۳۹۷', event: 'راه‌اندازی فروشگاه اینترنتی' },
    { year: '۱۴۰۰', event: 'دریافت جایزه برترین استارتاپ گل و گیاه' },
    { year: '۱۴۰۲', event: 'گسترش خدمات مشاوره نگهداری گیاهان' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-primary-500 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              گل سرای آنلاین؛ زیبایی طبیعت در خانه شما
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              ما به شما کمک می‌کنیم تا طبیعت را به زندگی خود بیاورید. با بیش از ۸ سال تجربه، 
              ما متعهد به ارائه بهترین گل‌ها، گیاهان و مشاوره‌های تخصصی هستیم.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <Target className="inline-block w-10 h-10 text-primary-600 ml-4" />
                مأموریت ما
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ما باور داریم که گیاهان تنها یک محصول نیستند، بلکه منبع آرامش، زیبایی و سلامت هستند. 
                هدف ما ایجاد ارتباط عمیق بین انسان و طبیعت است. ما تلاش می‌کنیم با ارائه محصولات با کیفیت، 
                مشاوره تخصصی و خدمات پس از فروش، تجربه‌ای لذت‌بخش از نگهداری گیاهان را برای مشتریان خود فراهم کنیم.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-primary-600 ml-3" />
                  <span>کیفیت برتر</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-primary-600 ml-3" />
                  <span>پایداری محیطی</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary-600 ml-3" />
                  <span>مشتری‌مداری</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary-600 ml-3" />
                  <span>نوآوری مداوم</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg" 
                alt="مأموریت ما" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">تیم ما</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              گروهی از متخصصان با عشق به گل و گیاه که هدفشان ارائه بهترین تجربه به مشتریان است.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">داستان ما</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              سفری که از یک علاقه شخصی به یک کسب و کار با ارزش تبدیل شد.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-2xl font-bold text-primary-600 block mb-3">
                  {milestone.year}
                </span>
                <p className="text-gray-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

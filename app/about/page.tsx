import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Users, Target, Heart, Award, Clock, Globe, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About freeimg2convert - Free Online Image Converter',
  description: 'Learn about freeimg2convert, the free online image converter and compressor. Our mission is to provide fast, secure, and easy-to-use image conversion tools.',
  keywords: 'about freeimg2convert, image converter, online tools, free image conversion',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in web technologies and image processing algorithms.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      role: 'UX/UI Designer',
      bio: 'Creative designer focused on user experience and accessibility, ensuring our tools are intuitive for everyone.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      bio: 'Product strategist with a passion for creating tools that solve real-world problems for creators and professionals.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Emily Watson',
      role: 'Graphic Designer',
      content: 'freeimg2convert has become an essential part of my workflow. The quality is excellent and it saves me so much time!',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop'
    },
    {
      name: 'David Kim',
      role: 'Web Developer',
      content: 'Perfect for optimizing images for web. The batch conversion feature is a game-changer for my projects.',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop'
    },
    {
      name: 'Lisa Thompson',
      role: 'Content Creator',
      content: 'Finally, a free image converter that actually works well! No watermarks, no limits, just great results.',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Images Converted', icon: Zap },
    { number: '50K+', label: 'Happy Users', icon: Users },
    { number: '20+', label: 'Supported Formats', icon: Globe },
    { number: '99.9%', label: 'Uptime', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-6">
              About freeimg2convert
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-4">
              Making image conversion simple, fast, and accessible for everyone
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We believe that powerful image conversion tools should be accessible to everyone. 
              Our mission is to provide a fast, secure, and completely free platform where users can convert 
              and compress images without compromising on quality or privacy.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To democratize image conversion technology by providing free, high-quality tools that 
                respect user privacy and deliver professional results. We strive to eliminate barriers 
                between creators and the tools they need to bring their visions to life.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the world's most trusted and user-friendly image conversion platform, 
                empowering millions of creators, developers, and businesses to optimize their visual 
                content effortlessly while maintaining the highest standards of quality and security.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Privacy First</h3>
                <p className="text-gray-600 text-sm">Your images never leave your device. All processing happens locally in your browser.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">User-Centric</h3>
                <p className="text-gray-600 text-sm">Every feature is designed with user experience and accessibility in mind.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">We continuously improve our algorithms and add new features based on user feedback.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Accessibility</h3>
                <p className="text-gray-600 text-sm">Free tools for everyone, regardless of technical expertise or budget constraints.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="prose max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">
                freeimg2convert was born from a simple frustration experienced by our founding team. 
                As developers and designers, we constantly needed to convert images between different formats, 
                but existing solutions were either too expensive, too complicated, or compromised user privacy 
                by uploading images to remote servers.
              </p>
              <p className="mb-4">
                In early 2024, we decided to build the image converter we wished existed: one that would be 
                completely free, respect user privacy, support modern formats, and deliver professional-quality 
                results. After months of development and testing, freeimg2convert was launched.
              </p>
              <p className="mb-4">
                Today, freeimg2convert serves over 50,000 users monthly - from students working on school projects 
                to professional designers optimizing images for major websites. We're proud to be part of their 
                creative journey and continue to evolve based on their feedback and needs.
              </p>
              <p>
                Our commitment remains unchanged: to provide the best free image conversion tools while 
                maintaining the highest standards of privacy, quality, and user experience.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust freeimg2convert for their image conversion needs. 
              Experience the difference of truly free, secure, and high-quality image processing.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Start Converting Images
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
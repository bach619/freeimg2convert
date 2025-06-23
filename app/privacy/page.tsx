import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Eye, Cookie, Database, Users, Mail, Calendar, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - freeimg2convert',
  description: 'Learn how freeimg2convert protects your privacy. We process images locally in your browser and never store your personal data.',
  keywords: 'privacy policy, data protection, GDPR, image privacy, browser processing',
};

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2025';

  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Images and Files',
          text: 'When you use our image conversion service, your images are processed entirely within your browser. We do not upload, store, or have access to your images or files at any time.'
        },
        {
          subtitle: 'Usage Analytics',
          text: 'We may collect anonymous usage statistics such as the number of conversions performed, popular file formats, and general geographic regions (country level only) to improve our service.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect certain technical information including your IP address, browser type, operating system, and device information for security and optimization purposes.'
        },
        {
          subtitle: 'Cookies and Local Storage',
          text: 'We use essential cookies and local storage to remember your preferences (such as conversion history) and ensure the website functions properly.'
        }
      ]
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'To provide and maintain our image conversion service, including processing your images locally in your browser.'
        },
        {
          subtitle: 'Service Improvement',
          text: 'To analyze usage patterns and improve our website performance, user experience, and add new features.'
        },
        {
          subtitle: 'Security',
          text: 'To monitor for and prevent fraudulent activity, abuse, and security threats to our service.'
        },
        {
          subtitle: 'Communication',
          text: 'To respond to your inquiries, provide customer support, and send important service-related notifications.'
        }
      ]
    },
    {
      id: 'data-storage-security',
      title: 'Data Storage and Security',
      icon: Shield,
      content: [
        {
          subtitle: 'Local Processing',
          text: 'All image conversion happens directly in your browser using JavaScript. Your images never leave your device or get uploaded to our servers.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We do not store your images. Any conversion history is stored locally in your browser and can be cleared at any time.'
        },
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures including HTTPS encryption, secure hosting, and regular security audits to protect any data we do collect.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'We may use trusted third-party services for analytics and website functionality. These services are carefully selected and comply with privacy regulations.'
        }
      ]
    },
    {
      id: 'cookies-policy',
      title: 'Cookies and Tracking',
      icon: Cookie,
      content: [
        {
          subtitle: 'Essential Cookies',
          text: 'We use essential cookies that are necessary for the website to function properly, including session management and security features.'
        },
        {
          subtitle: 'Analytics Cookies',
          text: 'We may use analytics cookies to understand how visitors interact with our website. These help us improve user experience and website performance.'
        },
        {
          subtitle: 'Preference Cookies',
          text: 'We store your preferences (such as conversion settings and history) in your browser\'s local storage to enhance your experience.'
        },
        {
          subtitle: 'Cookie Control',
          text: 'You can control cookies through your browser settings. Note that disabling essential cookies may affect website functionality.'
        }
      ]
    },
    {
      id: 'third-party-sharing',
      title: 'Information Sharing',
      icon: Users,
      content: [
        {
          subtitle: 'No Image Sharing',
          text: 'We never share, sell, or transfer your images to any third parties. Your images remain private and are processed only on your device.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We may share anonymous, aggregated usage data with trusted service providers who help us operate and improve our website.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information if required by law, court order, or to protect our rights, property, or safety, or that of others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: FileText,
      content: [
        {
          subtitle: 'Access and Control',
          text: 'You have the right to access, update, or delete any personal information we may have collected about you.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You can request a copy of your data in a machine-readable format, though we collect minimal personal information.'
        },
        {
          subtitle: 'Opt-Out Rights',
          text: 'You can opt out of non-essential data collection and analytics tracking through your browser settings or by contacting us.'
        },
        {
          subtitle: 'Complaint Rights',
          text: 'You have the right to file a complaint with your local data protection authority if you believe we have violated your privacy rights.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFE6E6]">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-800 mb-2">
              Your privacy is our priority
            </p>
            <p className="text-gray-700">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
            </div>
            <div className="prose max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">
                At freeimg2convert, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website 
                and image conversion services.
              </p>
              <p className="mb-4">
                <strong>Key Privacy Principle:</strong> Your images are processed entirely within your browser and never uploaded 
                to our servers. We believe in privacy-by-design and have built our service to minimize data collection while 
                providing excellent functionality.
              </p>
              <p>
                By using our service, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our service.
              </p>
            </div>
          </div>

          {/* Main Sections */}
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={section.id} className="bg-white rounded-lg shadow-sm border p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.subtitle}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* GDPR Compliance */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">GDPR and International Compliance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">European Users (GDPR)</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Right to access your personal data</li>
                  <li>• Right to rectification of inaccurate data</li>
                  <li>• Right to erasure ("right to be forgotten")</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Other Jurisdictions</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• CCPA compliance for California residents</li>
                  <li>• PIPEDA compliance for Canadian users</li>
                  <li>• Local data protection law compliance</li>
                  <li>• Regular policy updates for new regulations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our service is not intended for children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has 
              provided us with personal information, please contact us immediately.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If we discover that a child under 13 has provided us with personal information, we will delete 
              such information from our systems promptly.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Changes to This Privacy Policy</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Posting the updated policy on this page</li>
              <li>Updating the "Last updated" date at the top of this policy</li>
              <li>Providing prominent notice on our website for significant changes</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Your continued use of our service after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please don't hesitate to contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">General Inquiries</h3>
                <p className="text-gray-600 text-sm mb-2">Email: privacy@freeimg2convert.fun</p>
                <p className="text-gray-600 text-sm mb-2">Response time: Within 48 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Data Protection Officer</h3>
                <p className="text-gray-600 text-sm mb-2">Email: dpo@freeimg2convert.fun</p>
                <p className="text-gray-600 text-sm mb-2">For GDPR and data protection matters</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Quick Response Guarantee:</strong> We are committed to addressing your privacy concerns promptly. 
                Most inquiries are resolved within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Scale, Users, Shield, AlertTriangle, FileText, Gavel, Globe, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - freeimg2convert',
  description: 'Read the terms of service for freeimg2convert. Learn about user responsibilities, acceptable use, and our service policies.',
  keywords: 'terms of service, user agreement, acceptable use policy, legal terms',
};

export default function TermsPage() {
  const lastUpdated = 'January 1, 2025';
  const effectiveDate = 'January 1, 2025';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using freeimg2convert ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 13 years old to use this Service. By using the Service, you represent and warrant that you are at least 13 years old and have the legal capacity to enter into this agreement.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service constitutes acceptance of any modifications.'
        }
      ]
    },
    {
      id: 'service-description',
      title: 'Service Description',
      icon: Globe,
      content: [
        {
          subtitle: 'Image Conversion Service',
          text: 'freeimg2convert provides a free, browser-based image conversion and compression service. All processing occurs locally in your browser without uploading images to our servers.'
        },
        {
          subtitle: 'Supported Formats',
          text: 'We support conversion between various image formats including JPG, PNG, WEBP, AVIF, HEIC, GIF, BMP, TIFF, SVG, and others as specified on our website.'
        },
        {
          subtitle: 'Service Availability',
          text: 'While we strive for 99.9% uptime, we do not guarantee uninterrupted access to the Service. We may temporarily suspend the Service for maintenance, updates, or other operational reasons.'
        },
        {
          subtitle: 'Free Service',
          text: 'Our core image conversion service is provided free of charge. We reserve the right to introduce premium features in the future, but basic conversion functionality will remain free.'
        }
      ]
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      icon: Shield,
      content: [
        {
          subtitle: 'Permitted Uses',
          text: 'You may use the Service for lawful purposes only, including personal, educational, and commercial image conversion needs, provided you comply with all applicable laws and regulations.'
        },
        {
          subtitle: 'Prohibited Content',
          text: 'You may not upload, convert, or process images containing illegal content, copyrighted material you do not own, malicious code, or content that violates the rights of others.'
        },
        {
          subtitle: 'Prohibited Activities',
          text: 'You may not attempt to reverse engineer, hack, or compromise the Service; use automated tools to access the Service excessively; or interfere with other users\' access to the Service.'
        },
        {
          subtitle: 'Compliance',
          text: 'You are responsible for ensuring your use of the Service complies with all applicable local, state, national, and international laws and regulations.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: Scale,
      content: [
        {
          subtitle: 'Your Content',
          text: 'You retain all rights to images and content you process through our Service. We do not claim ownership of your images and do not store them on our servers.'
        },
        {
          subtitle: 'Our Service',
          text: 'The Service, including its design, functionality, code, and documentation, is owned by freeimg2convert and protected by copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: 'License to Use',
          text: 'We grant you a limited, non-exclusive, non-transferable license to use the Service for its intended purpose, subject to these Terms of Service.'
        },
        {
          subtitle: 'Trademark Rights',
          text: 'The freeimg2convert name, logo, and related marks are trademarks of freeimg2convert. You may not use these marks without our prior written permission.'
        }
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Users,
      content: [
        {
          subtitle: 'Account Security',
          text: 'While we do not require account creation, you are responsible for maintaining the security of any devices you use to access our Service.'
        },
        {
          subtitle: 'Content Responsibility',
          text: 'You are solely responsible for the images you process through our Service and must ensure you have the right to use and convert such images.'
        },
        {
          subtitle: 'Backup and Storage',
          text: 'You are responsible for maintaining backups of your original images. We are not responsible for any loss of data or images.'
        },
        {
          subtitle: 'Reporting Violations',
          text: 'If you become aware of any violations of these terms or misuse of the Service, please report it to us immediately.'
        }
      ]
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Service Disclaimer',
          text: 'The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.'
        },
        {
          subtitle: 'Limitation of Damages',
          text: 'In no event shall freeimg2convert be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.'
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability to you for all claims arising from or relating to the Service shall not exceed $100 USD or the amount you paid us in the 12 months preceding the claim, whichever is greater.'
        },
        {
          subtitle: 'Force Majeure',
          text: 'We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, or government actions.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Gavel,
      content: [
        {
          subtitle: 'Termination by You',
          text: 'You may stop using the Service at any time. Since we do not store your images or require account creation, simply discontinuing use effectively terminates your access.'
        },
        {
          subtitle: 'Termination by Us',
          text: 'We may terminate or suspend your access to the Service immediately, without prior notice, if you violate these Terms of Service or engage in prohibited activities.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination shall survive, including intellectual property rights and limitation of liability.'
        },
        {
          subtitle: 'Data Retention',
          text: 'Since we do not store your images, termination does not affect any images you have processed. Any locally stored preferences may be cleared from your browser.'
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-800 mb-2">
              Please read these terms carefully before using our service
            </p>
            <div className="text-gray-700 space-y-1">
              <p>Last updated: {lastUpdated}</p>
              <p>Effective date: {effectiveDate}</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
            </div>
            <div className="prose max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">
                Welcome to freeimg2convert. These Terms of Service ("Terms") govern your use of our website 
                and image conversion services. By using our service, you agree to these terms in full.
              </p>
              <p className="mb-4">
                These Terms constitute a legally binding agreement between you and freeimg2convert. 
                Please read them carefully and contact us if you have any questions.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm mb-0">
                  <strong>Important:</strong> By using our service, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
              </div>
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

          {/* Dispute Resolution */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Gavel className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Dispute Resolution</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Informal Resolution</h3>
                <p className="text-gray-600 leading-relaxed">
                  Before pursuing formal dispute resolution, we encourage you to contact us directly to resolve any issues. 
                  Most concerns can be resolved quickly through direct communication.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Binding Arbitration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration 
                  rather than in court, except that you may assert claims in small claims court if your claims qualify.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Class Action Waiver</h3>
                <p className="text-gray-600 leading-relaxed">
                  You agree that any arbitration or proceeding shall be limited to the dispute between us and you individually. 
                  You waive any right to participate in a class action lawsuit or class-wide arbitration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where 
                  freeimg2convert is operated, without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </div>

          {/* Miscellaneous */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Miscellaneous</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Severability</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Entire Agreement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and freeimg2convert.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Assignment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We may assign our rights and obligations under these Terms without your consent. You may not assign your rights without our written consent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Waiver</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">General Inquiries</h3>
                <p className="text-gray-600 text-sm mb-2">Email: legal@freeimg2convert.fun</p>
                <p className="text-gray-600 text-sm mb-2">Subject: Terms of Service Inquiry</p>
                <p className="text-gray-600 text-sm">Response time: Within 48 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Legal Department</h3>
                <p className="text-gray-600 text-sm mb-2">Email: legal@freeimg2convert.fun</p>
                <p className="text-gray-600 text-sm mb-2">For legal and compliance matters</p>
                <p className="text-gray-600 text-sm">Response time: Within 72 hours</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> These Terms of Service are effective as of the date listed above. 
                We recommend checking this page periodically for any updates or changes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
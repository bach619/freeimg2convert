'use client';

interface AdSpaceProps {
  type: 'banner' | 'sidebar' | 'content';
  className?: string;
}

export function AdSpace({ type, className = '' }: AdSpaceProps) {
  const getAdDimensions = () => {
    switch (type) {
      case 'banner':
        return 'h-24 md:h-20';
      case 'sidebar':
        return 'h-64';
      case 'content':
        return 'h-32 md:h-24';
      default:
        return 'h-24';
    }
  };

  const getAdText = () => {
    switch (type) {
      case 'banner':
        return 'Advertisement Space - 728x90';
      case 'sidebar':
        return 'Advertisement Space - 300x250';
      case 'content':
        return 'Advertisement Space - 728x90';
      default:
        return 'Advertisement';
    }
  };

  return (
    <div className={`w-full ${getAdDimensions()} ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-sm font-medium">{getAdText()}</p>
          <p className="text-gray-400 text-xs mt-1">
            {type === 'banner' ? '728 × 90' : type === 'sidebar' ? '300 × 250' : '728 × 90'}
          </p>
        </div>
      </div>
    </div>
  );
}
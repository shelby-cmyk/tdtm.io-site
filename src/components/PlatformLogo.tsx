import mailchimpLogo from 'figma:asset/e148aed7c58b83e6347fc04e671a53f94957b27e.png';
import zohoLogo from 'figma:asset/568f5eae3c46e7b02ff8d17df048baf1a1818efe.png';
import hubspotLogo from 'figma:asset/ac8b4805035fc8ff4797e08e5637d04ad2f85d69.png';
import gohighlevelLogo from 'figma:asset/83c146bbae25add742ba5e7a5880cf36afd0b4f3.png';
import googleAdsLogo from 'figma:asset/3f18f5dbe821ba5dcea859dcafefbc23d6572557.png';
import klaviyoLogo from 'figma:asset/10bd9c3034ceb7a078013f95b977880ed82c38d1.png';
import salesforceLogo from 'figma:asset/48ca5981c7ea774f719368c8073a7d092d02de79.png';
import freshsalesLogo from 'figma:asset/c49e6e8d1fd89e31de987b16e1962cebb0f825c5.png';
import beehiivLogo from 'figma:asset/572b70615b63ea927fe67fef299a9eeae7446eae.png';
import metaLogo from 'figma:asset/73ca50c678c06b7a1736e576b0e2bb13e55121fe.png';

interface PlatformLogoProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export function PlatformLogo({ name, size = "md" }: PlatformLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const platforms: Record<string, { bgColor: string; textColor?: string; content: JSX.Element }> = {
    "Klaviyo": {
      bgColor: "#FFFFFF",
      content: <img src={klaviyoLogo} alt="Klaviyo" className="w-full h-full object-contain p-1.5" />
    },
    "Google Ads": {
      bgColor: "#FFFFFF",
      content: <img src={googleAdsLogo} alt="Google Ads" className="w-full h-full object-contain p-1.5" />
    },
    "Meta": {
      bgColor: "#FFFFFF",
      content: <img src={metaLogo} alt="Meta" className="w-full h-full object-contain p-1.5" />
    },
    "GoHighLevel": {
      bgColor: "#1a3a52",
      content: <img src={gohighlevelLogo} alt="GoHighLevel" className="w-full h-full object-cover rounded-lg" />
    },
    "HubSpot": {
      bgColor: "#FFFFFF",
      content: <img src={hubspotLogo} alt="HubSpot" className="w-full h-full object-contain p-1.5" />
    },
    "Salesforce": {
      bgColor: "#FFFFFF",
      content: <img src={salesforceLogo} alt="Salesforce" className="w-full h-full object-contain p-1.5" />
    },
    "Freshsales": {
      bgColor: "#FFFFFF",
      content: <img src={freshsalesLogo} alt="Freshsales" className="w-full h-full object-contain p-1.5" />
    },
    "Zoho": {
      bgColor: "#FFFFFF",
      content: <img src={zohoLogo} alt="Zoho" className="w-full h-full object-contain p-1" />
    },
    "Mailchimp": {
      bgColor: "#FFE01B",
      content: <img src={mailchimpLogo} alt="Mailchimp" className="w-full h-full object-contain p-1.5" />
    },
    "Beehiiv": {
      bgColor: "#8B5CF6",
      content: <img src={beehiivLogo} alt="Beehiiv" className="w-full h-full object-cover rounded-lg" />
    }
  };

  const platform = platforms[name] || {
    bgColor: "#6B7280",
    content: <span className="text-white" style={{ fontSize: size === 'lg' ? '0.875rem' : '0.75rem', fontWeight: 700 }}>{name.charAt(0)}</span>
  };

  return (
    <div 
      className={`${sizeClasses[size]} rounded-lg flex items-center justify-center shadow-lg`}
      style={{ backgroundColor: platform.bgColor }}
    >
      {platform.content}
    </div>
  );
}

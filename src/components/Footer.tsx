import Image from "next/image";
import Link from "next/link";

const socialIcons = {
  facebook: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
    </svg>
  ),
  instagram: (props: any) => (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <path fill="currentColor" d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.901 4.901 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.901 4.901 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.883.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.975-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.883.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.975-.045-1.505-.207-1.858-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.883-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.975.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.883-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.063A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zM12 15a3 3 0 110-6 3 3 0 010 6zm5.338-7.862a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"/>
    </svg>
  )
};

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image src="/logo.png" alt="We Nailed It Media" width={140} height={56} 
              className="object-contain brightness-0 invert" priority />
            <p className="font-['Gilroy'] text-white/80 text-sm">
              Creating impactful digital experiences through innovative solutions
            </p>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-start space-x-2">
                <LocationIcon />
                <span>19360 Rinaldi St, Los Angeles, CA, United States, California</span>
              </p>
              <p className="flex items-center space-x-2">
                <PhoneIcon />
                <span>+1 626-365-9617</span>
              </p>
              <p className="flex items-center space-x-2">
                <EmailIcon />
                <Link href="mailto:wenaileditmedia@gmail.com" className="hover:text-white transition-colors">
                  wenaileditmedia@gmail.com
                </Link>
              </p>
              <p className="flex items-center space-x-2">
                <WebIcon />
                <Link href="https://wenailedit.media" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-white transition-colors">
                  wenailedit.media
                </Link>
              </p>
              <p className="flex items-center space-x-2">
                <WebIcon />
                <Link href="https://wenaileditmedia.com" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-white transition-colors">
                  wenaileditmedia.com
                </Link>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Anton'] text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              {["Social Media", "Content Creation", "Email Marketing", "Web Development"].map(service => (
                <li key={service}>
                  <Link href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="font-['Gilroy'] hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Anton'] text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {["About", "Works", "Services", "Contact"].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} 
                    className="font-['Gilroy'] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Anton'] text-lg mb-6">Connect</h4>
            <div className="flex space-x-4">
              {Object.entries(socialIcons).map(([name, Icon]) => (
                <Link key={name} href={`https://${name}.com/wenaileditmedia`}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  target="_blank" rel="noopener noreferrer">
                  <div className="text-white/70 hover:text-white/90 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-['Gilroy'] text-gray-400 text-sm">
            © {new Date().getFullYear()} We Nailed It Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="font-['Gilroy'] text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-['Gilroy'] text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const LocationIcon = () => (
  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const WebIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
  </svg>
);

export default Footer;

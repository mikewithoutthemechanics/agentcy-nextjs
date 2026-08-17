'use client';

interface FooterProps {
  openBooking: () => void;
}

export default function Footer({ openBooking }: FooterProps) {
  return (
    <footer className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Agentcy</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We audit, architect, and automate the workflows, AI integrations, and custom tools that remove operational drag for good.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com" target="_blank" className="text-white/50 hover:text-white transition-colors flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path d="M5.40161 2.5C4.48974 2.5 3.75 3.23852 3.75 4.15039C3.75 5.06227 4.48914 5.81787 5.40039 5.81787C6.31164 5.81787 7.052 5.06227 7.052 4.15039C7.052 3.23914 6.31349 2.5 5.40161 2.5ZM13.4595 6.875C12.0726 6.875 11.2791 7.60028 10.8984 8.32153H10.8582V7.06909H8.125V16.25H10.9729V11.7053C10.9729 10.5078 11.0633 9.35059 12.5452 9.35059C14.0058 9.35059 14.0271 10.716 14.0271 11.781V16.25H16.8713H16.875V11.2073C16.875 8.73978 16.3445 6.875 13.4595 6.875ZM3.97705 7.06909V16.25H6.82739V7.06909H3.97705Z" fill="currentColor" />
                </svg>
                LinkedIn
              </a>
              <a href="https://x.com" target="_blank" className="text-white/50 hover:text-white transition-colors flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path d="M3.22449 3.6543L8.22687 10.8033L3.48748 16.3441H5.34909L9.05991 11.9943L12.1029 16.3441H16.9745L11.7422 8.85358L16.1772 3.6543H14.3446L10.9119 7.66391L8.1112 3.6543H3.22449ZM5.93153 5.06427H7.37592L14.2688 14.9341H12.8368L5.93153 5.06427Z" fill="currentColor" />
                </svg>
                X
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="text-white/50 hover:text-white transition-colors flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path d="M7.16797 3.125C4.94873 3.125 3.125 4.94629 3.125 7.16797V12.832C3.125 15.0513 4.94629 16.875 7.16797 16.875H12.832C15.0513 16.875 16.875 15.0537 16.875 12.832V7.16797C16.875 4.94873 15.0537 3.125 12.832 3.125H7.16797ZM7.16797 4.375H12.832C14.3774 4.375 15.625 5.62256 15.625 7.16797V12.832C15.625 14.3774 14.3774 15.625 12.832 15.625H7.16797C5.62256 15.625 4.375 14.3774 4.375 12.832V7.16797C4.375 5.62256 5.62256 4.375 7.16797 4.375ZM13.6914 5.74219C13.3765 5.74219 13.125 5.99365 13.125 6.30859C13.125 6.62353 13.3765 6.875 13.6914 6.875C14.0063 6.875 14.2578 6.62353 14.2578 6.30859C14.2578 5.99365 14.0063 5.74219 13.6914 5.74219ZM10 6.25C7.93701 6.25 6.25 7.93701 6.25 10C6.25 12.063 7.93701 13.75 10 13.75C12.063 13.75 13.75 12.063 13.75 10C13.75 7.93701 12.063 6.25 10 6.25ZM10 7.5C11.3892 7.5 12.5 8.61084 12.5 10C12.5 11.3892 11.3892 12.5 10 12.5C8.61084 12.5 7.5 11.3892 7.5 10C7.5 8.61084 8.61084 7.5 10 7.5Z" fill="currentColor" />
                </svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/" target="_blank" className="text-white/50 hover:text-white transition-colors flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path d="M12.6 4.43368H14.1666V1.78368C13.4081 1.70481 12.6459 1.66586 11.8833 1.66702C9.61663 1.66702 8.06663 3.05035 8.06663 5.58368V7.76702H5.5083V10.7337H8.06663V18.3337H11.1333V10.7337H13.6833L14.0666 7.76702H11.1333V5.87535C11.1333 5.00035 11.3666 4.43368 12.6 4.43368Z" fill="currentColor" />
                </svg>
                Facebook
              </a>
              <a href="https://www.x.com" target="_blank" className="text-white/50 hover:text-white transition-colors flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path d="M3.22449 3.6543L8.22687 10.8033L3.48748 16.3441H5.34909L9.05991 11.9943L12.1029 16.3441H16.9745L11.7422 8.85358L16.1772 3.6543H14.3446L10.9119 7.66391L8.1112 3.6543H3.22449ZM5.93153 5.06427H7.37592L14.2688 14.9341H12.8368L5.93153 5.06427Z" fill="currentColor" />
                </svg>
                Twitter X
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-white/50 text-sm">2026 Agentcy. All rights reserved.</p>
              <div className="mt-4 flex gap-6 text-white/50 text-xs">
                <a href="#about-section" className="hover:text-white transition-colors">About</a>
                <a href="#service-section" className="hover:text-white transition-colors">Services</a>
                <a href="#project-section" className="hover:text-white transition-colors">Projects</a>
                <a href="#pricing-section" className="hover:text-white transition-colors">Pricing</a>
                <a href="#FAQ-section" className="hover:text-white transition-colors">FAQs</a>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">Team</a>
              </li>
            </ul>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="https://agentcy.co.za" target="_blank" className="hover:text-blue-500 transition-colors">agentcy.co.za</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
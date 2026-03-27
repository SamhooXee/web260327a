/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navLinks = [
    { name: "首页", path: "/" },
    { name: "培训班", path: "/training" },
    { name: "会议", path: "/conferences" },
    { name: "历史照片", path: "/gallery" },
    { name: "关于我们", path: "/about" },
    { name: "事件动态", path: "/news" },
    { name: "联系我们", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30 selection:text-primary-fixed">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-primary">Astra Global</Link>
        
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight text-sm uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className={`transition-colors relative ${
                location.pathname === link.path 
                  ? "text-primary after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:text-primary font-headline text-sm uppercase transition-all">
            EN/<span className="text-primary">CN</span>
          </button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-headline font-bold text-sm uppercase active:scale-95 transition-transform hover:bg-primary-fixed-dim">
            立即注册
          </button>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-surface-container-lowest pt-20 pb-10 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-6">Astra Global</div>
            <p className="text-on-surface-variant max-w-xs leading-relaxed">
              通过世界一流的活动，开拓全球合作与星际外交的新前沿。
            </p>
          </div>
          <div>
            <h4 className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-6">资源</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="#" className="hover:text-primary transition-colors">培训</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">会议</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-6">法律</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="#" className="hover:text-primary transition-colors">隐私政策</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">服务条款</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-outline-variant/10 text-center">
          <p className="text-xs text-on-surface-variant">© 2024 Astra Global. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
};

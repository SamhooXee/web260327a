/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useI18n, localeNames, type Locale } from "../i18n";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const { t, locale, setLocale } = useI18n();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.training, path: "/training" },
    { name: t.nav.conferences, path: "/conferences" },
    { name: t.nav.gallery, path: "/gallery" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.news, path: "/news" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const languages: Locale[] = ["zh", "en"];

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
          <div className="relative">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="appearance-none bg-transparent text-on-surface-variant hover:text-primary font-headline text-sm uppercase cursor-pointer transition-all pr-6 border-none outline-none"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {localeNames[lang]}
                </option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
              ▼
            </span>
          </div>
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-on-surface-variant text-sm">
                {t.auth.greeting}, <span className="text-primary font-medium">{user?.name}</span>
              </span>
              <button
                onClick={logout}
                className="text-on-surface-variant hover:text-primary font-headline text-sm uppercase transition-all"
              >
                {t.auth.logout}
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-on-surface-variant hover:text-primary font-headline text-sm uppercase transition-all"
              >
                {t.auth.login}
              </Link>
              <Link
                to="/register"
                className="bg-primary text-on-primary px-6 py-2 rounded-xl font-headline font-bold text-sm uppercase active:scale-95 transition-transform hover:bg-primary-fixed-dim"
              >
                {t.auth.register}
              </Link>
            </>
          )}
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
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-6">{t.footer.resources}</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="#" className="hover:text-primary transition-colors">{t.footer.training}</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">{t.footer.conferences}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-headline font-bold uppercase text-xs tracking-widest mb-6">{t.footer.legal}</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="#" className="hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-outline-variant/10 text-center">
          <p className="text-xs text-on-surface-variant">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

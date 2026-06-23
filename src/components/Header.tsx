import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/courses', label: '课程' },
    { path: '/schedule', label: '学习进程' },
    { path: '/signup', label: '报名' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: 'var(--traeui-background-4)',
        borderBottom: '1px solid var(--traeui-background-3)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 font-display text-2xl"
          style={{
            color: 'var(--traeui-accent-3)',
            textDecoration: 'none',
          }}
        >
          NexaLearn
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm font-medium transition-colors ${
                isActive(item.path) ? 'nav-link-active' : ''
              }`}
              style={{
                textDecoration: 'none',
                color: isActive(item.path)
                  ? 'var(--traeui-accent-3)'
                  : 'var(--traeui-text-paragraph)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/signup"
            className="hidden rounded-full px-6 py-2 text-sm font-semibold transition-opacity hover:opacity-90 md:inline-block"
            style={{
              backgroundColor: 'var(--traeui-accent-3)',
              color: 'var(--traeui-background-1)',
              textDecoration: 'none',
            }}
          >
            立即报名
          </Link>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {mobileMenuOpen ? (
              <X size={24} style={{ color: 'var(--traeui-accent-3)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--traeui-accent-3)' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          className="flex flex-col gap-4 px-6 pb-6 md:hidden"
          style={{ backgroundColor: 'var(--traeui-background-4)' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-base font-medium transition-colors ${
                isActive(item.path) ? 'nav-link-active' : ''
              }`}
              style={{
                textDecoration: 'none',
                color: isActive(item.path)
                  ? 'var(--traeui-accent-3)'
                  : 'var(--traeui-text-paragraph)',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/signup"
            className="mt-2 inline-block rounded-full px-6 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--traeui-accent-3)',
              color: 'var(--traeui-background-1)',
              textDecoration: 'none',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            立即报名
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--traeui-background-1)',
        borderTop: '1px solid var(--traeui-background-3)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-8 text-center lg:px-8">
        <p
          className="font-body"
          style={{
            fontSize: '0.75rem',
            color: 'var(--traeui-text-paragraph)',
          }}
        >
          &copy; 2025 NexaLearn AI Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
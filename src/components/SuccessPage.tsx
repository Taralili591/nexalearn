import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <section
      className="flex w-full items-center justify-center"
      style={{
        backgroundColor: 'var(--traeui-background-1)',
        minHeight: 'calc(100vh - 65px)',
      }}
    >
      <div className="mx-auto max-w-lg px-6 py-20 text-center lg:px-8">
        {/* Green checkmark icon with glow */}
        <div className="mb-8 flex justify-center">
          <svg
            className="checkmark-glow"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle
              cx="48"
              cy="48"
              r="44"
              stroke="var(--traeui-accent-2)"
              strokeWidth="3"
              fill="rgba(149, 255, 141, 0.06)"
            />
            <path
              d="M30 50 L42 62 L66 36"
              stroke="var(--traeui-accent-2)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Success title */}
        <h1
          className="mb-4 font-display"
          style={{
            color: 'var(--traeui-accent-1)',
            fontSize: 'clamp(25.97px, 5vw, 32px)',
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          报名成功
        </h1>

        {/* Description */}
        <p
          className="mb-3 font-body"
          style={{
            color: 'var(--traeui-text-paragraph)',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: 1.4,
          }}
        >
          我们会在开课前发送直播链接。
        </p>

        {/* Additional info */}
        <p
          className="mb-10 font-body"
          style={{
            color: 'var(--traeui-text-paragraph)',
            opacity: 0.7,
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          请留意您的手机短信和邮箱通知。
        </p>

        {/* Back to home button */}
        <Link
          to="/"
          className="btn-outlined inline-block rounded-full px-8 py-3 transition-all"
          style={{
            border: '1.5px solid var(--traeui-accent-2)',
            backgroundColor: 'transparent',
            color: 'var(--traeui-accent-2)',
            fontFamily: 'var(--traeui-font-body)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          返回首页
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--traeui-background-1)' }}
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'var(--traeui-background-1)',
            opacity: 0.3,
          }}
        />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
        <h1
          className="mb-6 font-display"
          style={{
            color: 'var(--traeui-text-on-accent-3)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1,
            fontWeight: 600,
          }}
        >
          加入NexaLearn，让AI真的成为生产力
        </h1>

        <p
          className="mx-auto mb-10 max-w-xl font-body"
          style={{
            color: 'var(--traeui-text-paragraph)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          从文档写作、PPT 生成到任务自动化，学习如何把 AI 真正用进日常学习工作。
        </p>

        <Link
          to="/signup"
          className="glow-effect inline-block rounded-full px-10 py-4 text-base font-semibold transition-all sm:text-lg"
          style={{
            backgroundColor: 'var(--traeui-accent-3)',
            color: 'var(--traeui-text-on-accent-3)',
            textDecoration: 'none',
          }}
        >
          立即报名
        </Link>
      </div>
    </section>
  );
};

export default Hero;
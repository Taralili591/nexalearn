import { Link } from 'react-router-dom';

const timelineItems = [
  {
    date: '6月25日 20:00 - 20:30',
    title: '公开课',
    description: 'AI 高效工作流现场演示，包括报告生成、PPT 制作和自动化任务拆解。',
  },
  {
    date: '第 1 周',
    title: 'Prompt Engineering 与工作场景拆解',
    description: '学习如何把真实工作任务转化为高质量 AI 指令。',
  },
  {
    date: '第 2 周',
    title: 'AI 内容生产与知识整理',
    description: '完成一套个人或团队可复用的内容生产流程。',
  },
  {
    date: '第 3 周',
    title: 'AI 产品原型与自动化流程',
    description: '使用 AI 生成产品页面、流程文档和可开发原型。',
  },
  {
    date: '第 4 周',
    title: '项目展示与证书认证',
    description: '提交一个 AI 实战项目，获得 NexaLearn AI Academy 学习认证。',
  },
];

const Timeline = () => {
  return (
    <section style={{ backgroundColor: 'var(--traeui-background-1)' }}>
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Section Title */}
        <h2
          className="mb-16 text-center font-display"
          style={{
            fontSize: 'clamp(25.97px, 4vw, 32px)',
            color: 'var(--traeui-text-on-accent-3)',
            lineHeight: 1.2,
            fontWeight: 600,
          }}
        >
          清晰紧凑的学习进程
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop: left-aligned, mobile: centered) */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{
              left: '1.25rem',
              width: '2px',
              backgroundColor: 'var(--traeui-accent-2)',
            }}
          />
          <div
            className="absolute top-0 bottom-0 block md:hidden"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              backgroundColor: 'var(--traeui-accent-2)',
            }}
          />

          {/* Timeline Items */}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative mb-10 md:mb-12 md:pl-16"
            >
              {/* Dot (desktop) */}
              <div
                className="absolute hidden md:block"
                style={{
                  left: '0.625rem',
                  top: '1.5rem',
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--traeui-accent-2)',
                  transform: 'translate(-50%, 0)',
                }}
              />
              {/* Dot (mobile) */}
              <div
                className="absolute block md:hidden"
                style={{
                  left: '50%',
                  top: '1.5rem',
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--traeui-accent-2)',
                  transform: 'translate(-50%, 0)',
                }}
              />
              {/* Card */}
              <div
                className="rounded-lg p-6 md:ml-0"
                style={{
                  backgroundColor: 'var(--traeui-background-4)',
                  border: '1px solid var(--traeui-background-3)',
                }}
              >
                <span
                  className="inline-block rounded-full px-3 py-1 font-body"
                  style={{
                    backgroundColor: 'rgba(149, 255, 141, 0.15)',
                    color: 'var(--traeui-accent-2)',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {item.date}
                </span>
                <h3
                  className="mt-3 font-body"
                  style={{
                    color: 'var(--traeui-text-on-accent-3)',
                    fontSize: '16px',
                    lineHeight: 1.4,
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 font-body"
                  style={{
                    color: 'var(--traeui-text-paragraph)',
                    fontSize: '14px',
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/signup"
            className="inline-block rounded-full px-10 py-3 font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--traeui-accent-2)',
              color: 'var(--traeui-background-1)',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            立即报名
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
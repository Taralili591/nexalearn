import { Link } from 'react-router-dom';
import { FileText, Sparkles, LayoutDashboard, Cpu } from 'lucide-react';

const courses = [
  {
    icon: FileText,
    title: 'AI 办公效率课',
    description: '学习用 AI 完成文档写作、会议纪要、邮件回复、PPT 生成和日常任务整理。',
  },
  {
    icon: Sparkles,
    title: 'AI 内容与营销课',
    description: '掌握选题策划、短视频脚本、公众号文章、广告文案和营销活动方案生成。',
  },
  {
    icon: LayoutDashboard,
    title: 'AI 产品与原型课',
    description: '用 AI 完成需求分析、用户故事、产品原型、页面文案和交互流程设计。',
  },
  {
    icon: Cpu,
    title: 'AI Agent 工作流课',
    description: '学习如何搭建可复用的 AI 助手和自动化流程，提升团队协作效率。',
  },
];

const CourseCard = () => {
  return (
    <section
      className="px-6 py-16 lg:px-8 lg:py-24"
      style={{ backgroundColor: 'var(--traeui-background-1)' }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Title */}
        <h2
          className="mb-12 text-center font-display lg:mb-16"
          style={{
            fontSize: 'clamp(25.97px, 4vw, 32px)',
            fontWeight: 600,
            color: 'var(--traeui-accent-1)',
            lineHeight: 1.2,
          }}
        >
          为不同角色设计的 AI 实战课程
        </h2>

        {/* Course Cards Grid: 2x2 on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transition-all duration-200 lg:p-8 cursor-pointer"
              style={{
                backgroundColor: 'var(--traeui-background-4)',
                border: '1px solid var(--traeui-background-3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--traeui-accent-2)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(149, 255, 141, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--traeui-background-3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: 'rgba(149, 255, 141, 0.1)',
                }}
              >
                <course.icon
                  size={24}
                  style={{ color: 'var(--traeui-accent-2)' }}
                />
              </div>
              {/* Title */}
              <h3
                className="mb-2 font-body"
                style={{
                  fontSize: '25.97px',
                  fontWeight: 400,
                  color: 'var(--traeui-accent-1)',
                  lineHeight: 0.9,
                }}
              >
                {course.title}
              </h3>
              {/* Description */}
              <p
                className="font-body"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--traeui-text-paragraph)',
                  lineHeight: 1.4,
                }}
              >
                {course.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center lg:mt-16">
          <Link
            to="/signup"
            className="inline-block rounded-full px-8 py-3 font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--traeui-accent-2)',
              color: 'var(--traeui-text-on-accent-3)',
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

export default CourseCard;
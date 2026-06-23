import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  phone: string;
  email: string;
  school: string;
  major: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  school?: string;
  major?: string;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    school: '',
    major: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 姓名：2-20字符
    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    } else if (formData.name.trim().length < 2 || formData.name.trim().length > 20) {
      newErrors.name = '姓名长度应为2-20字符';
    }

    // 手机号：11位数字，符合中国手机号格式
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入手机号';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = '请输入正确的11位手机号';
    }

    // 邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '请输入正确的邮箱格式';
    }

    // 学校：2-50字符
    if (!formData.school.trim()) {
      newErrors.school = '请输入学校';
    } else if (formData.school.trim().length < 2 || formData.school.trim().length > 50) {
      newErrors.school = '学校名称长度应为2-50字符';
    }

    // 专业：2-50字符
    if (!formData.major.trim()) {
      newErrors.major = '请输入专业';
    } else if (formData.major.trim().length < 2 || formData.major.trim().length > 50) {
      newErrors.major = '专业名称长度应为2-50字符';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 清除对应字段的错误
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 构建表单数据（支持 Netlify Forms）
    const submitData = new FormData();
    submitData.append('form-name', 'signup');
    submitData.append('name', formData.name);
    submitData.append('phone', formData.phone);
    submitData.append('email', formData.email);
    submitData.append('school', formData.school);
    submitData.append('major', formData.major);

    try {
      // 提交到 Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(submitData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        // 同时保存到 localStorage（本地备份）
        const signupData = {
          ...formData,
          submittedAt: new Date().toISOString(),
        };
        const existingData = localStorage.getItem('nexalearn_signups');
        const signups = existingData ? JSON.parse(existingData) : [];
        signups.push(signupData);
        localStorage.setItem('nexalearn_signups', JSON.stringify(signups));

        // 跳转到成功页面
        navigate('/success');
      } else {
        // Netlify 失败时回退到本地存储
        console.warn('Netlify Forms 提交失败，使用本地存储');
        const signupData = {
          ...formData,
          submittedAt: new Date().toISOString(),
        };
        const existingData = localStorage.getItem('nexalearn_signups');
        const signups = existingData ? JSON.parse(existingData) : [];
        signups.push(signupData);
        localStorage.setItem('nexalearn_signups', JSON.stringify(signups));
        navigate('/success');
      }
    } catch (error) {
      console.error('提交失败:', error);
      // 网络失败时回退到本地存储
      const signupData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };
      const existingData = localStorage.getItem('nexalearn_signups');
      const signups = existingData ? JSON.parse(existingData) : [];
      signups.push(signupData);
      localStorage.setItem('nexalearn_signups', JSON.stringify(signups));
      navigate('/success');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    backgroundColor: 'var(--traeui-background-1)',
    border: '1px solid var(--traeui-background-3)',
    color: 'var(--traeui-accent-1)',
    padding: '12px 16px',
    fontFamily: 'var(--traeui-font-body)',
    fontSize: '14px',
  };

  const errorStyle = {
    color: '#ff6b6b',
    fontSize: '12px',
    marginTop: '4px',
  };

  return (
    <section
      className="relative flex w-full items-center justify-center"
      style={{
        backgroundColor: 'var(--traeui-background-1)',
        minHeight: 'calc(100vh - 200px)',
      }}
    >
      <div className="mx-auto w-full max-w-lg px-6 py-16 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2
            className="mb-4 font-display"
            style={{
              color: 'var(--traeui-accent-1)',
              fontSize: 'clamp(25.97px, 4vw, 32px)',
              lineHeight: 1.2,
              fontWeight: 600,
            }}
          >
            填写信息，立即报名
          </h2>
          <p
            className="font-body leading-relaxed"
            style={{
              color: 'var(--traeui-text-paragraph)',
              fontSize: '14px',
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            填写信息后，我们将在开课前通过短信或邮件发送直播链接。
          </p>
        </div>

        {/* Form Card */}
        <div
          className="rounded-lg p-6 sm:p-8"
          style={{
            backgroundColor: 'var(--traeui-background-4)',
            border: '1px solid var(--traeui-background-3)',
          }}
        >
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* 姓名 */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="font-body"
                style={{
                  color: 'var(--traeui-accent-1)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="请输入您的姓名"
                className="form-input w-full rounded-[5px] px-4 py-3"
                style={inputStyle}
                disabled={isSubmitting}
              />
              {errors.name && <span style={errorStyle}>{errors.name}</span>}
            </div>

            {/* 手机号 */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="font-body"
                style={{
                  color: 'var(--traeui-accent-1)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                手机号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="请输入手机号码"
                className="form-input w-full rounded-[5px] px-4 py-3"
                style={inputStyle}
                disabled={isSubmitting}
              />
              {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
            </div>

            {/* 邮箱 */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-body"
                style={{
                  color: 'var(--traeui-accent-1)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                邮箱
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="请输入邮箱地址"
                className="form-input w-full rounded-[5px] px-4 py-3"
                style={inputStyle}
                disabled={isSubmitting}
              />
              {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </div>

            {/* 学校 */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="school"
                className="font-body"
                style={{
                  color: 'var(--traeui-accent-1)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                学校
              </label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="请输入所在学校"
                className="form-input w-full rounded-[5px] px-4 py-3"
                style={inputStyle}
                disabled={isSubmitting}
              />
              {errors.school && <span style={errorStyle}>{errors.school}</span>}
            </div>

            {/* 专业 */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="major"
                className="font-body"
                style={{
                  color: 'var(--traeui-accent-1)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                专业
              </label>
              <input
                type="text"
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                placeholder="请输入所学专业"
                className="form-input w-full rounded-[5px] px-4 py-3"
                style={inputStyle}
                disabled={isSubmitting}
              />
              {errors.major && <span style={errorStyle}>{errors.major}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="glow-effect mt-2 w-full rounded-full py-3.5 text-base font-semibold disabled:opacity-50"
              style={{
                backgroundColor: 'var(--traeui-accent-2)',
                color: 'var(--traeui-background-1)',
                fontFamily: 'var(--traeui-font-body)',
                fontWeight: 600,
                border: 'none',
                fontSize: '16px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : '提交报名'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
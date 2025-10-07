'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 头像 */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
              <Image
                src="/avatar.jpg"
                alt="姚思雨"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
          <span className="inline-block animate-fade-in-up">你好，我是</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-fade-in-up animation-delay-200">
            姚思雨
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-up animation-delay-400">
          前端开发者 · AI创作者 · 技术探索者
        </p>

        {/* 简介 */}
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-600">
          5年+前端开发经验，专注于现代Web技术与AI应用融合
          <br />
          让技术不仅服务产品，也能创造价值
        </p>

        {/* CTA按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            联系我
          </a>
          <a
            href="#achievements"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-200 dark:border-slate-700"
          >
            查看成就
          </a>
        </div>

        {/* 标签 */}
        <div className="mt-16 flex flex-wrap gap-3 justify-center animate-fade-in-up animation-delay-1000">
          {['React', 'Vue', 'TypeScript', 'Next.js', 'AI应用', 'Node.js'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

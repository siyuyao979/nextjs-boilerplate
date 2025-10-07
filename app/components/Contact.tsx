'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            联系我
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg">
            期待与你交流合作
          </p>
        </div>

        {/* 联系卡片 */}
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12">
            <div className="text-center space-y-8">
              {/* 微信 */}
              <div className="inline-block">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-6xl">💬</div>
                    <div className="text-white">
                      <div className="text-sm font-semibold mb-2 opacity-90">微信号</div>
                      <div className="text-2xl font-bold">duoxiduofu1128</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 说明文字 */}
              <div className="max-w-md mx-auto">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  如果你对以下方面感兴趣，欢迎添加微信交流：
                </p>
                <ul className="mt-6 space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">✨</span>
                    <span className="text-slate-700 dark:text-slate-300">前端技术交流与合作</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl">✨</span>
                    <span className="text-slate-700 dark:text-slate-300">AI 应用开发与创作</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl">✨</span>
                    <span className="text-slate-700 dark:text-slate-300">项目合作机会</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✨</span>
                    <span className="text-slate-700 dark:text-slate-300">技术咨询与经验分享</span>
                  </li>
                </ul>
              </div>

              {/* 社交链接 */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">也可以在这些平台找到我</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                    📱 小红书
                  </div>
                  <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                    🎵 抖音
                  </div>
                  <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                    🐟 闲鱼
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <footer className="mt-20 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm">
            © 2025 姚思雨. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </footer>
      </div>
    </section>
  );
}

'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            关于我
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 左侧：个人信息 */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">💡</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    我是谁
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    大家好，我是 <span className="font-semibold text-blue-600">姚思雨</span>，1997 年出生，来自黑龙江，目前在北京发展。
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                    一名拥有 <span className="font-semibold text-purple-600">5 年以上前端开发经验</span> 的程序员，专注于现代 Web 技术与 AI 应用融合。
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
                    我热衷于探索 AI 赋能个人创作与商业变现的路径，让技术不仅服务产品，也能创造价值。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏙</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    所在城市
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="font-semibold text-blue-600">北京</span>——一个让我不断学习、实践与破局的地方。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：技能概述 */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="text-2xl font-bold mb-4">我的技能</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="leading-relaxed">
                      精通 <span className="font-semibold">React、Vue、TypeScript</span> 等现代前端技术栈，具备扎实的工程化思维与项目落地经验。
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="leading-relaxed">
                      熟悉 <span className="font-semibold">AI 辅助开发、AI 应用构建</span> 及内容创作，能够将技术与场景结合，探索更多创新模式。
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="leading-relaxed">
                      持续关注 <span className="font-semibold">AI 教育、数字人、智能体</span> 等前沿方向。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                5+ 年经验
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                全栈开发
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                AI 应用
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

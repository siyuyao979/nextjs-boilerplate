'use client';

export default function Achievements() {
  const achievements = [
    {
      year: '2024',
      title: '加入「破局」社区',
      icon: '🚀',
      description: '积极参与多次行动项目（AI拆书、小红书虚拟资料、数字人、智能体、AI教育等），积累了丰富的 AI 实践经验。',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2024',
      title: 'AI代写服务起步',
      icon: '✍️',
      description: '自学 AI代写，并在淘宝平台成功接单，完成多个项目，初步实现个人变现。',
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2024.5-6',
      title: '首次变现突破',
      icon: '💰',
      description: '通过 AI代写 服务累计收入超 3000 元，与团队协作完成多单，积累了交付与客户沟通经验。',
      color: 'from-green-500 to-emerald-500',
    },
    {
      year: '2024.8-2025.2',
      title: 'AI 教育内容创作',
      icon: '📚',
      description: '独立制作 AI 少儿英语教学视频 100+，在抖音涨粉 1000+，小红书涨粉 700+，探索 AI 教育内容方向。',
      color: 'from-orange-500 to-red-500',
    },
    {
      year: '2025',
      title: '规模化商业突破',
      icon: '🎯',
      description: '全面开展个人 AI 代写业务，在闲鱼上与 100 位毕业季合作伙伴合作，独立完成项目对接与交付，涵盖论文代写、降重、答辩PPT、答辩稿等服务，累计变现超 3 万元。',
      color: 'from-indigo-500 to-purple-500',
      highlight: true,
    },
    {
      year: '2024-2025',
      title: '线下活动与社群',
      icon: '🤝',
      description: '多次参与破局线下活动与大会，结识了众多优秀创作者与AI从业者，拓展了AI应用视野。',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            我的成就
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg">
            从前端开发者到AI创作者的成长之路
          </p>
        </div>

        {/* 成就时间线 */}
        <div className="relative">
          {/* 中间的线 */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {/* 成就卡片 */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 卡片 */}
                <div className="w-full md:w-5/12">
                  <div
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                      achievement.highlight ? 'ring-4 ring-purple-500/50' : ''
                    }`}
                  >
                    {/* 标题区域 */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`text-4xl w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg`}
                      >
                        <span className="text-white">{achievement.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">
                          {achievement.year}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>

                    {/* 描述 */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* 高亮标记 */}
                    {achievement.highlight && (
                      <div className="mt-4 inline-block">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                          重要里程碑
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 中间的圆点 */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 border-purple-500 shadow-lg z-10"></div>
                </div>

                {/* 占位 */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 总结 */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-xl md:text-2xl font-bold mb-3">
              🎉 从前端开发者到 AI 创作者
            </p>
            <p className="text-lg text-white/90">
              这些经历让我成长为一名<span className="font-bold">懂技术、懂AI、懂商业</span>的复合型创造者
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

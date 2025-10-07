'use client';

export default function Skills() {
  const skills = [
    {
      category: '前端技术',
      icon: '💻',
      items: [
        { name: 'React', level: 95 },
        { name: 'Vue', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'AI 相关',
      icon: '🤖',
      items: [
        { name: 'AI 辅助开发', level: 85 },
        { name: 'AI 应用构建', level: 80 },
        { name: 'Prompt Engineering', level: 88 },
        { name: 'AI 内容创作', level: 85 },
      ],
    },
    {
      category: '其他技能',
      icon: '🛠',
      items: [
        { name: 'Node.js', level: 80 },
        { name: 'Git', level: 90 },
        { name: '工程化', level: 85 },
        { name: '项目管理', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            技能专长
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg">
            持续精进技术，探索创新可能
          </p>
        </div>

        {/* 技能卡片 */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${groupIndex * 100}ms` }}
            >
              {/* 分类标题 */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{skillGroup.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>

              {/* 技能列表 */}
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: 'slideIn 1s ease-out',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl">
            <p className="text-lg md:text-xl font-medium">
              💪 <span className="font-bold">持续学习</span> · 不断精进 · 拥抱变化
            </p>
            <p className="mt-3 text-white/80">
              技术栈持续更新中，保持对新技术的好奇心和学习热情
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

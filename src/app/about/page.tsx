import {
  Brain,
  Clock,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto text-center border-b border-gray-100">
        <div className="inline-block px-3.5 py-1 bg-white border border-gray-300 text-black text-[11px] font-bold tracking-widest uppercase rounded-[6px] mb-8">
          О ПЛАТФОРМЕ ZERDE
        </div>

        <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tight text-black">
        Будущее образования Казахстана
        </h2>
        
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          <strong className="text-black font-semibold">ZERDE</strong> — AI-платформа, разработанная{' '}
          <strong className="text-black font-semibold">QYZPU</strong> (Казахским национальным женским
          педагогическим университетом) для подготовки школьников к ЕНТ с
          использованием технологий искусственного интеллекта.
        </p>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-8 bg-white rounded-[6px] border border-gray-200 hover:border-black transition-colors duration-200 space-y-6">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-[6px] flex items-center justify-center text-black">
              <Clock className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-extrabold uppercase text-black tracking-tight">
              Симулятор ЕНТ
            </h3>
            <p className="text-gray-500 text-base leading-relaxed ">
              Формат тестирования полностью повторяет структуру ЕНТ: 40 тестовых
              вопросов по Истории Казахстана, Математике и Грамотности чтения с
              70-минутным отсчетом.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-white rounded-[6px] border border-gray-200 hover:border-black transition-colors duration-200 space-y-6">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-[6px] flex items-center justify-center text-black">
              <Brain className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-black uppercase text-black tracking-tight">
              <span className="font-sans font-[900] inline-block pr-1">AI</span> 
              АССИСТЕНТ
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              Наш AI-помощник анализирует ошибочные ответы, мгновенно генерирует
              подробные пояснения и помогает ликвидировать пробелы в сложных
              темах.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-white rounded-[6px] border border-gray-200 hover:border-black transition-colors duration-200 space-y-6">
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-[6px] flex items-center justify-center text-black">
              <BarChart3 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-extrabold uppercase text-black tracking-tight">
              Трекинг прогресса
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              Сохранение истории всех попыток сдач, динамика баллов по каждому
              предмету и наглядный процент правильных ответов для отслеживания
              успеха.
            </p>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[6px] border border-gray-200 p-8 lg:p-14 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-white border border-gray-300 text-black text-[11px] font-bold tracking-widest uppercase rounded-[6px]">
                МИССИЯ ПРОЕКТА
              </div>

              <h2 className="text-3xl lg:text-5xl font-black uppercase leading-tight text-black tracking-tight">
                Доступное образованиедля каждого
              </h2>

              <p className="text-gray-500 leading-relaxed text-base">
                Мы верим, что ключ к поступлению на грант — это систематическая
                практика и объективная самопроверка. Платформа{' '}
                <strong className="text-black font-semibold">ZERDE</strong> предоставляет современные
                инструменты, актуальные тесты и качественные учебные материалы
                для подготовки к ЕНТ.
              </p>

              <div className="pt-4 space-y-3">
                {[
                  'Актуальные базы вопросов и варианты тестов',
                  'Мгновенный подсчет баллов и разбор ошибок',
                  'Удобный доступ с любого устройства',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black stroke-[2] flex-shrink-0" />
                    <span className="text-black text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card (Technical Dark Box) */}
            <div className="flex justify-center">
              <div className="bg-black text-white rounded-[6px] p-8 lg:p-10 max-w-md w-full border border-black space-y-8">
                <div>
                  <p className="text-gray-500 text-[11px] font-mono uppercase tracking-widest">
                    КОНЦЕПЦИЯ / ZERDE
                  </p>

                  <h3 className="mt-4 text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                    «ZERDE» — Пайым, <br />
                    <span className="text-gray-500">Парасат, Өрлеу</span>
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed font-normal border-t border-gray-900 pt-6">
                  В казахском языке слово{' '}
                  <strong className="text-white font-medium">«Зерде»</strong> означает
                  разум, мудрость и стремление к знаниям. Именно эти ценности
                  лежат в основе нашей платформы.
                </p>

                <div className="pt-4 flex justify-between items-center text-xs font-mono text-gray-400 border-t border-gray-900">
                  <span>ПОДГОТОВКА К ЕНТ</span>
                  <span className="px-2.5 py-1 border border-gray-800 text-gray-300 rounded-[4px]">
                    2026 ZERDE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
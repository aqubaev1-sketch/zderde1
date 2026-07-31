// import Image from "next/image";

export default function Home() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl ">
          
          {/* Үлкен тақырып (Space Grotesk шрифті қолданылады) */}
          <h1 className="text-4xl text sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#1b1b1b] leading-[1.05] font-['Space_Grotesk',sans-serif] mb-6">
            Учись. <br />
            Строй. <br />
            Масштабируй.
          </h1>

          {/* Сипаттама мәтіні */}
          <p className="text-[#6a7282] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-['Inter',sans-serif]">
            Интерактивные видеолекции, практические работы, автоматические ИИ-квизы и детальная аналитика вашего прогресса. Всё в одном месте.
          </p>

        </div>
      </div>
    </section>
  );
}

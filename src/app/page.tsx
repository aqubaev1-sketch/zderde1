// import Image from "next/image";
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { ArrowRight } from "lucide-react";
import Timer from './components/taimer/Timer';

export default function Home() {
  return (
    <>
    <section className="py-12 md:py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl ">
          
          {/* Үлкен тақырып (Space Grotesk шрифті қолданылады) */}
          <h1 className="text-4xl text sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#1b1b1b] leading-[1.05] font-['Space_Grotesk',sans-serif] mb-6">
            Учись. <br />
            ПРАКТИКУЙСЯ. <br />
            ЗАБИРАЙ ГРАНТ.
          </h1>

          {/* Сипаттама мәтіні */}
          <p className="text-[#6a7282] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-['Inter',sans-serif]">
            AI-агент выявит ваши пробелы в знаниях, подберет персональные квизы и поможет сэкономить сотни часов подготовки.
          </p>

        </div>
      </div>
    </section>


   <section>
    <Timer/>
   </section>
   <section className="py-24 bg-gray-50 ">
  <div className="max-w-7xl mx-auto px-6 sm:px-8">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 text-gray-600 text-xs font-semibold tracking-wide uppercase rounded-md">
        
        <span>Бесплатный практикум квизов</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
        Готовы проверить свои знания?
      </h2>
      
      <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
        ZERDE — образовательная платформа нового поколения,объединяющая структурированные практические задания,интеллектуальную аналитику и AI-помощника для эффективной подготовки к ЕНТ.
      </p>
      
      <div className="pt-4">
        <Link
          href="/testEnt"
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold uppercase tracking-wider text-sm hover:bg-gray-800 motion-safe:transition-colors rounded-md shadow"
        >
          <span>Перейти в практикум</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
       
      </div>
    </div>
  </div>
</section>


</>
  );
}

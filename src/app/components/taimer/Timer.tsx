'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date('2027-03-01T00:00:00').getTime();

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  if (!timeLeft) {
    return null;
  }

  return (
    /* border-y делает линию и СВЕРХУ, и СНИЗУ */
    <section className="w-full bg-white border-y border-black/10 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Заголовок */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1f1f1f] font-['Space_Grotesk',sans-serif]">
          До мартовского ЕНТ осталось
        </h2>

        {/* Сетка таймера */}
        <div className="flex justify-center items-center divide-x divide-[#d1d5db]">
          
          {/* Дни */}
          <div className="flex flex-col items-center px-3 sm:px-8">
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#1f1f1f] tracking-tight">
              {formatTime(timeLeft.days)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#6a7282] uppercase tracking-[2px] mt-2">
              Дней
            </span>
          </div>

          {/* Часы */}
          <div className="flex flex-col items-center px-3 sm:px-8">
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#1f1f1f] tracking-tight">
              {formatTime(timeLeft.hours)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#6a7282] uppercase tracking-[2px] mt-2">
              Часов
            </span>
          </div>

          {/* Минуты */}
          <div className="flex flex-col items-center px-3 sm:px-8">
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#1f1f1f] tracking-tight">
              {formatTime(timeLeft.minutes)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#6a7282] uppercase tracking-[2px] mt-2">
              Минут
            </span>
          </div>

          {/* Секунды */}
          <div className="flex flex-col items-center px-3 sm:px-8">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1f1f1f] tracking-tight">
              {formatTime(timeLeft.seconds)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-[#6a7282] uppercase tracking-[2px] mt-2">
              Секунд
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../components/map'), {
  ssr: false,
});

export interface ILayoutProps {
  current: React.ReactNode;
  location: React.ReactNode;
  forecast: React.ReactNode;
}

export default function Layout({ current, location, forecast }: ILayoutProps) {
  return (
    <main className="p-4 md:p-5 max-w-[375px] md:max-w-[768px] xl:max-w-[1280px] mx-auto">
      <section>
        {location}
        <Map />
      </section>
      <section className="mt-5 md:flex md:gap-4">
        {current}
        {forecast}
      </section>
    </main>
  );
}

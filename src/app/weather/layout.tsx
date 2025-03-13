export interface ILayoutProps {
  map: React.ReactNode;
  current: React.ReactNode;
  location: React.ReactNode;
  forecast: React.ReactNode;
}

export default function Layout({
  map,
  current,
  location,
  forecast,
}: ILayoutProps) {
  return (
    <main>
      <section>
        {location} {map}
      </section>
      <section className="p-4 md:flex">
        {current} {forecast}
      </section>
    </main>
  );
}

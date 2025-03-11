import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col gap-5">
      <h1 className="max-w-60 sm:max-w-max text-2xl sm:text-3xl text-center">
        Welcome to weather app
      </h1>
      <p className="sm:text-xl">
        Go to{' '}
        <Link href="/weather" className="underline">
          see weather
        </Link>
      </p>
    </div>
  );
}

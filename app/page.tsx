import Orders from '@/components/features/orders';
import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  return (
    <div className='grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar />

      <section className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
        <Orders />
      </section>
    </div>
  );
}

import { createClient } from '@/supabase/clients/browserclient';
//import { Skogarkolefni } from '@/types/collection';
import TableComponent from './_components/Table';
import Sidebar from '@/components/Sidebar';

export default async function TablePage() {
  const supabase = createClient();
  const { data } = await supabase.from('skogarkolefni').select();
  if (!data?.length) {
    return <h1>No Images to Display</h1>;
  }
  const places = data;

  return (
    <div className='grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar />

      <section className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
        <TableComponent places={places} />
      </section>
    </div>
  );
}

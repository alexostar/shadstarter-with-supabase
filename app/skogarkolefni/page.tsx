import Sidebar from '@/components/Sidebar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { createClient } from '@/supabase/clients/browserclient';
import { PlacesTypes } from '@/types/collection';

export const revalidate = 1800; // 30 minutes

export default async function SkogarHome() {
  const Map = useMemo(
    () =>
      dynamic(() => import('./_components/map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const supabase = createClient();
  const { data } = await supabase.from('skogarkolefni').select();

  if (!data?.length) {
    return <h1>No Images to Display</h1>;
  }

  const places = data as PlacesTypes[];

  return (
    <div className='grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar />

      <section className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
        <Card>
          <CardHeader className='px-7'>
            <CardTitle>Carbon Forestry in Iceland</CardTitle>
            <CardDescription>Overview. For details see here</CardDescription>
          </CardHeader>
        </Card>
        <div className='h-[800px] w-[100%]'>
          <Map posix={[65.0, -18.9]} places={places} />
        </div>
      </section>
    </div>
  );
}

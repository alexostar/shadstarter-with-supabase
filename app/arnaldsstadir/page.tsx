import { createClient } from '@/supabase/clients/browserclient';
import { redirect } from 'next/navigation';

type ArnaldsstadirTypes = {
  created_at: string;
  id: number;
  name: string;
  reiknivel: Reiknivel[];
};

type Reiknivel = {
  aldur: number;
  osp: number;
  greni: number;
  fura: number;
};

export default async function Arnaldsstadir() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('arnaldsstadir')
    .select()
    .match({ id: 1 })
    .single();

  console.log(data);
  if (!data || error) {
    redirect('/');
  }

  const arnaldsstadir = data as ArnaldsstadirTypes;

  console.log(arnaldsstadir);

  return (
    <div>
      {arnaldsstadir.name}
      {arnaldsstadir.reiknivel.map((item) => (
        <div key={item.aldur}>
          <p>
            {item.osp} {item.greni} {item.fura}{' '}
          </p>
        </div>
      ))}
    </div>
  );
}

/*
<div>
{arnaldsstadir?.name}
{arnaldsstadir?.reiknivel.map((item) => (
  <div key={item.aldur}>
    <p>
      {item.osp} {item.greni} {item.fura}{' '}
    </p>
  </div>
))}
</div>
*/

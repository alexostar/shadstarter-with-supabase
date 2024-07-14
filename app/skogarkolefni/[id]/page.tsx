import Image from 'next/image'
import { createClient } from '@/supabase/clients/browserclient'
import { redirect } from 'next/navigation'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Skogarkolefni } from '@/types/collection'

type Props = {
  params: {
    id: string
  }
}

// export const dynamic = 'force-static'

/*
export async function generateStaticParams() {
  const supabase = createClient()
  const { data } = await supabase.from('skogarkolefni').select('id')
  if (!data) {
    return []
  }
  return data?.map(({ id }) => ({
    slug: id
  }))
}
*/

export default async function Slide({ params: { id } }: Props) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('skogarkolefni')
    .select()
    .match({ id: id })
    .single()

  if (!data || error) {
    redirect('/')
  }

  const place = data as Skogarkolefni

  return (
    <section className='py-24'>
      <div className='container'>
        <h2 className='text-2xl font-medium'>Not Found</h2>
        <p className='opacity-50'>Could not find a page for {place.name}</p>
        <Button asChild className='mt-3'>
          <Link href='/skogarkolefni'>Return to map</Link>
        </Button>
      </div>
    </section>
  )
}

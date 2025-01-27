import Link from 'next/link';
import { CircleCheckBig, Lock, LockOpen, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Sidebar() {
  return (
    <div className='hidden border-r bg-muted/40 md:block py-8'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        {/*
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <CircleCheckBig className='h-6 w-6' />
            <span className=''>VíN | Kortagátt</span>
          </Link>
          
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
          */}

        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'>
              <LockOpen className='h-4 w-4' />
              Skógarkolefni
            </Link>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary'>
              <Lock className='h-4 w-4' />
              Skógarkolefni (details)
            </Link>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'>
              <Lock className='h-4 w-4' />
              Albedo
            </Link>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'>
              <Lock className='h-4 w-4' />
              Photocollections
              <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                3
              </Badge>
            </Link>
            <Link
              href='#'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'>
              <Lock className='h-4 w-4' />
              Maps
              <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                2
              </Badge>
            </Link>
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <Card x-chunk='dashboard-02-chunk-0'>
            <CardHeader className='p-2 pt-0 md:p-4'>
              <CardTitle className='text-lg'>Under development</CardTitle>
              <CardDescription>
                This website is under development. Please contact us for further
                information.
              </CardDescription>
            </CardHeader>
            <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
              <Button size='sm' className='w-full'>
                Contact
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lock, LockOpen } from 'lucide-react';
import {
  Home,
  Menu,
  Package2,
  ShoppingCart,
  Package,
  Users,
  LineChart,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MobileDropdown() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col z-[4000]'>
        <nav className='grid gap-2 text-lg font-medium'>
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
        <div className='mt-auto'>
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}

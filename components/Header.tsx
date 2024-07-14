import Image from 'next/image';

import { ModeToggle } from '@/components/ui/mode-toggle';
// import AdminSearch from '@/components/features/admin-search';
import UserDrowdown from './UserDrowdown';
import MobileDropdown from './MobileDropdown';

import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex h-14 items-center gap-1 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
      <MobileDropdown />

      <Image
        src='/vin-logo.svg'
        alt='Vín logo'
        width={32}
        height={32}
        className='rounded-full'
      />

      <div className='w-full flex-1'>
        <Link href='/' className='font-semibold text-logo '>
          VÍN | Kortagátt
        </Link>
      </div>
      <ModeToggle />
      <UserDrowdown />
    </header>
  );
}

/*
      <div className='w-full flex-1'>
        <AdminSearch />
      </div>
*/

import React from 'react';
import Image from 'next/image'
import {cn} from "@/shared/lib/utils";
import {CartButton, Container, SearchInput} from "@/shared/components/shared";
import {Button} from "@/shared/components/ui";
import {User} from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
      <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
          <Link href='/'>
            <div className='flex items-center gap-4'>
              <Image src='/logo.png' alt='Logo' width={35} height={35}/>

              <div>
                <h1 className='text-2xl uppercase font-black'>Test App</h1>
                <p className='text-sm text-gray-400 leading-3'> best taste</p>
              </div>
            </div>
          </Link>

          <div className='flex-1 mx-10'>
            <SearchInput/>
          </div>

          <div className="flex items-center gap-3">
            <Button variant='outline' className='flex items-center gap-1'>
              <User size={16}/>
              SignIn
            </Button>

            <div>
              <CartButton/>
            </div>
          </div>
        </Container>
      </header>
  )
};
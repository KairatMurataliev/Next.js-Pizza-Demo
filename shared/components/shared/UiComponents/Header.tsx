import React from 'react';
import Image from 'next/image'
import {cn} from "@/shared/lib/utils";
import {Container, SearchInput} from "@/shared/components/shared";
import {Button} from "@/shared/components/ui";
import {ShoppingCart, User, ArrowRight} from "lucide-react";
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
              <Button className='group relative'>
                <b>520$</b>
                <span className='h-full w-[1px] bg-white/30 mx-3'/>

                <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                  <ShoppingCart size={16} strokeWidth={2} className='relative'/>
                  <b>5</b>
                </div>
                <ArrowRight
                    size={20}
                    className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                />
              </Button>
            </div>
          </div>
        </Container>
      </header>
  )
};
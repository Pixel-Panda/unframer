'use client'
import 'framer-for-next/styles.css'

import { FontsForComponents, WithFramerBreakpoints } from 'framer-for-next/src'
import Cultrure from 'https://framer.com/m/cultrure-b10L.js#x'
import MegaMenu from 'https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl'

export default function Home() {
    return (
        <div className='bg-gray-100 text-gray-800 flex flex-col items-center p-10'>
            <FontsForComponents Components={[Cultrure]} />
            <div className='z-50 fixed top-12 '>
                <MegaMenu />
            </div>
            <div className="pt-[200px]"></div>
            <div className='max-w-[1200px] w-full'>
                <WithFramerBreakpoints
                    variants={{
                        Desktop: 'desktop',
                        Tablet: 'tablet',
                        Mobile: 'mobile',
                    }}
                >
                    <Cultrure style={{ width: '100%' }} />
                </WithFramerBreakpoints>
            </div>
        </div>
    )
}

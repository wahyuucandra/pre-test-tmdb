import { cn } from '@/helpers/TailwindUtils';
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ size = 40, className }: { size?: number, className?: string }) => {
    return (
        <div className={cn('flex w-full h-full items-center justify-center h-[500px] gap-6', className)} >
            <ClipLoader
                color={'#F8A43D'}
                loading={true}
                size={size}
                aria-label="Loading Spinner"
            />
            Mohon Tunggu
        </div>
    )
}

export default Loading

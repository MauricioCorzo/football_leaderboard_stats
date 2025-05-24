import { cn, getOrdinalSuffix } from '~/lib/utils';

interface Top3ViewComponentProps {
    name: string;
    image: string;
    position: 1 | 2 | 3;
    badge_text: string;
}

export const Top3ViewComponent = ({ data }: { data: Top3ViewComponentProps[] }) => {
    return (
        <div className='min-h-[320px] w-full grid grid-cols-12 grid-rows-12 gap-x-2'>
            {data.map((d, i) => (
                <div
                    className={cn('row-span-12 grid grid-rows-12', {
                        'col-start-5 col-end-9 lg:col-start-6 lg:col-end-8': d.position === 1,
                        'col-start-1 col-end-5 lg:col-start-4 lg:col-end-6': d.position === 2,
                        'col-start-9 col-end-13 lg:col-start-8 lg:col-end-10': d.position === 3,
                    })}
                    key={i}>
                    <div
                        className={cn('justify-self-center self-end justify-items-center row-start-1 row-span-6 text-center', {
                            'row-start-1 row-span-5': d.position === 1,
                            'row-start-1 row-span-6': d.position === 2,
                            'row-start-1 row-span-7': d.position === 3,
                        })}>
                        <div className='size-20 flex items-center justify-center rounded-full overflow-hidden'>
                            <img key={d.image} src={d.image} alt='' className='max-w-[90%] max-h-[90%] lg:size-24 object-contain  dro-shadow-xl' />
                        </div>
                        <p className='text-xs lg:text-base'>{d.name}</p>
                    </div>
                    <div
                        className={cn(' rounded-t-20 row-span-6 row-start-7 flex flex-col items-center justify-center', {
                            'row-span-7 row-start-6 bg-[#FCEFCB]': d.position === 1,
                            'row-span-6 row-start-7 bg-[#B9B4C780]': d.position === 2,
                            'row-span-5 row-start-8 bg-[#D9ABAB]': d.position === 3,
                        })}>
                        <p className='font-medium'>{getOrdinalSuffix(d.position)}</p>
                        <span className='inline-flex items-center rounded-md bg-gray-50/80 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset'>
                            {d.badge_text}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

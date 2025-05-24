import { useState } from 'react';
import { tournoments } from '~/constants';
import { cn } from '~/lib/utils';
import { useLeagueSelectedStore } from '~/store/league_selected_store';

export const TournomentPills = () => {
    const leagueStore = useLeagueSelectedStore((state) => state);
    return (
        <ul className='flex list-none flex-wrap flex-row gap-2' role='tablist' data-twe-nav-ref>
            {tournoments.map((t) => (
                <li role='presentation' key={t.id}>
                    <button
                        type='button'
                        onClick={() => leagueStore.updateLeagueSelected(t.id)}
                        className={cn(
                            'my-2 block bg-zinc-200 px-7 py-2.5 text-xs font-medium rounded-2xl shadow hover:bg-zinc-100 hover:ring-1 hover:ring-primary-100   transition cursor-pointer',
                            { 'bg-primary-500 text-white hover:brightness-105 hover:bg-primary-500': t.id === leagueStore.league_id }
                        )}
                        id='pills-home-tab04'
                        data-twe-toggle='pill'
                        data-twe-target='#pills-home04'
                        data-twe-nav-active
                        role='tab'
                        aria-controls='pills-home04'
                        aria-selected='true'>
                        {t.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

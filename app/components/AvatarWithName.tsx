export const AvatarWithNameComponent = (data: { name: string; imageUrl: string }) => {
    return (
        <div className='flex items-center gap-2 '>
            <img alt={data.name} src={data.imageUrl} className='rounded-full aspect-square size-9 object-contain' />
            <span>{data.name}</span>
        </div>
    );
};

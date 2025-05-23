interface HeaderProps {
    title: string;
    subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <header className='header'>
            <article>
                <h1 className='text-dark-100 text-2xl md:text-4xl font-bold'>{title}</h1>
                <p className='text-gray-100 text-base md:text-xl font-medium'>{subtitle}</p>
            </article>
        </header>
    );
};

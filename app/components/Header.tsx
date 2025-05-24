import { cn } from '~/lib/utils';

interface HeaderProps {
    title: string;
    subtitle: string;
    className?: string;
}

export const Header = ({ title, subtitle, className }: HeaderProps) => {
    return (
        <header className={cn(`header ${className}`)}>
            <article>
                <h1 className='text-dark-100 text-2xl md:text-4xl font-bold'>{title}</h1>
                <p className='text-gray-100 text-base md:text-xl font-medium'>{subtitle}</p>
            </article>
        </header>
    );
};

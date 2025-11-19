export const Card = ({
    children,
    className = '',
    hover = false,
    ...props
}) => {
    const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200';
    const hoverClass = hover ? 'hover:shadow-md hover:border-gray-300 transition-all duration-200' : '';

    return (
        <div className={`${baseClasses} ${hoverClass} ${className}`} {...props}>
            {children}
        </div>
    );
};
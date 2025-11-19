export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2';

    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-300',
        outline: 'border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
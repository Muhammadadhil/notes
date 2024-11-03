interface Button {
    children: JSX.Element | string;
    className: string;
    type: "submit" | "button";
    onClick?: () => void ;
}    

const Button = ({ children, className, type,onClick }: Button) => {
    return (
        <div>
            <button type={type} className={className} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;

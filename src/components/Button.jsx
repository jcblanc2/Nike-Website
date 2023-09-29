const Button = ({ label, iconUrl }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg font-montserrat leading-none rounded-full text-white bg-coral-red border-coral-red">
            {label}
            <img
                src={iconUrl}
                alt="arrowRight"
                className="ml-2 rounded-full w-5 h-5 "
            />
        </button>
    );
};

export default Button;

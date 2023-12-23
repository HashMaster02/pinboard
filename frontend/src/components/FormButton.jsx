function FormButton({ label }) {
    return (
        <button className="block m-auto px-20 py-4 max-w-xs bg-bluish-turqoise text-white rounded-full hover:bg-light-blue hover:text-dark-blue">
            {label}
        </button>
    );
}
export default FormButton;

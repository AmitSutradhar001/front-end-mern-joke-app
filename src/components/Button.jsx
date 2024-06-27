const Button = ({ text, pending, classes, type }) => {
  return (
    <button
      disabled={pending}
      type={type}
      className={`flex  hover:scale-125 hover:duration-300 hover:ease-in-out   justify-center items-center font-bold min-w-32 py-2 px-3 rounded-lg ${classes}`}
    >
      {pending ? "Submitting..." : text}
    </button>
  );
};

export default Button;

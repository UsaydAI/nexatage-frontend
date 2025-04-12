function Button({ buttonText }) {
  return (
    <div className="p-[2px] border-gradient">
      <button className="bg-black text-white text-base text-center mx-1 my-3">
        {buttonText}
      </button>
    </div>
  );
}

export default Button;

const Button = ({ ref, className, isReduced }) => {
  return (
    <div
      ref={ref}
      className={`button ${className} ${isReduced && "is-reduced"}`}
    >
      <button className="button__link">View More</button>
    </div>
  );
};

export default Button;

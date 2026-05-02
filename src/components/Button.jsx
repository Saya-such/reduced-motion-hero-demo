const Button = (props) => {
  return (
    <div className={"button " + props.class}>
      <button className="button__link">View More</button>
    </div>
  );
};

export default Button;

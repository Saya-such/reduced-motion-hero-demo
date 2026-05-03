const Toggle = ({ className, disabled, isReduced, onChange }) => {
  return (
    <div className={`toggle ${className}`}>
      <label className="toggle__label">
        <input
          className="toggle__input"
          type="checkbox"
          disabled={disabled}
          checked={isReduced}
          onChange={onChange}
        />
      </label>
      <p className="toggle__text">
        Reduced Motion: <span>{isReduced ? "ON" : "OFF"}</span>
      </p>
    </div>
  );
};

export default Toggle;

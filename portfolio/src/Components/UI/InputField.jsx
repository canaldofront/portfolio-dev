const InputField = ({
  id,
  onChange,
  onBlur,
  hasError,
  label,
  isTextArea = false,
}) => {
  const commonProps = {
    id,
    name: id,
    onChange: (e) => onChange(e.target.value),
    onBlur: () => onBlur(true),
  };

  return (
    <div className='field'>
      <label htmlFor={id}>{label}</label>
      {!isTextArea && <input {...commonProps} type='text' />}
      {isTextArea && <textarea {...commonProps} rows='10' />}
      {hasError && <span className='error'>Oops! O campo está incorreto.</span>}
    </div>
  );
};

export default InputField;

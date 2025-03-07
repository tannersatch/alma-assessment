import styles from "./checkbox.module.css";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({ label, ...inputProps }: CheckboxProps) {  
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" {...inputProps} />
      <label>{label}</label>
    </div>
  );
}

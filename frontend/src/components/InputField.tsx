import "../global.css";

type InputProps = {
    id: string;
    placeholder: string;
    type?: string;
    classname?: string;
    value: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;   onChange={props.onChange}
}

const InputField = (props: InputProps) => {
  return (
     <input id={props.id} type={props.type || "text"} className={`${props.classname || ""}`} placeholder={props.placeholder} value={props.value}  />
  )
}

export default InputField
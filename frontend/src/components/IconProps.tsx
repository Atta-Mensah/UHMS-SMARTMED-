import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../global.css";


type IconPropsType = {
    icon: any;
    classname?: string;
}
    
const IconProps = (props: IconPropsType) => {
  return (
      <FontAwesomeIcon icon={props.icon} className={`${props.classname || ""}`} />
  );
};

export default IconProps;
export default function Button({type, text, onClick, style, customClass, customClass2 }) {
    return (
      <button
        className={`Button_1 ${customClass ? customClass  : "" }`}
       
        onClick={onClick}
        style={style}
        type={type}
      >
        {text}
      </button>
    );
  }
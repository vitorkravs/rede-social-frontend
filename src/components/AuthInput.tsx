interface AuthInputProps {
  newState: (state: string) => void;
  label: string;
  isPassword?: boolean;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <div className="flex flex-col justify-between items-start">
      <label>{props.label}</label>
      <input
        type={props.isPassword ? "password" : "text"}
        onChange={(e) => props.newState(e.currentTarget.value)}
        placeholder={"Digite seu " + props.label}
        className="border-gray-400 border-b w-full focus-visible:border-gray-700 focus-visible:boder-b focus-visible:outline-none"
      />
    </div>
  );
};

export default AuthInput;

interface input {
  placeholder: string;
  type: string;
}

export default function Inp({ placeholder, type }: input) {
  return <input type={type} className="" placeholder={placeholder} />;
}

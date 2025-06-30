import React, { forwardRef } from "react";

type EmailInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Emailinput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ onChange }, ref) => {
    return (
      <div>
        <p className="text-gray-500">E-mail de trabalho</p>
        <input
          onChange={onChange} // espalha props se quiser customizar no futuro
          ref={ref}
          className="border w-full border-gray-400 p-2 rounded focus:border-blue-500"
          type="text"
          required
          placeholder="Insira seu endereço de e-mail"
        />
      </div>
    );
  }
);
Emailinput.displayName = "Emailinput";

export default Emailinput;

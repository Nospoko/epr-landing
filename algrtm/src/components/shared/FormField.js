import React, { useState, useEffect } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const FormField = ({
  label,
  placeholder,
  type,
  id,
  name,
  fieldType,
  errors,
}) => {
  const [isMdOrAbove, setIsMdOrAbove] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1023 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrAbove(window.innerWidth >= 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const FieldComponent = fieldType === "textarea" ? TextArea : Input;
  const widthClass =
    fieldType === "textarea" ? "w-full" : isMdOrAbove ? "w-1/2" : "w-full";

  return (
    <div className={`p-2 ${widthClass}`}>
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor={id}
          className="t6 text-neutralLight-neutral20 dark:text-neutralDark-neutral20"
        >
          {label}
        </label>
        <FieldComponent
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          fieldType={fieldType}
        />
        {errors[name] && (
          <div>
            <p className="text-red-600 p3">{errors[name]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;

import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const FormField = ({ label, placeholder, type, id, name, fieldType }) => {
  const FieldComponent = fieldType === "textarea" ? TextArea : Input;
  const widthClass = fieldType === "textarea" ? "w-full" : "w-1/2";
  return (
    <div className={`p-2 ${widthClass}`}>
      <div className="relative flex flex-col gap-2">
        <label htmlFor={id} className="t6 text-neutralLight-neutral20">
          {label}
        </label>
        <FieldComponent
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          fieldType={fieldType}
        />
      </div>
    </div>
  );
};

export default FormField;

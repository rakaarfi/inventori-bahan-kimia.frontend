const inputClassName = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"

export function InputData({ 
    type, 
    name, 
    value, 
    onChange, 
}) {
    const stepAttribute = type === 'number' ? { step: 'any' } : {};

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={inputClassName}
            required
            {...stepAttribute}
        />
    );
}

export function SelectData({ 
    name,
    disabledValue,
    value, 
    options, 
    onChange,
}) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={inputClassName}
            required
        >
            <option value={""} disabled>{disabledValue}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export function TextareaData({ 
    name, 
    value, 
    onChange,
    rows
}) {
    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            className={inputClassName}
            required
        ></textarea>
    );
}
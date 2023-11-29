interface InputProps {
  id: string
  onChange: any
  value: string
  label: string
  type?: string
  onKeyDown?: (event: any) => void
}

export default function Input({id, onChange, value, label, type, onKeyDown}: InputProps) {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        onKeyDown={onKeyDown}
        className="block w-full px-6 pt-6 pb-1 rounded-md appearance-none text-md bg-slate-100 focus:outline-none focus:ring-0 peer"
        placeholder=" "></input>
      <label
        className="
          absolute
          text-md
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
          "
        htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

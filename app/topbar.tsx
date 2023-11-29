import LoginButton from './components/LoginButton'

export default function TopBar({onToggleNav}: {onToggleNav: () => void}) {
  return (
    <div className="flex justify-between items-center bg-gray-200">
      <button
        className="px-2 py-1 text-slate-600 rounded hover:bg-slate-400 hover:bg-opacity-20"
        onClick={onToggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="flex">
        <LoginButton />
      </div>
    </div>
  )
}

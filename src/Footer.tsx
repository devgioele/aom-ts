const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 w-full border-t border-red p-3 bg-slate-800 text-white">
      <div className="grid grid-cols-2 gap-4">
        <div>Gioele De Vitti</div>
        <div className="text-right">
          <a
            className="text-cyan-400 hover:text-cyan-200"
            href="https://github.com/devgioele"
            target="_blank"
            rel="noopener noreferrer"
          >
            @devgioele
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

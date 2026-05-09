const TopBanner = () => (
  <div className="flex w-full flex-col items-stretch justify-between gap-2 bg-[#c2185b] px-4 py-2 text-xs text-white sm:flex-row sm:items-center sm:text-sm">
    <p className="flex-1 text-center sm:text-left">
      This is a sample UI platform designed exclusively for testing and prototyping.
    </p>
    <a
      href="https://github.com"
      className="shrink-0 text-center underline decoration-white/80 underline-offset-2 hover:text-white/90 sm:text-right"
    >
      Get Source Code
    </a>
  </div>
);

export default TopBanner;

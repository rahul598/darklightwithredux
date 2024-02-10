import { GlobeAltIcon,MoonIcon } from '@heroicons/react/24/outline';


export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >


      <GlobeAltIcon className="w-12 rotate-[15deg]" />
      <p className="text-[20px]">Dark</p>
    </div>
  );
}

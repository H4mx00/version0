import React, { SVGProps } from 'react';

function SAPLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 50" {...props}>
      <path d="M0 0h100v50H0V0z" fill="#008FD3" />
      <text x="50" y="32" fontSize="22" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="-1">SAP</text>
    </svg>
  );
}

function INGLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 50" {...props}>
      <text x="50" y="34" fontSize="30" fontWeight="900" fill="#FF6200" textAnchor="middle" letterSpacing="0">ING</text>
    </svg>
  );
}

function BMWLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" {...props}>
      <circle cx="25" cy="25" r="22" fill="#000" />
      <circle cx="25" cy="25" r="14" fill="#FFF" />
      <path d="M25 11a14 14 0 0 1 14 14H11a14 14 0 0 1 14-14z" fill="#0066B1" />
      <path d="M25 39a14 14 0 0 1-14-14h28a14 14 0 0 1-14 14z" fill="#FFF" />
      <text x="25" y="10" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">B M W</text>
    </svg>
  );
}

function IKEALogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 50" {...props}>
      <rect width="100" height="50" fill="#0051BA" />
      <ellipse cx="50" cy="25" rx="45" ry="20" fill="#FFCC00" />
      <text x="50" y="34" fontSize="24" fontWeight="900" fill="#0051BA" textAnchor="middle" letterSpacing="1">IKEA</text>
    </svg>
  );
}

function AirbusLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 50" {...props}>
      <text x="50" y="32" fontSize="22" fontWeight="900" fill="#00205B" textAnchor="middle">AIRBUS</text>
    </svg>
  );
}

function RenaultLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" {...props}>
      <path d="M25 5 L35 25 L25 45 L15 25 Z" fill="none" stroke="#FFCC00" strokeWidth="4" />
      <path d="M25 12 L30 25 L25 38 L20 25 Z" fill="#000" />
    </svg>
  );
}

function AdidasLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" {...props}>
      <path d="M12 36 L25 16 M23 36 L34 19 M34 36 L44 21" stroke="#000" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function DHLLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 50" {...props}>
      <rect width="100" height="50" fill="#FFCC00" />
      <text x="50" y="34" fontSize="28" fontWeight="900" fill="#D40511" textAnchor="middle" letterSpacing="1" fontStyle="italic">DHL</text>
    </svg>
  );
}

export function CompanyLogos({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-8 w-full ${className || ''}`}>
      <div className="shrink-0">
        <p className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap text-center">
          Top CV/Resume for EU-Market
        </p>
      </div>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-x-12 sm:gap-x-16 animate-marquee hover:[animation-play-state:paused]">
          <SAPLogo className="h-8 sm:h-10 w-auto text-slate-400" />
          <INGLogo className="h-7 sm:h-8 w-auto text-slate-400" />
          <BMWLogo className="h-8 sm:h-10 w-auto text-slate-400" />
          <IKEALogo className="h-8 sm:h-10 w-auto text-slate-400" />
          <AirbusLogo className="h-7 sm:h-8 w-auto text-slate-400" />
          <RenaultLogo className="h-10 sm:h-12 w-auto text-slate-400" />
          <AdidasLogo className="h-10 sm:h-12 w-auto text-slate-400" />
          <DHLLogo className="h-7 sm:h-8 w-auto text-slate-400" />
          {/* Duplicate set for infinite scroll */}
          <SAPLogo className="h-8 sm:h-10 w-auto text-slate-400" />
          <INGLogo className="h-7 sm:h-8 w-auto text-slate-400" />
          <BMWLogo className="h-8 sm:h-10 w-auto text-slate-400" />
          <IKEALogo className="h-8 sm:h-10 w-auto text-slate-400" />
          <AirbusLogo className="h-7 sm:h-8 w-auto text-slate-400" />
          <RenaultLogo className="h-10 sm:h-12 w-auto text-slate-400" />
          <AdidasLogo className="h-10 sm:h-12 w-auto text-slate-400" />
          <DHLLogo className="h-7 sm:h-8 w-auto text-slate-400" />
        </div>
      </div>
    </div>
  );
}

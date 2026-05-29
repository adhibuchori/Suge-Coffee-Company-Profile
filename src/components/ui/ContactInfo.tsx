'use client';

import { MapPin, Clock } from 'lucide-react';

const InstagramIcon = () => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
    />
    <circle
      cx="17.5"
      cy="6.5"
      r="0.5"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const rowCls =
  'flex justify-between items-baseline py-5 border-b border-[oklch(98%_0.006_90/0.08)]';
const labelCls =
  'flex items-center gap-2 font-sans text-[0.68rem] tracking-[0.18em] uppercase text-[oklch(50%_0.018_60)]';

export function ContactInfo() {
  return (
    <div className="border-t border-[oklch(98%_0.006_90/0.08)]">
      <a
        href="https://instagram.com/sugecoffee"
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${rowCls} no-underline transition-colors duration-200 hover:text-[oklch(54%_0.1_162)]`}
        style={{ color: 'oklch(98% 0.006 90)' }}
      >
        <span className={labelCls}>
          <InstagramIcon />
          Instagram
        </span>
        <span className="font-sans text-[0.88rem] transition-colors duration-200">@sugecoffee</span>
      </a>

      <div className={rowCls}>
        <span className={labelCls}>
          <MapPin
            size={13}
            strokeWidth={1.5}
          />
          Alamat
        </span>
        <span className="font-sans text-[0.88rem] text-right text-[oklch(98%_0.006_90)]">
          Jl. Bintaro Tengah No. 48
        </span>
      </div>

      <div className={rowCls}>
        <span className={labelCls}>
          <Clock
            size={13}
            strokeWidth={1.5}
          />
          Jam Buka
        </span>
        <span className="font-sans text-[0.88rem] tabular-nums text-[oklch(98%_0.006_90)]">
          09.00 – 22.00 WIB
        </span>
      </div>

      <a
        href="https://api.whatsapp.com/send/?phone=6281319436485"
        target="_blank"
        rel="noopener noreferrer"
        className={`${rowCls} no-underline transition-colors duration-200 hover:text-[oklch(54%_0.1_162)]`}
        style={{ color: 'oklch(98% 0.006 90)' }}
      >
        <span className={labelCls}>
          <PhoneIcon />
          Telepon
        </span>
        <span className="font-sans text-[0.88rem] tabular-nums transition-colors duration-200">
          +62 813-1943-6485
        </span>
      </a>
    </div>
  );
}

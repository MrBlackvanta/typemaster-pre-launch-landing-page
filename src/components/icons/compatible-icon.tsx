type CompatibleIconProps = {
  className?: string;
};

export default function CompatibleIcon({ className }: CompatibleIconProps) {
  return (
    <svg
      viewBox="0 0 26 21"
      width={26}
      height={21}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M15.673 17.755l2.253 2.939H7.51l2.253-2.939h5.91zM23.183.45a1.96 1.96 0 011.96 1.96v12.08a1.96 1.96 0 01-1.96 1.96H1.96A1.96 1.96 0 010 14.489V2.41A1.96 1.96 0 011.96.448z" />
    </svg>
  );
}

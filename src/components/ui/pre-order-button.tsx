type PreOrderButtonProps = {
  tone: "brand" | "muted";
};

const tones = {
  brand: "bg-brand text-ink hover:bg-brand-soft",
  muted: "bg-mist text-ink hover:bg-ink hover:text-white",
};

export default function PreOrderButton({ tone }: PreOrderButtonProps) {
  return (
    <button
      type="button"
      className={`v-focus-ring rounded-lg px-3.5 py-2.75 font-bold uppercase transition-[background-color,color] duration-150 active:translate-y-px md:px-6.5 md:py-4 ${tones[tone]}`}
    >
      Pre-order now
    </button>
  );
}

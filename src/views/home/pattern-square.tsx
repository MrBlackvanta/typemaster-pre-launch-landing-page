type PatternSquareProps = {
  className?: string;
};

export default function PatternSquare({ className }: PatternSquareProps) {
  return (
    <div
      className={`bg-mist rounded-frame absolute hidden w-63.75 lg:block ${className}`}
    />
  );
}

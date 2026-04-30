type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-2.5 py-1 text-xs font-medium text-blue-100 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] sm:px-3 sm:text-sm">
      {children}
    </span>
  );
}

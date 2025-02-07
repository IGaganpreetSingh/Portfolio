export function CircleBackground({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`absolute h-[50rem] w-[50rem] rounded-full bg-gradient-to-r from-primary to-accent-foreground blur-[128px] ${className}`}
      {...props}
    />
  );
}

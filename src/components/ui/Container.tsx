export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mx-auto px-3 lg:w-4/5">{children}</div>;
}

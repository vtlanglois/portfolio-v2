export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mx-auto px-4 lg:w-3/4">{children}</div>;
}

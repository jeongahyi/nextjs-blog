export default function Container({ children }: { children: React.ReactNode }): JSX.Element | null {
  return <div className="container mx-auto mb-10 p-5">{children}</div>
}
export default function PostTitle({ children }) {
    return (
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-wider leading-tight md:leading-none mb-12 text-center md:text-left">
            {children}
        </h1>
    )
}
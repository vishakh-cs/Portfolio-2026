export default function Footer() {
    return (
        <footer className="w-full py-6 mt-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm text-gray-400">
                    Made with{" "}
                    <span className="text-black font-medium">Next.js</span> ❤️ Inspired by{" "}
                    <span className="text-black font-medium">Akshay</span>
                </p>

             

                <p className="mt-4 text-xs text-gray-500">
                    © {new Date().getFullYear()} Vishakh CS.
                </p>
            </div>
        </footer>
    );
}

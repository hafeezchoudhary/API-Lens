const Footer = () => {
    return (
        <footer className="w-full border-t border-zinc-800 bg-gray-950 mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-16 flex items-center justify-center md:justify-between">

                    <p className="text-sm text-zinc-400 text-center">
                        Built with React, Flask, and ReportLab.
                    </p>

                    <p className="hidden md:block text-sm text-zinc-400">
                        APILens v1.0
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
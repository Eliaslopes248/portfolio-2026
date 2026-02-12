import React from 'react'
import resumePdf from '../../assets/resume.pdf'

export default function NavBar() {
    /** constants and types */
    type navOptions = {name:string, link:string };
    const navOptionList: navOptions[] = [
        { name: "Home",     link: "/" },
        { name: "Projects", link: "/projectCatalog" },
        // Always jump to the footer contact section on the root page
        // { name: "Contact",  link: "/#contact" },
    ];
    /** handles menu state */
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

    /** 
     * event listener on click
     * - toggles menu state
     */
    function openMenu(
        e: React.MouseEvent<HTMLButtonElement>)
    {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    /**
     * onclick downloads resume from local to browser
     * @param e 
     */
    function downloadResume(
        e: React.MouseEvent<HTMLAnchorElement>): void
    {
        e.preventDefault()
        const link = document.createElement('a')
        link.href = resumePdf            // correct, Vite-built URL
        link.download = 'resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter text-white">
                EL<span className="text-[var(--accent)]">.</span>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    {navOptionList.map((o, i)=>{
                        return <a key={i} className="nav-link text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100" href={o.link}>{o.name}</a>
                    })}
                
                <a onClick={downloadResume} className="px-5 py-2 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase hover:bg-emerald-500/10 transition-colors" href="#">Resume</a>
                </div>
                <button onClick={openMenu} className="md:hidden text-white" type="button">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
            {/* mobile nav options - slides down/up */}
            <div
                className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-out"
                style={{ maxHeight: menuOpen ? 300 : 0 }}
            >
                <div className="w-full flex flex-col bg-black min-h-[300px] gap-12 py-6 px-6">
                    {navOptionList.map((o, i) => (
                        <a
                            key={i}
                            className="nav-link w-full text-center text-4xl font-medium tracking-widest uppercase opacity-70 hover:opacity-100"
                            href={o.link}
                            onClick={() => setMenuOpen(false)}
                        >
                            {o.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

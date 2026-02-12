import React, { useEffect } from 'react'

export default function Footer() {
    const linkedInLink:string = "https://www.linkedin.com/in/elias-lopes-273130297/";
    /** handle email service */
    type emailMeFormType = {inquiryType:string, message: string}
    /** set default for email form */
    const [formInfo, setFormInfo] = React.useState<emailMeFormType>({inquiryType:"", message: ""});

    /**
     * sends email from email service
     * @param e 
     * @returns void
     */
    function sendInquiry(
        e: React.MouseEvent<HTMLButtonElement>): void
    {
        e.preventDefault();
        /** process mail */
    }

    /**
     * handles changes to form and updates formInfo
     * @param e 
     * @returns void
     */
    function handleFormChange(
        e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
      ): void {
        const { name, value } = e.target
        setFormInfo(prev => ({
          ...prev,
          [name]: value,
        }))
      }

    /** debug to ensure updated work */
    // useEffect(()=>{console.log(formInfo)}, [formInfo])


    return (
        <div className="bg-zinc-950 py-24 border-t border-white/5" id="contact">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
            <h2 className="text-6xl font-light text-gradient mb-8 leading-tight">
                Let's build the <br />
                future infrastructure.
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">Currently seeking 2025 Summer Internships in Systems Programming or Solutions Architecture.</p>
            <div className="flex gap-8">
                
                <a className="text-white hover:text-emerald-400 transition-colors flex items-center gap-2 font-bold uppercase text-xs tracking-widest" href={linkedInLink}>
                <span className="material-symbols-outlined">link</span> LinkedIn
                </a>
            </div>
            </div>
            <div className="glass p-12 space-y-8">
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-500" htmlFor="inquiry-type">Inquiry Type</label>
                <select name="inquiryType" id="inquiry-type" onChange={handleFormChange} className="w-full bg-white/5 border border-white/10 text-white focus:border-emerald-500 rounded-none p-4">
                <option>General Collaboration</option>
                <option>Job Opportunity</option>
                <option>Project Consultation</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-500" htmlFor="message">Message</label>
                <textarea onChange={handleFormChange} name="message" id="message" className="w-full bg-white/5 border border-white/10 text-white focus:border-emerald-500 rounded-none p-4 resize-none" placeholder="How can we build together?" rows={4}></textarea>
            </div>
            <button onClick={sendInquiry} className="w-full bg-white text-black py-4 font-bold uppercase text-xs tracking-[0.3em] hover:bg-emerald-500 hover:text-white transition-all" type="button">
                Send Brief
            </button>
            </div>
        </div>
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
            <div className="text-xs tracking-widest uppercase">© 2026 Elias Lopes Portfolio</div>
            <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase">
            <span>Greensboro, NC</span>
            <span>Software Infrastructure</span>
            <span>Software Engineering</span>
            </div>
        </div>
        </div>
    </div>
    )
}

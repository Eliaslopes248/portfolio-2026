import React   from 'react'
import emailjs from "@emailjs/browser"

const SERVICE_ID: string   = import.meta.env.VITE_EMAIL_JS_SERVICE_ID   || ''
const TEMPLATE_ID: string  = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID  || ''
const PUBLIC_KEY: string   = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY   || ''

export default function Footer() {
    const linkedInLink:string = "https://www.linkedin.com/in/elias-lopes-273130297/";
    /** handle email service */
    type emailMeFormType = { inquiry_type: string; message: string }
    /** set default for email form */
    const [formInfo, setFormInfo] = React.useState<emailMeFormType>({
      inquiry_type: "General Collaboration",
      message: "",
    });

    /**
     * sends email from email service
     * @param e 
     * @returns void
     */
    async function sendInquiry(
        e: React.MouseEvent<HTMLButtonElement>
      ): Promise<void> {
        e.preventDefault();

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
          console.error("[EMAILJS] Missing configuration. Check environment variables.")
          return
        }

        if (!formInfo.message.trim()) {
          alert("Please enter a message before sending.")
          return
        }

        try {
          await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
              inquiry_type: formInfo.inquiry_type,
              message: formInfo.message,
            },
            {
              publicKey: PUBLIC_KEY,
            }
          )

          alert("Your message has been sent. Thank you!")
          setFormInfo({
            inquiry_type: "General Collaboration",
            message: "",
          })
        } catch (error) {
          console.error("[EMAILJS] Failed to send message", error)
          alert("Sorry, something went wrong sending your message. Please try again.")
        }
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
            <p className="text-slate-400 text-lg mb-12 max-w-md">Lets Connect.</p>
            <div className="flex gap-8">
                
                <a className="text-white hover:text-emerald-400 transition-colors flex items-center gap-2 font-bold uppercase text-xs tracking-widest" href={linkedInLink}>
                <span className="material-symbols-outlined">link</span> LinkedIn
                </a>
            </div>
            </div>
            <div className="glass p-12 space-y-8">
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-500" htmlFor="inquiry-type">Inquiry Type</label>
                <select
                  name="inquiry_type"
                  id="inquiry-type"
                  value={formInfo.inquiry_type}
                  onChange={handleFormChange}
                  className="w-full bg-white/5 border border-white/10 text-white focus:border-emerald-500 rounded-none p-4"
                >
                  <option>General Collaboration</option>
                  <option>Job Opportunity</option>
                  <option>Project Consultation</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-500" htmlFor="message">Message</label>
                <textarea
                  onChange={handleFormChange}
                  name="message"
                  id="message"
                  value={formInfo.message}
                  className="w-full bg-white/5 border border-white/10 text-white focus:border-emerald-500 rounded-none p-4 resize-none"
                  placeholder="How can we build together?"
                  rows={4}
                ></textarea>
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

"use client"

import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, ChevronDown, CircleCheck, Instagram, LoaderCircle, Mail, MapPin, X } from "lucide-react"
import { projectCards } from "@/lib/project-data"
import styles from "./diwali.module.css"

type ReferralType = "refer_someone" | "self_referral"
type FormValues = {
  referralType: ReferralType
  referrerName: string
  referrerMobile: string
  referrerEmail: string
  nomineeName: string
  nomineeMobile: string
  nomineeEmail: string
  project: string
  preferredContact: string
  residentType: string
  consent: boolean
  termsConsent: boolean
}

const initialValues: FormValues = {
  referralType: "refer_someone", referrerName: "", referrerMobile: "", referrerEmail: "",
  nomineeName: "", nomineeMobile: "", nomineeEmail: "", project: "",
  preferredContact: "Phone", residentType: "Resident", consent: false, termsConsent: false,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const mobilePattern = /^[6-9]\d{9}$/
const referralProjectOptions = [
  "RRL Palm Altezze",
  "RRL Code Name - NC 216",
  "Confident Atria Villas",
]

function Diya({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 90" fill="none" aria-hidden="true">
      <path d="M65 4c-14 11-14 23 0 30 13-7 13-19 0-30Z" fill="#FFF1B4" />
      <path d="M65 10c-7 9-6 15 0 20 6-5 7-11 0-20Z" fill="#E79B32" />
      <path d="M26 46c13 5 24 7 39 7s26-2 39-7c-5 18-20 27-39 27S31 64 26 46Z" fill="#A83A1D" stroke="#EBC270" strokeWidth="3" />
      <path d="M16 46c18 8 33 11 49 11s31-3 49-11" stroke="#F6D993" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="65" cy="83" rx="46" ry="3" fill="#F5C969" opacity=".34" />
      <circle cx="65" cy="46" r="36" stroke="#F7D58A" opacity=".28" />
    </svg>
  )
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className={styles.eyebrow}><span />{children}<span /></div>
}

export default function DiwaliCampaign() {
  const [welcomeOpen, setWelcomeOpen] = useState(true)
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submission, setSubmission] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [serverMessage, setServerMessage] = useState("")

  useEffect(() => {
    if (!welcomeOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setWelcomeOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [welcomeOpen])

  const setField = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues(current => ({ ...current, [field]: value }))
    setErrors(current => ({ ...current, [field]: "" }))
    if (submission !== "idle") setSubmission("idle")
  }

  const validate = () => {
    const next: Record<string, string> = {}
    const mobile = values.referralType === "self_referral" ? values.referrerMobile : values.nomineeMobile
    const mobileField = values.referralType === "self_referral" ? "referrerMobile" : "nomineeMobile"
    const email = values.referralType === "self_referral" ? values.referrerEmail : values.nomineeEmail
    const emailField = values.referralType === "self_referral" ? "referrerEmail" : "nomineeEmail"
    if (!values.referrerName.trim()) next.referrerName = "Please enter your name."
    if (!mobilePattern.test(values.referrerMobile.replace(/\D/g, ""))) next.referrerMobile = "Enter a valid 10-digit Indian mobile number."
    if (values.referrerEmail && !emailPattern.test(values.referrerEmail)) next.referrerEmail = "Enter a valid email address."
    if (!values.project) next.project = "Choose a project to continue."
    if (values.referralType === "refer_someone" && !values.nomineeName.trim()) next.nomineeName = "Please enter their name."
    if (!mobilePattern.test(mobile.replace(/\D/g, ""))) next[mobileField] = "Enter a valid 10-digit Indian mobile number."
    if (email && !emailPattern.test(email)) next[emailField] = "Enter a valid email address."
    if (!values.consent) next.consent = "Please confirm you have permission to share these details."
    if (!values.termsConsent) next.termsConsent = "Please accept the programme declaration."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setServerMessage("")
    if (!validate()) {
      document.querySelector("#referral-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    setSubmission("sending")
    try {
      const endpoint = "https://formspree.io/f/myeeadnz";
      if (!endpoint) throw new Error("Referral submissions are not configured yet. Please call +91 84949 66966 to speak with our team.")
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, submittedAt: new Date().toISOString() }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "We couldn’t send your details. Please try again.")
      setSubmission("success")
      setValues(initialValues)
    } catch (error) {
      setSubmission("error")
      setServerMessage(error instanceof Error ? error.message : "We couldn’t send your details. Please try again.")
    }
  }

  const fieldError = (name: string) => errors[name] && <span className={styles.fieldError} role="alert">{errors[name]}</span>

  return (
    <main className={styles.page}>
      {welcomeOpen && <div className={styles.welcomeOverlay} onMouseDown={event => { if (event.target === event.currentTarget) setWelcomeOpen(false) }}>
        <section className={styles.welcomeDialog} role="dialog" aria-modal="true" aria-labelledby="welcome-title" aria-describedby="welcome-message">
          <button type="button" autoFocus className={styles.welcomeClose} onClick={() => setWelcomeOpen(false)} aria-label="Close Diwali greeting"><X size={18} /></button>
          <div className={styles.welcomeOrnament} aria-hidden="true"><span>✦</span><i>✧</i><span>✦</span></div>
          <div className={styles.welcomeDiya}><Diya /></div>
          <SectionEyebrow>A festive wish from RRL</SectionEyebrow>
          <h2 id="welcome-title">Happy <em>Diwali</em></h2>
          <p id="welcome-message">May this festival of lights fill your home with joy, prosperity, and beautiful new beginnings.</p>
          <div className={styles.welcomeSignature}>With warm wishes, <strong>RRL Group</strong></div>
          <a href="#projects" className={styles.welcomeButton} onClick={() => setWelcomeOpen(false)}>Explore the campaign <ArrowRight size={16} /></a>
        </section>
      </div>}
      <header className={`${styles.nav} ${styles.campaignNav}`}>
        <Link href="/" className={styles.brand} aria-label="RRL Builders & Developers home">
          <Image src="/logo.png" alt="RRL Group" width={160} height={70} priority />
          <span>BUILDERS &amp; DEVELOPERS</span>
        </Link>
        <a className={styles.navButton} href="#referral-form">Join the programme <ArrowRight size={15} /></a>
      </header>
      <section className={`${styles.referral} ${styles.campaignHero}`} id="top" aria-label="RRL Group refer and earn campaign">
        <div className={styles.referralTexture} />
        <div className={styles.referralInner}>
          <div className={styles.referralCopy}>
            <SectionEyebrow>RRL GROUP · REFER &amp; EARN</SectionEyebrow>
            <h1>Happy Diwali!<br /><em>Wishing you a Bright and Prosperous Diwali</em></h1>
            <p>Refer any RRL Group project, share their contact with us, and earn a <strong>2% reward on every successful sale.</strong></p>
            <div className={styles.rewardSeal}><span>REFER</span><i>✦</i><span>SHARE</span><i>✦</i><span>EARN</span></div>
            <div className={styles.rewardCallout}><span>YOUR CONTACT. OUR EXPERTISE.</span><strong>YOUR <em>2%</em> REWARD.</strong></div>
            <a className={styles.referralButton} href="#projects">Explore RRL projects <ArrowRight size={15} /></a>
          </div>
          <div className={styles.referralArtwork}>
            <Image src="/diwali-referral.jpg" alt="Know someone looking for a home? Refer an RRL Group project and earn 2% on every successful sale." fill priority sizes="(max-width: 850px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className={styles.projects} id="projects">
        <div className={styles.sectionHead}>
          <SectionEyebrow>Made for life’s next chapter</SectionEyebrow>
          <h2>Find your dream home <em>with RRL</em></h2>
          <p>Thoughtfully designed homes for the beautiful new beginnings ahead.</p>
        </div>
        <div className={styles.projectGrid}>
          {projectCards.map(project => {
            const isNc216 = project.href === "/projects/nc-216"
            return (
              <article className={`${styles.projectCard} ${isNc216 ? styles.featuredCard : ""}`} key={`${project.href}-${project.name}`}>
                <Link href={project.href} className={styles.projectImage} aria-label={`Explore ${project.name}`}>
                  <Image src={project.image} alt={`${project.name} by RRL Builders`} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" loading="lazy" />
                  <span className={styles.projectStatus}>{isNc216 ? "Featured project" : project.status}</span>
                  {isNc216 && <span className={styles.ncBadge}>NC216</span>}
                </Link>
                <div className={styles.projectInfo}>
                  <div className={styles.projectTitle}><div><span>{project.type}</span><h3>{isNc216 ? "NC216" : project.name}</h3></div><ArrowRight size={19} /></div>
                  <p>{project.location}</p>
                  {isNc216 && <div className={styles.projectPrice}><span>Starting price</span><strong>₹42 Lakhs <small>onwards</small></strong></div>}
                  <div className={styles.projectMeta}>{project.config && <span>{project.config}</span>}{project.acres && <span>{project.acres}</span>}{project.units && <span>{project.units}</span>}</div>
                  <Link href={project.href} className={styles.projectLink}>{isNc216 ? "Explore NC216" : "Explore project"}<ArrowRight size={15} /></Link>
                </div>
              </article>
            )
          })}
        </div>
        <div className={styles.projectsFooter}><span>More spaces. More ways to belong.</span><Link href="/projects">View all projects <ArrowRight size={15} /></Link></div>
      </section>

      <section className={styles.enroll} id="referral-form">
        <div className={styles.enrollAside}>
          <SectionEyebrow>Your next bright beginning</SectionEyebrow>
          <h2>Let’s make<br /><em>the introduction.</em></h2>
          <p>Share a few details and our team will take it from here with care.</p>
          <div className={styles.enrollSteps}><span><i>01</i> Tell us about you</span><span><i>02</i> Share the home seeker</span><span><i>03</i> We’ll be in touch</span></div>
          <a href="tel:+918494966966" className={styles.contactPhone}>Questions? Call <strong>+91 84949 66966</strong></a>
        </div>
        <form className={styles.form} onSubmit={submit} noValidate>
          <div className={styles.formTop}><span>RRL REFERRAL PROGRAMME</span><span>01 — ENROLMENT</span></div>
          <fieldset className={styles.typeSelector}>
            <legend>How would you like to take part?</legend>
            <label className={values.referralType === "refer_someone" ? styles.typeSelected : ""}>
              <input type="radio" name="referralType" checked={values.referralType === "refer_someone"} onChange={() => setField("referralType", "refer_someone")} />
              <span className={styles.radioDot} /><span><strong>Refer someone</strong><small>Share a friend’s details</small></span>
            </label>
            <label className={values.referralType === "self_referral" ? styles.typeSelected : ""}>
              <input type="radio" name="referralType" checked={values.referralType === "self_referral"} onChange={() => setField("referralType", "self_referral")} />
              <span className={styles.radioDot} /><span><strong>Self referral</strong><small>I’m looking for a home</small></span>
            </label>
          </fieldset>

          <div className={styles.formSectionTitle}><span>01</span><h3>{values.referralType === "self_referral" ? "Your details" : "Your details"}</h3><i /></div>
          <div className={styles.fieldGrid}>
            <label className={styles.field}><span>Your full name <b>*</b></span><input autoComplete="name" value={values.referrerName} onChange={e => setField("referrerName", e.target.value)} placeholder="Enter your name" />{fieldError("referrerName")}</label>
            <label className={styles.field}><span>Your mobile number <b>*</b></span><div className={styles.phoneInput}><span>+91</span><input inputMode="numeric" autoComplete="tel-national" maxLength={10} value={values.referrerMobile} onChange={e => setField("referrerMobile", e.target.value.replace(/\D/g, ""))} placeholder="10-digit number" /></div>{fieldError("referrerMobile")}</label>
            <label className={`${styles.field} ${styles.fullField}`}><span>Email address <small>Optional</small></span><input type="email" autoComplete="email" value={values.referrerEmail} onChange={e => setField("referrerEmail", e.target.value)} placeholder="you@example.com" />{fieldError("referrerEmail")}</label>
          </div>

          {values.referralType === "refer_someone" && <>
            <div className={styles.formSectionTitle}><span>02</span><h3>Who are you referring?</h3><i /></div>
            <div className={styles.fieldGrid}>
              <label className={styles.field}><span>Their full name <b>*</b></span><input autoComplete="off" value={values.nomineeName} onChange={e => setField("nomineeName", e.target.value)} placeholder="Enter their name" />{fieldError("nomineeName")}</label>
              <label className={styles.field}><span>Their mobile number <b>*</b></span><div className={styles.phoneInput}><span>+91</span><input inputMode="numeric" maxLength={10} value={values.nomineeMobile} onChange={e => setField("nomineeMobile", e.target.value.replace(/\D/g, ""))} placeholder="10-digit number" /></div>{fieldError("nomineeMobile")}</label>
              <label className={`${styles.field} ${styles.fullField}`}><span>Their email address <small>Optional</small></span><input type="email" value={values.nomineeEmail} onChange={e => setField("nomineeEmail", e.target.value)} placeholder="friend@example.com" />{fieldError("nomineeEmail")}</label>
            </div>
          </>}

          <div className={styles.formSectionTitle}><span>{values.referralType === "self_referral" ? "02" : "03"}</span><h3>What are they looking for?</h3><i /></div>
          <div className={styles.fieldGrid}>
            <label className={`${styles.field} ${styles.fullField}`}><span>Preferred RRL project <b>*</b></span><div className={styles.selectWrap}><select value={values.project} onChange={e => setField("project", e.target.value)}><option value="">Select a project</option>{referralProjectOptions.map(project => <option key={project} value={project}>{project}</option>)}</select><ChevronDown size={16} /></div>{fieldError("project")}</label>
            <label className={styles.field}><span>Preferred contact method</span><div className={styles.selectWrap}><select value={values.preferredContact} onChange={e => setField("preferredContact", e.target.value)}><option>Phone</option><option>WhatsApp</option><option>Email</option></select><ChevronDown size={16} /></div></label>
            <label className={styles.field}><span>I am a</span><div className={styles.selectWrap}><select value={values.residentType} onChange={e => setField("residentType", e.target.value)}><option>Resident</option><option>Non-resident Indian (NRI)</option><option>Other</option></select><ChevronDown size={16} /></div></label>
          </div>

          <div className={styles.consentGroup}>
            <label className={styles.consent}><input type="checkbox" checked={values.consent} onChange={e => setField("consent", e.target.checked)} /><span className={styles.checkMark}><Check size={12} /></span><span>I confirm I have permission to share these contact details with RRL Group. <b>*</b></span></label>{fieldError("consent")}
            <label className={styles.consent}><input type="checkbox" checked={values.termsConsent} onChange={e => setField("termsConsent", e.target.checked)} /><span className={styles.checkMark}><Check size={12} /></span><span>I agree to be contacted about this enquiry and understand the 2% reward applies to a successful sale under programme terms. <b>*</b></span></label>{fieldError("termsConsent")}
          </div>
          {serverMessage && <div className={submission === "error" ? styles.formError : styles.formSuccess} role="alert">{submission === "success" ? <CircleCheck size={18} /> : null}{serverMessage}</div>}
          {submission === "success" && <div className={styles.formSuccess} role="status"><CircleCheck size={18} />Thank you. Your details have been received by RRL Group.</div>}
          <button className={styles.submitButton} type="submit" disabled={submission === "sending"}>{submission === "sending" ? <><LoaderCircle size={17} className={styles.spinner} /> Sending your details</> : <>Submit your referral <ArrowRight size={17} /></>}</button>
          <p className={styles.formFootnote}>Your information will only be used to follow up on this enquiry.</p>
        </form>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerMain}><div className={styles.footerBrand}><Image src="/logo.png" alt="RRL Group" width={150} height={66} /><p>Beyond homes, a lifestyle.</p><a className={styles.instagramLink} href="https://www.instagram.com/rrl_builders/" target="_blank" rel="noreferrer"><Instagram size={15} /> Follow RRL on Instagram</a></div><div className={styles.footerNav}><span>EXPLORE</span><Link href="/projects">Our projects</Link><Link href="/projects/nc-216">NC216</Link><a href="#refer">Refer a friend</a><a href="#referral-form">Self referral</a><Link href="/about">About RRL</Link></div><div className={styles.footerContact}><span>LET’S TALK</span><a href="tel:+918494966966">+91 84949 66966</a><a href="mailto:enquiry@rrlbuildersanddevelopers.com"><Mail size={13} /> enquiry@rrlbuildersanddevelopers.com</a><Link href="/contact">Contact RRL <ArrowRight size={14} /></Link><p><MapPin size={14} /> RRL Towers, 4th Floor, Sampige Jala, Sarjapur, Attibele Rd, Bengaluru, Karnataka 561113</p></div></div>
        <div className={styles.footerClosing}><span>Wishing you a bright, happy and prosperous Diwali</span><strong>— Team RRL</strong><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  )
}

import { useEffect, useState } from "react"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const symptoms = [
  "Warmth, pain, and swollen joints",
  "Morning stiffness that lasts for more than one hour",
  "Swelling and tenderness in small joints, such as the wrists and toes",
  "Low-grade fever, weakness, and feeling tired",
]

const stages = [
  {
    stage: "Stage 1",
    area: "The surrounding layer of the joint gets affected. No damage to bone.",
    symptoms: "Puffiness, tenderness and morning stiffness of the joint",
  },
  {
    stage: "Stage 2",
    area: "Damage increases and extends to the structure inside called cartilage.",
    symptoms: "Joint stiffness increases, and as a result, movements will be restricted.",
  },
  {
    stage: "Stage 3",
    area: "Bone affected. Visible changes in X-ray.",
    symptoms: "Pain intensifies within the joints, and notable joint changes happen.",
  },
  {
    stage: "Stage 4",
    area: "Irreversible bone damage",
    symptoms: "Severe restricted movements.",
  },
]

const riskFactors = [
  { factor: "Familial genetic history", detail: "You have a higher chance of getting affected if rheumatoid arthritis is present within your close relatives." },
  { factor: "Sex", detail: "Women are affected 3 times more than men." },
  { factor: "Smoking", detail: "Smoking doubles the risk of RA." },
  { factor: "Obesity", detail: "You have a higher chance of rheumatoid arthritis if you are obese." },
  { factor: "Post-infections", detail: "Post-infections, such as Chikungunya, can increase the risk." },
]

const diagnosisBloodTests = [
  "Rheumatoid Factor (RF)",
  "Anti-CCP Antibody (ACPA)",
  "ESR (Erythrocyte Sedimentation Rate)",
]

const diagnosisImaging = [
  "X-rays",
  "Ultrasounds",
  "Magnetic Resonance Imaging (MRI)",
]

const medications = [
  { title: "NSAIDs and Corticosteroids", desc: "They are used to relieve short-term symptoms. But neither of them stops disease progression." },
  { title: "DMARDs", desc: "They alter our body's immune response. Methotrexate is the most common and widely used in India. Hydroxychloroquine, sulfasalazine, and leflunomide are alternative drugs used." },
  { title: "Biologic DMARDs", desc: "When traditional DMARDs fail, their modified forms are used. It includes drugs like TNF inhibitors, IL-6 inhibitors, and rituximab." },
  { title: "JAK Inhibitors", desc: "They can be used if biologic DMARDs are found not to work in patients." },
]

const nonMedApproaches = [
  { title: "Physiotherapy", desc: "Helps to improve the movements of the joints." },
  { title: "Occupational Therapy", desc: "Helps to protect joints during daily activities." },
  { title: "Personalised Yoga", desc: "Chance of improvement from fatigue and pain." },
  { title: "Smoking cessation", desc: "In smoker patients, to achieve a positive response." },
  { title: "Heat and Cold Therapy", desc: "Can provide relief from stiffness and acute swelling." },
]

const faqs = [
  { q: "Is Rheumatoid arthritis curable?", a: "Rheumatoid arthritis is not completely curable, but it can be effectively controlled. With early diagnosis and the right treatment, many people can reduce symptoms, prevent joint damage, and live a normal, active life." },
  { q: "What is the difference between Rheumatoid arthritis and normal arthritis?", a: "Rheumatoid arthritis is the attack of the body's own immune system. It is an autoimmune condition that affects both sides. Osteoarthritis is also called normal arthritis, which affects only one side. It is caused by excessive wear." },
  { q: "Does Rheumatoid arthritis only affect elderly people?", a: "No, Rheumatoid arthritis does not affect only elderly people. It can occur at any age, but it is most commonly seen in people between 30 and 60 years. It is also more common in women than in men." },
  { q: "Can I take Ayurvedic medicine with my Rheumatoid arthritis treatment?", a: "Yes, some Ayurvedic treatments may be used alongside standard Rheumatoid arthritis medications, but only under medical guidance. Always consult your rheumatologist before starting any Ayurvedic medicine, as some combinations may cause interactions." },
  { q: "How much does Rheumatoid arthritis treatment cost in India?", a: "Rheumatoid arthritis treatment costs in India vary widely, from around \u20B9500-\u20B92,000 per consultation to \u20B910,000-\u20B930,000 or more for advanced therapies.\nMany government schemes and insurance plans may help reduce the cost - talk to your doctor about available options." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

const tocItems = [
  { id: "what-is-ra", label: "What is RA?" },
  { id: "symptoms", label: "Common symptoms" },
  { id: "stages", label: "Stages of RA" },
  { id: "causes", label: "What causes RA" },
  { id: "diagnosis", label: "How RA is diagnosed" },
  { id: "treatment", label: "Treatment & costs" },
  { id: "managing-ra", label: "Living with RA" },
  { id: "when-to-see", label: "When to see a doctor" },
  { id: "faq", label: "FAQs" },
]

function ArthritisGuide() {
  const [activeSection, setActiveSection] = useState("what-is-ra")

  useEffect(() => {
    document.title = "Understanding Rheumatoid Arthritis | RheumaInsights"
    return () => { document.title = "RheumaInsights | Professional Rheumatology Resource" }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    )
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased" style={{}}>
      <Header />
      <main>

        {/* ═══════════ HERO ═══════════ */}
        <header style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 md:pt-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[14px] font-medium mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              <span>Home</span>
              <span>›</span>
              <span>Diseases &amp; Conditions</span>
              <span>›</span>
              <span style={{ color: "#ffffff" }}>Rheumatoid Arthritis</span>
            </div>

            {/* Split layout */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">

              {/* Left: Title + meta */}
              <div className="flex-1 pb-0">
                <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#a0e2e4", marginBottom: "12px" }}>A Patient Guide for India</p>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 5.5vw, 64px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                    color: "#ffffff",
                    marginBottom: "1.25rem",
                  }}
                >
                  Rheumatoid Arthritis
                </h1>

                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: "0", maxWidth: "520px" }}>
                  Rheumatoid arthritis is a long-term condition where the body's immune system attacks its own joints. This guide covers what RA is, its symptoms, causes, how doctors diagnose it, and the treatment options available in India.
                </p>

              </div>

              {/* Right: Image */}
              <div className="hidden md:block" style={{ width: "420px", flexShrink: 0, borderRadius: "8px 8px 0 0", overflow: "hidden", alignSelf: "stretch" }}>
                <img
                  src="/images/hero-slide-4.png"
                  alt="Rheumatoid Arthritis"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
              </div>

            </div>
          </div>

          {/* Nav Tabs */}
          <div style={{ backgroundColor: "#0a4f5a", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
              {[
                { label: "Symptoms", id: "symptoms", ids: ["symptoms", "what-is-ra"] },
                { label: "Treatment", id: "treatment", ids: ["treatment", "stages", "causes", "diagnosis"] },
                { label: "Doctors & Departments", id: "when-to-see", ids: ["when-to-see", "managing-ra", "faq"] },
              ].map((tab) => {
                const isActive = tab.ids.includes(activeSection)
                return (
                  <button
                    key={tab.label}
                    onClick={() => scrollToSection(tab.id)}
                    className="shrink-0 inline-block rounded-full px-6 py-3.5 text-[14px] font-medium transition-colors"
                    style={{
                      backgroundColor: isActive ? "#ffffff" : "rgba(255,255,255,0.12)",
                      color: isActive ? "#0f616e" : "#ffffff",
                    }}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </header>

        {/* ═══════════ ARTICLE BODY + TOC ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="lg:flex lg:gap-10">

              {/* ── Left: TOC ── */}
              <div className="hidden lg:block w-[320px] shrink-0">
                <div className="sticky top-[88px]">
                  <div style={{ backgroundColor: "#f5f7f9", border: "1px solid #e8ecf0", borderRadius: "4px", overflow: "hidden" }}>
                    <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#9aa3af", padding: "20px 20px 12px" }}>On This Page</p>
                    <nav className="flex flex-col">
                      {tocItems.map((s, i) => {
                        const isActive = activeSection === s.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => scrollToSection(s.id)}
                            className="text-left flex items-center gap-3 py-2.5 pr-5 transition-colors"
                            style={{ backgroundColor: isActive ? "#e8f4f5" : "transparent", paddingLeft: "0", borderBottom: "1px solid #f0f2f5" }}
                          >
                            <div style={{ width: 3, alignSelf: "stretch", backgroundColor: isActive ? "#0f616e" : "transparent", flexShrink: 0 }} />
                            <span style={{ fontSize: "11px", fontWeight: 600, color: isActive ? "#0f616e" : "#c0c8d0", minWidth: "18px" }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: "13.5px", color: isActive ? "#0f616e" : "#4a5568", fontWeight: isActive ? 600 : 400, lineHeight: 1.3 }}>
                              {s.label}
                            </span>
                          </button>
                        )
                      })}
                    </nav>
                  </div>
                </div>
              </div>

              {/* ── Right: Article Content ── */}
              <div className="flex-1 min-w-0" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* ── OVERVIEW ── */}
                <div id="overview" data-toc-section style={{ marginBottom: "2rem" }}>
                </div>

                {/* Author line hidden by request */}

                {/* Intro */}
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                  Have you ever experienced weakness or tiredness in your joints that makes it difficult to perform daily tasks? Do you often normalise these symptoms and ignore them? If you have experienced anything similar, this article covers everything you need to know.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                  Rheumatoid arthritis is a long-term health condition in which the body&apos;s immune system fights against itself. As a result, you often experience pain, swelling, and, when left untreated, long-lasting damage. The exact cause is unknown.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-5">
                  Rheumatoid arthritis is becoming increasingly common in India. <span style={{ backgroundColor: "rgba(26,163,181,0.12)", borderRadius: "3px", padding: "1px 4px" }}>It especially affects women between 40 and 60 years old.</span> Many people think of it as regular joint pain and avoid a rheumatologist consultation, which can lead to serious health issues.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-10">
                  <span style={{ backgroundColor: "rgba(250,136,90,0.13)", borderRadius: "3px", padding: "1px 4px" }}>With early diagnosis and proper treatment, RA can be controlled effectively.</span> This guide will help you understand all about rheumatoid arthritis (RA), its various causes, how it presents, how doctors diagnose cases, and the available treatment options.
                </p>

                {/* ── WHAT IS RA ── */}
                <div id="what-is-ra" style={{ marginBottom: "3.5rem", marginTop: "2.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    What is Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Joints are where two bones meet, such as your knuckles, knees, or wrists. Inside each joint is a thin lining called the synovium. The synovium produces fluid that helps your joints move smoothly and stay healthy.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In rheumatoid arthritis (RA), <span style={{ backgroundColor: "rgba(26,163,181,0.12)", borderRadius: "3px", padding: "1px 4px" }}>your body becomes confused and starts attacking its own joints rather than protecting them.</span> This is called an autoimmune condition. It often affects joints on both sides of your body, like both hands or both feet at the same time. Rheumatoid arthritis can also affect other parts of your body, like your skin, eyes, lungs, heart, and blood vessels.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    <span style={{ backgroundColor: "rgba(250,136,90,0.13)", borderRadius: "3px", padding: "1px 4px" }}>Rheumatoid arthritis is different from osteoarthritis</span>, which happens due to wear and tear as people age. Osteoarthritis often affects just one side of the body and does not cause tiredness like RA does.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    What are the symptoms of Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    The main symptoms of rheumatoid arthritis (RA) are:
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {symptoms.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    Rheumatoid arthritis symptoms don&apos;t stay the same all the time &mdash; they can come and go. Periods when symptoms get worse are called{" "}
                    <strong className="font-bold">flares</strong>, while times when you feel better are known as{" "}
                    <strong className="font-bold">remission</strong>. <span style={{ backgroundColor: "rgba(26,163,181,0.12)", borderRadius: "3px", padding: "1px 4px" }}>Early diagnosis plays an important role in preventing permanent joint damage.</span>
                  </p>
                </div>

                {/* ── INLINE CTA BANNER ── */}
                <div style={{ backgroundColor: "#0f616e", borderRadius: "14px", padding: "28px 32px", marginBottom: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "220px" }}>
                    <p style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "8px", lineHeight: 1.3 }}>Worried these symptoms sound familiar?</p>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.78)", lineHeight: 1.65 }}>Get a personal review from Dr. Raghavendra. Most patients leave their first visit with clarity on what&apos;s happening and a plan for next steps.</p>
                  </div>
                  <a
                    href="#"
                    style={{ display: "inline-block", backgroundColor: "#fa885a", color: "#ffffff", fontWeight: 600, fontSize: "14px", padding: "13px 26px", borderRadius: "9999px", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}
                  >
                    Book a Visit →
                  </a>
                </div>

                {/* ── STAGES ── */}
                <div id="stages" style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    Stages of Rheumatoid Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Rheumatoid arthritis progresses from mild to severe stages.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-left min-w-[680px]">
                      <thead>
                        <tr style={{ backgroundColor: "#e0f3f5" }}>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Stage</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Area affected</th>
                          <th className="p-4 text-[14px] font-bold text-navy-deep">Symptoms</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stages.map((item) => (
                          <tr key={item.stage} className="border-b border-[#dadfe8]">
                            <td className="p-4 text-[16px] font-semibold text-navy-deep align-top">{item.stage}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item.area}</td>
                            <td className="p-4 text-[16px] leading-[1.7] text-navy-deep align-top">{item.symptoms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Note */}
                  <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5" style={{ color: "#fd956a" }}>info</span>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      <strong className="font-semibold">Note:</strong> Not everyone progresses through all the stages. Early treatment can stop progression.
                    </p>
                  </div>
                </div>

                {/* ── CAUSES & RISK FACTORS ── */}
                <div id="causes" style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    What are the causes of Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    <span style={{ backgroundColor: "rgba(250,136,90,0.13)", borderRadius: "3px", padding: "1px 4px" }}>The exact cause of rheumatoid arthritis is unknown.</span> Researchers think it is caused by a combination of genetics, hormones, and environmental factors.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">
                    Your immune system normally protects your body from infections. In rheumatoid arthritis, it gets confused and starts attacking your own joints instead. <span style={{ backgroundColor: "rgba(26,163,181,0.12)", borderRadius: "3px", padding: "1px 4px" }}>Certain factors, like smoking or infections, may trigger this response.</span>
                  </p>

                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}
                  >
                    Risk Factors of Rheumatoid Arthritis
                  </h3>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.map((r, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{r.factor}.</strong> {r.detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    How does a doctor diagnose Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Your doctor may refer you to a rheumatologist for the diagnosis of rheumatoid arthritis. The diagnosis is based on several factors. Your doctor performs a complete physical examination, multiple blood tests, and X-rays to diagnose.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A detailed history about pain, swelling, the duration it will last, and any other medical history will be taken. The doctor will check your joint movement, colour changes, and for any palpable firm swellings.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                    <span style={{ backgroundColor: "rgba(250,136,90,0.13)", borderRadius: "3px", padding: "1px 4px" }}>There is no single test that confirms rheumatoid arthritis.</span> Rheumatologists recommend blood and imaging tests to reach a final diagnosis.
                  </p>

                  {/* Blood tests + Imaging -two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Blood Tests */}
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "1rem" }}>
                        Main blood tests include
                      </h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                        Rheumatologists usually recommend blood tests such as:
                      </p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosisBloodTests.map((test, i) => (
                          <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Imaging */}
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "1rem" }}>
                        Imaging test
                      </h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                        The various imaging techniques help to understand how bad the disease has progressed.
                      </p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosisImaging.map((test, i) => (
                          <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="treatment" style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    What are the treatment options available for Rheumatoid Arthritis?
                  </h2>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The main aim of treatment is to reduce the symptoms. <span style={{ backgroundColor: "rgba(26,163,181,0.12)", borderRadius: "3px", padding: "1px 4px" }}>Once treatment begins, you will be evaluated every 3-6 months to monitor the disease&apos;s progression.</span> If it does not improve, your doctor will increase the medication dosage or implement other methodologies.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                    Rheumatologists usually begin the treatment with medications and other non-medicated options. If the disease progression is not improved, surgery would be the last option.
                  </p>

                  {/* Medications */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Common medications used in Rheumatoid Arthritis
                  </h3>
                  <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                    {medications.map((med, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{med.title}:</strong> {med.desc}
                      </li>
                    ))}
                  </ul>

                  {/* Non-Medication */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Non-Medication Approaches
                  </h3>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                    {nonMedApproaches.map((item, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{item.title}:</strong> {item.desc}
                      </li>
                    ))}
                  </ul>

                  {/* Surgery */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Surgery
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Last resort for severe deformity unresponsive to medication. Surgery does not replace DMARDs.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    Types of surgeries include: synovectomy, tendon repair, and joint replacement.
                  </p>
                </div>

                {/* ── MANAGING RA ── */}
                <div id="managing-ra" style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    Managing Rheumatoid Arthritis on a Day-to-Day Basis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-10">
                    <span style={{ backgroundColor: "rgba(250,136,90,0.13)", borderRadius: "3px", padding: "1px 4px" }}>With appropriate treatment and supportive therapy, many people are leading an active life</span> despite the disease having a lifelong predilection.
                  </p>

                  {/* Diet */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}>
                    Importance of Diet and Nutrition
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">
                    The diet plays an important role in our daily lives. In rheumatoid arthritis, it plays a major role in keeping our body healthy, without any nutrient restrictions. Several anti-inflammatory foods, such as turmeric, ginger, black pepper, amla, flax seeds, spinach, and fenugreek, should be incorporated into daily meals.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">
                    Vegetarian options such as dal, paneer, curd, and soya should be incorporated to meet protein requirements.
                  </p>

                  {/* Ayurvedic */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}>
                    Ayurvedic evidence in Rheumatoid Arthritis
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    Several ayurvedic products have been studied for their efficacy. Ashwagandha, Shallaki/Boswellia, Turmeric/Curcumin, and Panchakarma are indicated by Ayurveda. These products can be used as an adjunct therapy along with the use of DMARDs. Possible drug interactions were also noticed. Hence, it is safe to proceed with a rheumatologist&apos;s opinion.
                  </p>
                </div>

                {/* ── EARLY RESPONSE ── */}
                <div style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "1rem", textTransform: "uppercase" }}
                  >
                    Early Response is the Key
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    When symptoms like joint stiffness on either side, generalised severe fatigue, and abnormal joint pain occur, it is always better to consult a rheumatologist.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <span style={{ backgroundColor: "rgba(26,163,181,0.12)", borderRadius: "3px", padding: "1px 4px" }}>The initial three-month duration is the window during which the damage is processed.</span> If we take the initiative to treat early, we can make a difference for the rest of our lives.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold" style={{ marginTop: "2rem" }}>
                    If you are experiencing persistent joint pain, stiffness, or swelling, don&apos;t ignore it. Early evaluation by a rheumatologist can make a significant difference in preventing long-term damage.
                  </p>
                </div>

                {/* ── WHEN TO SEE A RHEUMATOLOGIST ── */}
                <div id="when-to-see" style={{ marginBottom: "5rem", paddingTop: "2.5rem", marginTop: "0", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "2rem", textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "8px", textDecorationThickness: "2px" }}
                  >
                    When to see a rheumatologist
                  </h2>

                  <div style={{ backgroundColor: "#fdf3ee", borderRadius: "16px", padding: "32px" }}>
                    <div className="flex items-center gap-3" style={{ marginBottom: "1.5rem" }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#c0442a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="material-symbols-outlined text-white text-[18px]">priority_high</span>
                      </div>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#c0442a" }}>See a rheumatologist if you have any of these</p>
                    </div>

                    <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "2rem" }}>
                      {[
                        "Joint pain and swelling lasting more than 6 weeks",
                        "Morning stiffness that takes more than 30 minutes to ease",
                        "Pain in the same joints on both sides of the body",
                        "Trouble making a fist, gripping, or doing fine tasks like buttons",
                        "Unexplained fatigue along with joint pain",
                        "A family history of RA combined with new joint symptoms",
                      ].map((item, i) => (
                        <li key={i} className="text-[16px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>{item}</li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      style={{ display: "inline-block", backgroundColor: "#fa885a", color: "#ffffff", fontWeight: 600, fontSize: "14px", padding: "12px 24px", borderRadius: "9999px", textDecoration: "none" }}
                    >
                      Book a Specialist Visit →
                    </a>
                  </div>
                </div>

                <GoutNewsletter />

                <hr className="border-none border-t border-[#dcdcdc] mt-12" />

              </div>


            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="py-16 md:py-20 bg-ghost">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.8px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-ghost flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                      {faq.a.split("\n").map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER WITH WAVE ═══════════ */}
        <section className="w-full flex flex-col bg-ghost overflow-visible">
          <div style={{ height: "60px", backgroundColor: "#F5F5F5" }} />
          <svg
            className="w-full h-[24px] sm:h-[90px] md:h-[120px] block" style={{ color: "#0f616e" }}
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            fill="none"
          >
            <path
              d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
              fill="currentColor"
            />
          </svg>
          <div style={{ backgroundColor: "#0f616e" }} className="w-full overflow-visible">
            <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 pt-6 sm:pt-10">
              <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-16">
                <div className="flex-[1.1] flex flex-col items-center md:items-start justify-center py-4">
                  <h2
                    className="leading-[1.1] font-normal mb-12 md:mb-16 text-center md:text-left"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(36px, 5.5vw, 68px)",
                      letterSpacing: "-0.5px",
                      color: "#ffffff",
                    }}
                  >
                    Ready to get started?
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-7 md:gap-6">
                    <a
                      href="#"
                      className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90 text-center"
                      style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "16px 32px" }}
                    >
                      Schedule An Appointment
                    </a>
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-[15px] text-gray-100 opacity-90">or</span>
                      <a
                        href="#"
                        className="text-[15px] font-semibold underline underline-offset-[6px] hover:opacity-80 transition-opacity"
                        style={{ color: "#ffffff", textDecorationThickness: "2px" }}
                      >
                        let&apos;s get in touch
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/images/hero-consult.jpg"
                    alt="Doctor consulting with patient"
                    className="w-full block rounded-[4px] absolute bottom-0"
                    style={{ height: "clamp(300px, 50vw, 520px)", objectFit: "cover", objectPosition: "center 20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ NEWSLETTER ═══════════ */}
        <div className="pt-6 md:pt-10" style={{ backgroundColor: "#fdfdfe" }}>
          <Newsletter />
        </div>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default ArthritisGuide

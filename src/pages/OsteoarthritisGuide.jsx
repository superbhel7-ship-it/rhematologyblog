import { useEffect, useState } from "react"
import Header from "../components/Header"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const faqs = [
  {
    q: "Is osteoarthritis just a part of aging?",
    a: "Age is one of many risk factors like obesity and lack of nutrition. Aging alone does not inevitably affect your joints.",
  },
  {
    q: "Can osteoarthritis be cured?",
    a: "Though it cannot be cured, it can be effectively managed with better treatment options and small lifestyle changes.",
  },
  {
    q: "Which joints are most affected?",
    a: "Knees are the most commonly affected in India. This can be due to our cultural habits, like squatting or sitting on the floor.",
  },
  {
    q: "How is it different from rheumatoid arthritis?",
    a: "Osteoarthritis is due to wear and tear, while rheumatoid arthritis is an autoimmune condition where the immune system affects its own joints. In RA, multiple joints are affected at the same time.",
  },
  {
    q: "Is surgery always required?",
    a: "No. Surgery is only considered when other treatments like medicines and physiotherapy do not provide relief, and it is the last resort your doctor would recommend.",
  },
  {
    q: "Can diet and exercise help?",
    a: "Yes, they play a major role in reducing suffering and slowing progression. These lifestyle changes create a bigger impact.",
  },
]

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "what-is-oa", label: "What Is Osteoarthritis?" },
  { id: "types", label: "Types of OA" },
  { id: "causes", label: "Causes" },
  { id: "symptoms", label: "Signs & Symptoms" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "living-well", label: "Adapting to the New Normal" },
  { id: "faq", label: "FAQs" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function OsteoarthritisGuide() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    document.title = "Osteoarthritis: What It Is, Symptoms, Causes & Treatment | RheumaInsights"
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
    const sections = document.querySelectorAll("[data-toc-section]")
    sections.forEach((s) => observer.observe(s))
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
    <div className="landing-page bg-white text-navy-deep antialiased">
      {/* <Header /> */}

      <header>
          <div style={{ backgroundColor: "#0f616e" }} className="text-white">
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-10 md:pt-10 md:pb-12 flex flex-col items-start">
              <div className="flex items-center gap-2" style={{ marginBottom: "24px" }}>
                <span className="material-symbols-outlined text-[16px]" style={{ color: "#a0e2e4" }}>chevron_left</span>
                <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4" }}>Diseases &amp; Conditions</span>
              </div>

              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 6vw, 64px)",
                  fontWeight: 400,
                  letterSpacing: "-0.5px",
                  color: "#ffffff",
                  maxWidth: "1120px",
                }}
              >
               Osteoarthritis - An Overview
              </h1>

              {/* Author meta hidden by request */}
            </div>
          </div>

          <div style={{ backgroundColor: "#0a4f5a" }} className="border-t border-white/20">
            <div className="max-w-7xl mx-auto px-6 md:pl-[2%] md:pr-[8%] py-6 flex justify-start gap-5 overflow-x-auto">
              {[
                { label: "Symptoms &\nCauses", id: "symptoms" },
                { label: "Diagnosis &\nTreatment", id: "diagnosis" },
                { label: "Doctors &\nDepartments", id: "doctors" },
              ].map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`inline-block rounded-full px-5 py-2.5 text-[13px] font-medium leading-tight text-left whitespace-nowrap transition-colors cursor-pointer ${
                    i === 0
                      ? "bg-white text-navy-deep"
                      : "bg-white/[0.12] text-white hover:bg-white/20"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>


      <main>
        {/* <section style={{ backgroundColor: "#0f616e" }} className="text-white">
          <div className="max-w-7xl mx-auto px-6 pt-8 pb-10 md:pt-10 md:pb-12 flex flex-col items-start">
            <div className="flex items-center gap-2" style={{ marginBottom: "24px" }}>
              <span className="material-symbols-outlined text-[16px]" style={{ color: "#a0e2e4" }}>chevron_left</span>
              <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4" }}>Diseases &amp; Conditions</span>
            </div>
            <h1
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 6vw, 64px)",
                fontWeight: 400,
                letterSpacing: "-0.5px",
                color: "#ffffff",
                maxWidth: "1120px",
              }}
            >
              Osteoarthritis - An Overview
            </h1>
            {/* <a href="#" className="inline-flex items-center gap-3 font-semibold" style={{ color: "#ffffff", fontSize: "13px", lineHeight: "20px" }}>
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              Request an Appointment
            </a> */}
          {/* </div> */}
        {/* </section> */} 

        {/* ═══════════ ARTICLE BODY + SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 pb-10 pt-8 md:pb-14 md:pt-10">
            <div className="lg:flex lg:gap-14">

              {/* ── Left: Article ── */}
              <div className="flex-1 min-w-0" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>

                {/* Author line */}
                <div className="flex items-center gap-3 mb-10">
                  <img src="/raghav.png" alt="Dr. Raghavendra H" className="w-10 h-10 rounded-full object-cover object-top bg-[#f0cfc4]" />
                  <div>
                    <p className="text-sm font-semibold text-navy-deep leading-tight">Dr. Raghavendra H</p>
                    <p className="text-xs text-navy-muted">Rheumatologist &middot; Reviewed May 2026</p>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    {["link", "mail", "share"].map((icon) => (
                      <button key={icon} className="w-8 h-8 rounded-full bg-ghost flex items-center justify-center text-navy-muted hover:text-navy-deep transition-colors">
                        <span className="material-symbols-outlined text-[16px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── OVERVIEW ── */}
                <div id="overview" data-toc-section>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    While walking comfortably across your home or climbing the stairs, you feel exhausted and tired. People around you become concerned, but you shrug it off, saying, "I'm just getting older." The pain you suffer is not something to ignore. For many Indians, this can be a first sign of osteoarthritis.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is a condition that slowly affects the joints over time. If you don't manage it early, it disturbs your everyday activities. Walking, sitting, or even holding objects becomes a great task to achieve. There have been various treatment options, ranging from medications to complex surgical procedures. The good news is that disease progression can be managed if treatment begins early.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is no longer just a condition concerned with aging - it has quietly become a major global health concern. In 2021, an estimated <strong className="font-semibold text-navy-deep">374.7 million people worldwide</strong> were living with Knee Osteoarthritis, an increase of 234.5% since 1990.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "2.5rem" }}>
                    This is a practical guide that will help you understand what osteoarthritis is, why it happens to you, how you can find out if you suffer from the condition, and what treatment options are available in India.
                  </p>
                </div>

                {/* ── WHAT IS OA ── */}
                <div id="what-is-oa" data-toc-section style={{ marginBottom: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Is Osteoarthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    We must first know how a joint works before understanding osteoarthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A joint is where two bones meet. The ends of these bones are covered with a soft and flexible tissue called cartilage. This cushion-like tissue allows you to move easily without friction. In osteoarthritis, this cartilage gradually wears down. As the cushion becomes thin, the bones start to rub against each other. This causes pain, stiffness, swelling, and reduced movement.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    One can imagine it as a door hinge that has lost its oil. It still works, but every movement feels very rough and uncomfortable. Osteoarthritis usually develops slowly, but with the right care, most people can manage their symptoms and continue to lead active lives.
                  </p>

                  <h3
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}
                  >
                    How Common Is Osteoarthritis in India?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Osteoarthritis has now become very common in India. Studies estimate that around 22% to 39% of adults over 40 are affected - roughly one in three to four adults.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Knee osteoarthritis is the most common type, especially among women after menopause. Daily habits like squatting and sitting for long periods on the floor for meals or during prayers can increase stress on the knees. This makes osteoarthritis one of the leading causes of mobility issues in the country.
                  </p>

                  <h3
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}
                  >
                    Who Is More Likely to Get Osteoarthritis?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    If you are obese and aged above 45 years with a family history of joint problems, you might have a higher risk. Factors such as increasing life expectancy, higher rates of obesity, and more sedentary lifestyles are contributing to rising numbers.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Frequent squatting, sitting cross-legged, and climbing stairs can add extra strain on the knees over time. Physically demanding work like farming or construction, and previous joint injuries, make the condition much worse.
                  </p>
                </div>

                {/* ── TYPES ── */}
                <div id="types" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1rem" }}
                  >
                    Types of Osteoarthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Osteoarthritis doesn't affect every joint the same way. Each of your joint complaints are different on their own.
                  </p>

                  {[
                    { title: "Knees - the daily workhorses", desc: "This is the most commonly affected joint in India. Simple things like climbing stairs, squatting, or getting up from the floor can feel like a task. That stubborn pain reminds you of every step you take." },
                    { title: "Hips - the hidden troublemaker", desc: "Instead of obvious joint pain, it shows up as a deep ache in the inner thigh. You might notice stiffness while walking or difficulty sitting cross-legged. Most people don't connect these symptoms to the hip joint directly." },
                    { title: "Hands - the silent sufferers", desc: "When your hands become the victim, especially the fingers and the base of the thumb, everyday tasks become very tricky. Opening jars, buttoning clothes, or even holding a pen can feel uncomfortable. The joints may look slightly swollen over time." },
                    { title: "Strained spine", desc: "When you sit for long hours, your spine and neck bear the brunt. It often shows up as stiffness in the neck or lower back. Sometimes, it may even cause radiating discomfort if nearby nerves are irritated." },
                    { title: "Feet and ankles - the collapsed support system", desc: "Your feet and ankles quietly support your entire body, so when osteoarthritis affects them, standing or walking for long periods can become very painful. You might feel stiffness, tenderness, or discomfort with every step." },
                  ].map((type, i) => (
                    <div key={i} style={{ marginBottom: "1.25rem", paddingTop: i === 0 ? 0 : "1.25rem", borderTop: i === 0 ? "none" : "1px solid #dadfe8" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "0.5rem" }}>{type.title}</h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep">{type.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What Causes Osteoarthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Osteoarthritis doesn't usually have a single cause. It develops over time due to a mix of factors.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Age and Wear Over Time
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    As we grow older, cartilage becomes less flexible and loses its capacity to repair or heal on its own. However, aging alone does not contribute to the disease. If you have a poor lifestyle with a lack of exercise and unhealthy diet patterns, they add up to your ageing journey.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Lifestyle and Physical Factors
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    Lifestyle and physical factors play a big role in the disease:
                  </p>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Excess body weight puts extra pressure on your joints, making them wear in due course.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">If you are a salesperson or a teacher, the nature of the job strains joints over time. Likewise, if your workplace demands continuous standing or maintaining the same posture, you can become a victim of osteoarthritis over time.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Your healed injuries can sometimes become your silent villain, increasing the risk even years later.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Risk Factors Common in India
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Though we reside in a tropical region where abundant vitamin D is available from the sun, most of us suffer from Vitamin D deficiency. This affects bone and joint health and influences bone integrity and strength.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Though frequent squatting and floor sitting help in deep knee flexion, as you age, they strain your joints slowly.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Among all forms, knee osteoarthritis stands out as particularly common - with a noticeably higher prevalence among older adults, especially women. Hormonal changes, bone health, and longer life expectancy all contribute to this pattern. The number of new cases continues to rise, driven by a combination of ageing populations, rising obesity rates, and increasingly sedentary lifestyles.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Signs and Symptoms You Should Look For
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Osteoarthritis usually develops gradually. There are a few early signs you might notice.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    The Early Signs
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    At first, you begin to feel tired. Slowly, small activities become great tasks. Your joints start becoming stiff. These symptoms often improve once you start moving. Gradually, you may start hearing grinding and creaking sounds.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    As Your Condition Progresses
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    As your condition becomes worse, your pain refuses to disappear even after you rest. Your joints become swollen and red. Your knees wouldn't let you climb stairs, and your fingers would need help opening a tight jar.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    When Should You See a Doctor?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Early visits to specialists help you diagnose the condition as early as possible. A rheumatologist is the specialist who can properly evaluate your joint problems and guide you through the treatment.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    When the pain starts disturbing your sleep and the stiffness hinders your daily activities, you should definitely consider seeing a doctor.
                  </p>
                </div>

                {/* ── KEY FACTORS divider ── */}
                <hr style={{ border: "none", borderTop: "1px solid #dcdcdc", marginTop: "1rem" }} />
                <div style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Key Factors to Consider for Osteoarthritis
                  </h2>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.75rem" }}>
                    Effective management begins with understanding the factors most relevant to your situation:
                  </p>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                    {[
                      "Accurate, early diagnosis to prevent silent disease progression",
                      "Identifying reversible risk factors such as weight, activity level, and Vitamin D status",
                      "Personalised physiotherapy and muscle-strengthening plans",
                      "Dietary guidance and weight management tailored to your profile",
                      "Regular monitoring of joint health and imaging where needed",
                      "Distinguishing osteoarthritis from conditions like rheumatoid arthritis and post-chikungunya arthritis",
                    ].map((item, i) => (
                      <li key={i} style={{ color: "#182439", fontSize: "16px", lineHeight: 1.8, marginBottom: "0.25rem", fontWeight: 500 }}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[16px] leading-[1.8] text-navy-muted">
                    At RheumaInsights, our rheumatologists specialise in comprehensive osteoarthritis care. With evidence-based protocols, personalised treatment plans, and a patient-first approach, we help you manage symptoms effectively and protect your joints for the long term.
                  </p>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #dcdcdc", marginBottom: "2.5rem" }} />

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "2.5rem" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Is Osteoarthritis Diagnosed?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is diagnosed by physical examination, imaging tests, and blood tests. Your doctor asks about the duration of pain and discomfort, if you have suffered any injury to that same joint in the past, any family history of the condition, and whether the pain is relieved by rest. This conversation helps the doctor rule out conditions like rheumatoid arthritis and gout that mimic osteoarthritis.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "0.75rem", color: "#0f616e" }}>Physical Examination</h3>
                      <p className="text-[16px] leading-[1.75] text-navy-deep">
                        Initially, the doctor checks if you have any obvious swelling or redness at the affected site, pain while the physician touches the joint, to what extent you are able to move your joint, and how flexible your joint is.
                      </p>
                    </div>
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "0.75rem", color: "#0f616e" }}>Blood Tests</h3>
                      <p className="text-[16px] leading-[1.75] text-navy-deep">
                        There is no specific blood test for osteoarthritis. Tests are mainly done to rule out other conditions like rheumatoid arthritis.
                      </p>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Imaging Tests
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Once the doctor examines the affected site completely, they proceed with imaging tests, commonly used to look for cartilage loss and bone changes.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    MRI is not routine for osteoarthritis - it is used when the situation needs a closer, more detailed picture beyond what an X-ray can show. MRI scans are needed only in early cases where symptoms don't match the site, or prior to surgeries.
                  </p>
                </div>

                {/* ── TREATMENT ── */}
                <div id="treatment" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How Can Osteoarthritis Be Treated?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    While osteoarthritis cannot be reversed completely, treatment can help reduce your pain and improve your quality of life.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Medications
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    Some medicines your doctor can prescribe are:
                  </p>
                  <ul className="space-y-3 mb-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Paracetamol, like Calpol, Crocin, for mild pain</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Anti-inflammatory medicines like ibuprofen or diclofenac ease your pain and swelling</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Topical gels like Diclofenac or Volini for local pain relief</li>
                  </ul>
                  <p className="text-[16px] leading-[1.75] text-navy-muted italic" style={{ marginBottom: "1.75rem" }}>
                    Affordable generic versions are available at government Jan Aushadhi stores. But medicines must be consumed only based on the doctor's prescription.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Physiotherapy and Exercise
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    You will start to lose if you fail to move. Physiotherapy is one of the most effective yet underused treatments for osteoarthritis.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Exercises help strengthen muscles around the joint, reducing stress on it. Activities like walking, swimming, and yoga are especially helpful. Rest alone is not the solution - gentle, regular movement is always essential.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Advanced Treatment Options
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    If basic treatments are not enough, your doctor can prescribe alternate treatments in the later stages:
                  </p>
                  <ul className="space-y-3 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Steroid injections provide short-term relief from your pain</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Hyaluronic acid injections lubricate your joints to reduce friction while you move</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Knee or hip replacement surgery is considered in severe cases, when other treatment options fail to help. Knee replacement surgeries are covered under government schemes like PM-JAY for eligible patients.</li>
                  </ul>
                </div>

                {/* ── LIVING WELL ── */}
                <div id="living-well" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Adapting to the New Normal
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Many people live active, fulfilling lives despite osteoarthritis. Small lifestyle changes can make a big difference. Some of the tiny efforts that help you take a great leap are:
                  </p>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {[
                      "Losing even 5 kg can significantly reduce strain on your knees",
                      "Adding turmeric, ginger, amla, and fatty fish to your diet",
                      "Choosing low-impact activities like yoga or cycling",
                      "Avoiding frequent squatting or sitting on the floor as you eat and pray",
                      "Using support like a walking stick if needed",
                      "Wearing comfortable orthopaedic shoes to support your weight-bearing ankle",
                      "Managing emotional health is absolutely important. Long-term pain can affect your mood and disturb your sleep, so seeking support when needed is always recommended.",
                    ].map((item, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* ── WHEN TO CONSULT ── */}
                <div style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    When to Consult a Rheumatologist
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    If you've been dealing with joint pain for a while, getting a proper diagnosis is important. Early treatment can help you stay active and prevent worsening of symptoms. A rheumatologist can confirm whether you have osteoarthritis, rule out other conditions, and build a good treatment plan that suits your lifestyle and stage of the condition.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold">
                    Early assessment means more options and better outcomes.
                  </p>
                </div>

                {/* ── TAKE NEXT STEP ── */}
                <div style={{ backgroundColor: "#0f616e", color: "#ffffff", padding: "40px 36px", marginBottom: "48px", borderRadius: 0 }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "16px" }}>
                    Take the Next Step
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>
                    If the symptoms discussed in this article sound familiar, a proper diagnosis is the need of the hour. Joint pain that is persistent, limiting, or getting worse is not something to be ignored. A rheumatologist can give you clarity on what's happening to your joints and a plan for managing it. The earlier you take action, the healthier your life can be.
                  </p>
                  <a
                    href="#"
                    style={{ display: "inline-block", backgroundColor: "#ffffff", color: "#0f616e", fontWeight: 700, fontSize: "15px", padding: "12px 28px", borderRadius: "9999px", textDecoration: "none" }}
                  >
                    Book Your First Visit
                  </a>
                </div>

                {/* ── NEWSLETTER ── */}
                <GoutNewsletter />

                {/* ── REFERENCES ── */}
                <div style={{ borderTop: "1px solid #dadfe8", paddingTop: "2rem", marginTop: "2rem", marginBottom: "2rem" }}>
                  <p className="text-[13px] leading-[1.7] text-navy-muted italic" style={{ marginBottom: "2rem" }}>
                    Medically reviewed by Dr. Raghavendra H, Consultant Rheumatologist. Last updated: May 2026. This content is for informational purposes only and does not substitute professional medical advice.
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-muted" style={{ marginBottom: "1rem" }}>References</p>
                  <ol className="space-y-3" style={{ paddingLeft: "1.25rem" }}>
                    {[
                      "Chopra A, et al. COPCORD India Study. Indian Journal of Rheumatology. 2012.",
                      "Indian Rheumatology Association (IRA) Guidelines on Osteoarthritis Management.",
                      "Mayo Clinic. Osteoarthritis: Symptoms and Causes. mayoclinic.org.",
                      "Cleveland Clinic. Osteoarthritis Overview. clevelandclinic.org.",
                      "Hopkins Medicine. www.hopkinsmedicine.org.",
                      "Arthritis Foundation. www.arthritis.org.",
                      "None RT, Bandi PVS, None AR. Prevalence and Clinical Profile of OA Knee. Journal of Contemporary Clinical Practice. 2025;11(10):399-404.",
                      "Ouyang Y, Dai M. Global burden of knee osteoarthritis. J Orthop Surg Res. 2025;20(1):766. doi:10.1186/s13018-025-06140-0.",
                    ].map((ref, i) => (
                      <li key={i} className="text-[13px] leading-[1.65] text-navy-muted" style={{ listStyleType: "decimal" }}>{ref}</li>
                    ))}
                  </ol>
                </div>

                <hr className="border-none border-t border-[#dcdcdc] mt-10" />
              </div>

              {/* ── Right: TOC + CTA Sidebar ── */}
              <div className="hidden lg:block w-[320px] shrink-0">
                <div className="sticky top-[88px]">

                  <div className="bg-[#edf2fc] py-5 px-6 mb-6" style={{ borderRadius: 0 }}>
                    <h3 className="text-navy-deep mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.2 }}>
                      Table of Contents
                    </h3>
                    <nav className="flex flex-col">
                      {tocSections.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => scrollToSection(s.id)}
                          className="text-left py-2 border-b border-navy-deep/8 last:border-0"
                        >
                          <span
                            className={`text-[13.5px] ${activeSection === s.id ? "text-navy-deep font-semibold" : "text-navy-deep/70 hover:text-navy-deep"}`}
                            style={{ textDecoration: "underline", textDecorationColor: "currentColor", textUnderlineOffset: "4px", textDecorationThickness: "1px" }}
                          >
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" data-toc-section className="py-16 md:py-20 bg-ghost">
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
                      <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-45" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <p className="text-sm text-navy-muted leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default OsteoarthritisGuide

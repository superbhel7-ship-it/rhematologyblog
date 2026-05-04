import { useEffect, useState } from "react"
import Header from "../components/Header"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const faqs = [
  {
    q: "Can I continue working with Osteoarthritis?",
    a: "Yes. With the right adjustments - making travel less tiring, comfortable seating, and taking breaks to move in between - you can continue working.",
  },
  {
    q: "Is walking good for knee Osteoarthritis?",
    a: "Yes. It strengthens your muscles and supports joint health. Just avoid pushing through sharp pain.",
  },
  {
    q: "What is a practical Indian diet for Osteoarthritis?",
    a: "A balanced diet with turmeric, ginger, whole grains, vegetables, and curd, while limiting fried, refined, and sugary foods.",
  },
  {
    q: "Can yoga replace physiotherapy?",
    a: "No. Yoga helps, but physiotherapy provides targeted strengthening to joints as well as supporting muscles. Both practices help ease pain and strengthen your joints.",
  },
  {
    q: "How do I manage night pain?",
    a: "Try using a warm compress before bed and supportive pillows. If pain persists, consult your doctor.",
  },
  {
    q: "Do supplements really help?",
    a: "Results vary. Some people benefit while others may not. Always seek medical advice first.",
  },
]

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "oa-over-time", label: "OA Over Time" },
  { id: "pain-flares", label: "Managing Pain & Flares" },
  { id: "eating", label: "Eating for Joint Health" },
  { id: "exercise", label: "Staying Active" },
  { id: "mental-health", label: "Mental Health" },
  { id: "daily-life", label: "Making Daily Life Easier" },
  { id: "costs", label: "Managing Expenses in India" },
  { id: "faq", label: "FAQs" },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function OsteoarthritisLiving() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    document.title = "Living With Osteoarthritis: Daily Habits That Make a Real Difference | RheumaInsights"
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
      <Header />
      <main>
        <section className="custom-approach-section relative" style={{ backgroundColor: "#F5F5F5", overflow: "hidden" }}>
          <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: "clamp(48px, 6vw, 76px)", paddingBottom: "clamp(36px, 5vw, 64px)" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "#0f616e",
                maxWidth: "980px",
              }}
            >
              Living With Osteoarthritis: Daily Habits That Make a Real Difference
            </h1>
          </div>
          <div style={{ lineHeight: 0, backgroundColor: "#F5F5F5" }}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "56px" }}>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
            </svg>
          </div>
        </section>

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
                    Rita is a 56-year-old first-time nanny. The excitement of being a new granny and dreams of enjoying her retirement journey were shattered the moment she was diagnosed with osteoarthritis. Being diagnosed can feel overwhelming at first. But it doesn't mean your life has to shrink around pain.
                  </p>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    In reality, the small choices you make every day - what you eat, how you move, how you rest, and how you care for your mind - can truly shape how you feel. Think of managing osteoarthritis as building a strong bond with your body. It's not about doing things perfectly, but taking little steps consistently. Over time, even these small habits can add up to meaningful relief.
                  </p>
                </div>

                {/* ── OA OVER TIME ── */}
                <div id="oa-over-time" data-toc-section style={{ marginBottom: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Understanding Osteoarthritis Over Time
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Osteoarthritis is a long-term condition, and it doesn't follow a straight path. Some days may feel much lighter and easier, while others may hit you hard with stiffness or discomfort. For many people, it progresses slowly or stays stable for many years, based on their healthy routine.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Once diagnosed, one shouldn't wait for a miracle pill that reverses the entire condition. Our focus must shift to staying active and healthy with proper medical support.
                  </p>

                  <div style={{ borderLeft: "4px solid #1AA3B5", backgroundColor: "#E0F3F5", padding: "20px 24px", borderRadius: "0 4px 4px 0", marginTop: "1.5rem" }}>
                    <p className="text-[15px] font-bold text-navy-deep" style={{ marginBottom: "8px" }}>The most effective approach</p>
                    <p className="text-[15px] leading-[1.75] text-navy-deep">
                      The most effective approach to arthritis combines self-care with adequate medical treatment. Neither alone is enough.
                    </p>
                  </div>
                </div>

                {/* ── PAIN & FLARES ── */}
                <div id="pain-flares" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Pain and Flares at Home
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    One of the most useful skills when living with osteoarthritis is learning how to respond to changes in your pain.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    What Is a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A flare is a temporary spike in your pain, swelling, and stiffness. It can be triggered when you overuse the joint, sit still for too long, when the weather turns cold, or even due to stress.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    What Helps During a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    During a flare, it is better to take ample rest. A cold pack for 15–20 minutes can reduce swelling, while a warm pack works better for easing stiffness. Taking medicines as prescribed and putting less pressure on the joint - using support if needed - makes the phase more manageable. Whenever necessary, do not forget to use your walking stick or a brace.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem", marginTop: "1.75rem" }}>
                    How to Prevent Flares
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A steady and healthy routine makes a big difference. Do not overwork your joints on good days. Stay consistent with gentle exercise, maintain a healthy weight, and try to have a balanced diet. Keeping yourself warm in colder weather can help reduce the frequency of flares.
                  </p>
                </div>

                {/* ── EATING ── */}
                <div id="eating" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Eating for Joint Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    There isn't a strict "Osteoarthritis diet," but your daily food choices can either help calm the swelling or make it worse.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    Foods for Your Joints
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Oily fish such as mackerel, sardines, rohu, and hilsa provide omega-3 fatty acids that help reduce inflammation.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">A variety of fruits and vegetables like papaya, spinach, and carrots supply antioxidants that support joint health.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Whole grains such as brown rice, jowar, bajra, and oats help with weight control and pain.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Calcium-rich foods like curd, ragi, and sesame seeds strengthen bones.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Using healthier oils like mustard oil or cold-pressed coconut oil instead of refined oils can also be beneficial.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    Foods to Avoid
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Deep-fried foods like pakoras and pooris</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Foods made from maida - white bread, biscuits - and sugary items like mithais and soft drinks can worsen pain.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Packaged and preserved snacks contain high levels of salt and unhealthy fats that negatively impact joint health.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    Simple Indian Additions That Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Your everyday kitchen already offers powerful support. Turmeric and ginger help reduce pain and swelling, while amla - rich in vitamin C - supports cartilage health. Using these regularly in your dishes makes you feel light and keeps your bones strong.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    What About Supplements?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Some people consider supplements such as glucosamine and chondroitin, although results vary. Vitamin D is especially important in India due to prevailing deficiencies. Fish oil capsules can be helpful for those who don't consume fish regularly. Always consult your doctor before starting any supplement.
                  </p>
                </div>

                {/* ── EXERCISE ── */}
                <div id="exercise" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Staying Active Without Overdoing It
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Movement is one of the most effective ways to manage osteoarthritis. The key is to choose the right kind of activity that suits your condition.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    What Types of Exercise Help?
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Strengthening exercises like quadriceps workouts reduce stress on joints.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Low-impact activities like walking, cycling, or swimming improve overall fitness.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Low-impact aerobic exercises increase flexibility.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Gentle stretching helps ease stiffness.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Balancing exercises lower the risk of falling.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    During a Flare
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    During a flare, switch to gentler or seated exercises - reduce the intensity rather than stopping completely. As symptoms improve, you can gradually return to your usual routine.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    Is Yoga Really Helpful?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Yoga can be a gentle and supportive addition. Some studies suggest it may help improve pain, flexibility, and joint function. Safer options include chair yoga and modified standing poses. As these are slow and rhythmic movements, they don't stress your joints. Deep squats or high-pressure positions are best avoided.
                  </p>
                </div>

                {/* ── MENTAL HEALTH ── */}
                <div id="mental-health" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Taking Care of Your Mental Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Living with this condition can affect your mood more than just your joints. Many people with osteoarthritis experience low mood, anxiety, and poor sleep. This is common, and you are not alone - it deserves attention.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Disturbed sleep, inability to follow your daily routine, and even some of the lifestyle changes like eating healthy and exercising can make you feel anxious and isolated. Studies show that when you are too depressed or anxious, your tolerance to pain may drop. Joining clubs or trusts for arthritis patients helps you build a healthier, like-minded community - making healthy habits more enjoyable.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    What Can Help
                  </h3>
                  <ul className="space-y-4 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Breaking tasks into smaller, manageable steps while setting realistic daily goals makes everyday life feel less overwhelming.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Practising breathing or relaxation techniques can help during difficult moments.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Counselling or cognitive behavioural therapy - available online too - may also be useful.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Staying connected with family, friends, or support groups gives emotional support and reduces feelings of isolation.</li>
                  </ul>
                </div>

                {/* ── DAILY LIFE ── */}
                <div id="daily-life" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Making Daily Life Easier
                  </h2>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    At Work
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Set up your chair and desk comfortably. Keep your feet flat on the floor and take short breaks every 45–60 minutes to reduce strain. If needed, discuss modified duties with your employer to stay productive without worsening symptoms.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    While Travelling
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Choose aisle seats to allow easier movement and take time to stretch or walk every 30–45 minutes to prevent stiffness. Carry medicines with you and avoid tightly packed schedules. Eat healthy, rest well, and wear comfortable shoes with supportive soles. Don't hesitate to customise shoes for your needs if required.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    At Home
                  </h3>
                  <ul className="space-y-4 mb-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Install grab rails in the bathroom to make walking easier.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Use non-slip mats and western lavatories to avoid squatting.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Use long-handled kitchen tools to reduce strain on your joints.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Avoid sitting on the floor for meals and prayers to reduce strain on your knees.</li>
                  </ul>
                </div>

                {/* ── COSTS ── */}
                <div id="costs" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing the Expenses in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Long-term care doesn't always have to be expensive. Jan Aushadhi stores offer generic medicines at affordable prices. Government hospitals provide physiotherapy sessions, and telemedicine services can reduce your travel costs significantly.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    Helpful Schemes
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">Ayushman Bharat (PM-JAY):</strong> Can cover up to ₹5 lakh for major surgeries such as knee replacement at specific hospitals.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">CGHS and ESI:</strong> Provide treatment support including physiotherapy, medicines, and referrals for surgeries for eligible individuals.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">eSanjeevani:</strong> Offers free online doctor consultations - especially helpful for people in remote areas or those with limited mobility.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem" }}>
                    Regular Check-Ups Matter
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Even if symptoms feel stable, regular reviews will help you stay on track. Your doctor can monitor disease progression, adjust medicines when needed, and address issues early. A yearly check-up is always recommended - doctors may notice changes in symptoms that you might miss.
                  </p>
                </div>

                {/* ── KEY FACTORS divider ── */}
                <hr style={{ border: "none", borderTop: "1px solid #dcdcdc", marginTop: "1rem" }} />
                <div style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.5px", color: "#0f616e", marginBottom: "2rem" }}
                  >
                    Final Thought
                  </h2>
                  <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                    Living with osteoarthritis is not about making drastic changes overnight. It's about building steady, sustainable habits that support your body over time. When you stay consistent, listen to your body, and make thoughtful daily choices, it's entirely possible to live an active and fulfilling life with osteoarthritis.
                  </p>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #dcdcdc", marginBottom: "2.5rem" }} />

                {/* ── TAKE NEXT STEP ── */}
                <div style={{ backgroundColor: "#0f616e", color: "#ffffff", padding: "40px 36px", marginBottom: "48px", borderRadius: 0 }}>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "16px" }}>
                    Take the Next Step
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>
                    Managing osteoarthritis well requires a plan that fits your life. A rheumatologist can review your symptoms, adjust your treatment, and guide you through the daily habits that matter most for your specific condition.
                  </p>
                  <a
                    href="#"
                    style={{ display: "inline-block", backgroundColor: "#ffffff", color: "#0f616e", fontWeight: 700, fontSize: "15px", padding: "12px 28px", borderRadius: "9999px", textDecoration: "none" }}
                  >
                    Book Your First Visit
                  </a>
                </div>

                {/* ── FAQ ── */}
                <div id="faq" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 4vw, 1.875rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Frequently Asked Questions
                  </h2>
                  <div>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{ borderTop: "1px solid #dadfe8", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
                        <p className="text-[17px] font-semibold text-navy-deep mb-3">{i + 1}. {faq.q}</p>
                        <p className="text-[16px] leading-[1.8] text-navy-muted">{faq.a}</p>
                      </div>
                    ))}
                  </div>
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
                      "Cramer H, et al. Yoga for Osteoarthritis: A Systematic Review and Meta-analysis. Current Rheumatology Reports. 2019.",
                      "British Dietetic Association. Osteoarthritis and Diet. bda.uk.com.",
                      "Kolasinski SL, et al. ACR/Arthritis Foundation Guideline for the Management of OA. Arthritis Care and Research. 2020.",
                      "Casagrande P, et al. Effects of Yoga on Depressive Symptoms in Rheumatic Diseases. PM&R Journal. 2023.",
                      "Indian Rheumatology Association. Patient Resources. indianrheumatology.org.",
                      "Nazarinasab M, et al. Investigating mental health in patients with osteoarthritis. Reumatologia. 2017;55(4):183-188. doi:10.5114/reum.2017.69778.",
                      "Merry Del Val B, et al. Prevalence of mental health disorders in knee osteoarthritis patients. Ann Med Surg (Lond). 2024;86(8):4705-4713. doi:10.1097/MS9.0000000000002258.",
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

                  <div className="bg-white p-6 border border-border/50" style={{ borderRadius: 0 }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#e0f3f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "#1A355D" }}>health_and_safety</span>
                    </div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.3, color: "#1A355D", marginBottom: "12px" }}>
                      Get a personalised plan for your joints
                    </h4>
                    <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#3b5b80", marginBottom: "20px" }}>
                      A rheumatologist can guide you through the right diet, exercise, and treatment plan for your specific stage of osteoarthritis.
                    </p>
                    <a
                      href="#"
                      style={{ display: "block", width: "100%", textAlign: "center", borderRadius: "9999px", fontWeight: 600, fontSize: "14px", padding: "12px 0", backgroundColor: "#1AA3B5", color: "#ffffff" }}
                    >
                      Book Your First Visit
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default OsteoarthritisLiving

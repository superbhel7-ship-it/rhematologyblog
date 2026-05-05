import { useEffect } from "react"
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

function ArthritisGuide() {
  useEffect(() => {
    document.title = "Understanding Rheumatoid Arthritis | RheumaInsights"
    return () => { document.title = "RheumaInsights | Professional Rheumatology Resource" }
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

        {/* ═══════════ HERO (Gout-style) ═══════════ */}
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
                Understanding Rheumatoid Arthritis
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

        {/* ═══════════ ARTICLE BODY + CTA SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="lg:flex lg:gap-14">

              {/* ── Left: Article Content ── */}
              <div className="flex-1 min-w-0" style={{ "--color-navy-deep": "#1a1a1a", "--color-navy-muted": "#1a1a1a" }}>
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
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
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
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Pain and Flares at Home
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    One of the most useful skills when living with osteoarthritis is learning how to respond to changes in your pain.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Is a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    A flare is a temporary spike in your pain, swelling, and stiffness. It can be triggered when you overuse the joint, sit still for too long, when the weather turns cold, or even due to stress.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Helps During a Flare?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                    During a flare, it is better to take ample rest. A cold pack for 15–20 minutes can reduce swelling, while a warm pack works better for easing stiffness. Taking medicines as prescribed and putting less pressure on the joint - using support if needed - makes the phase more manageable. Whenever necessary, do not forget to use your walking stick or a brace.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem", marginTop: "1.75rem" }}>
                    How to Prevent Flares
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    A steady and healthy routine makes a big difference. Do not overwork your joints on good days. Stay consistent with gentle exercise, maintain a healthy weight, and try to have a balanced diet. Keeping yourself warm in colder weather can help reduce the frequency of flares.
                  </p>
                </div>

                {/* ── EATING ── */}
                <div id="eating" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Eating for Joint Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    There isn't a strict "Osteoarthritis diet," but your daily food choices can either help calm the swelling or make it worse.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods for Your Joints
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Oily fish such as mackerel, sardines, rohu, and hilsa provide omega-3 fatty acids that help reduce inflammation.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">A variety of fruits and vegetables like papaya, spinach, and carrots supply antioxidants that support joint health.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Whole grains such as brown rice, jowar, bajra, and oats help with weight control and pain.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Calcium-rich foods like curd, ragi, and sesame seeds strengthen bones.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Using healthier oils like mustard oil or cold-pressed coconut oil instead of refined oils can also be beneficial.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Foods to Avoid
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Deep-fried foods like pakoras and pooris</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Foods made from maida - white bread, biscuits - and sugary items like mithais and soft drinks can worsen pain.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Packaged and preserved snacks contain high levels of salt and unhealthy fats that negatively impact joint health.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Simple Indian Additions That Help
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Your everyday kitchen already offers powerful support. Turmeric and ginger help reduce pain and swelling, while amla - rich in vitamin C - supports cartilage health. Using these regularly in your dishes makes you feel light and keeps your bones strong.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What About Supplements?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Some people consider supplements such as glucosamine and chondroitin, although results vary. Vitamin D is especially important in India due to prevailing deficiencies. Fish oil capsules can be helpful for those who don't consume fish regularly. Always consult your doctor before starting any supplement.
                  </p>
                </div>

                {/* ── EXERCISE ── */}
                <div id="exercise" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Staying Active Without Overdoing It
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Movement is one of the most effective ways to manage osteoarthritis. The key is to choose the right kind of activity that suits your condition.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    What Types of Exercise Help?
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Strengthening exercises like quadriceps workouts reduce stress on joints.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Low-impact activities like walking, cycling, or swimming improve overall fitness.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Low-impact aerobic exercises increase flexibility.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Gentle stretching helps ease stiffness.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1">Balancing exercises lower the risk of falling.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    During a Flare
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    During a flare, switch to gentler or seated exercises - reduce the intensity rather than stopping completely. As symptoms improve, you can gradually return to your usual routine.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Is Yoga Really Helpful?
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Yoga can be a gentle and supportive addition. Some studies suggest it may help improve pain, flexibility, and joint function. Safer options include chair yoga and modified standing poses. As these are slow and rhythmic movements, they don't stress your joints. Deep squats or high-pressure positions are best avoided.
                  </p>
                </div>

                {/* ── MENTAL HEALTH ── */}
                <div id="mental-health" data-toc-section style={{ marginBottom: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Taking Care of Your Mental Health
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Living with this condition can affect your mood more than just your joints. Many people with osteoarthritis experience low mood, anxiety, and poor sleep. This is common, and you are not alone - it deserves attention.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Disturbed sleep, inability to follow your daily routine, and even some of the lifestyle changes like eating healthy and exercising can make you feel anxious and isolated. Studies show that when you are too depressed or anxious, your tolerance to pain may drop. Joining clubs or trusts for arthritis patients helps you build a healthier, like-minded community - making healthy habits more enjoyable.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
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
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Making Daily Life Easier
                  </h2>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    At Work
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Set up your chair and desk comfortably. Keep your feet flat on the floor and take short breaks every 45–60 minutes to reduce strain. If needed, discuss modified duties with your employer to stay productive without worsening symptoms.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    While Travelling
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.75rem" }}>
                    Choose aisle seats to allow easier movement and take time to stretch or walk every 30–45 minutes to prevent stiffness. Carry medicines with you and avoid tightly packed schedules. Eat healthy, rest well, and wear comfortable shoes with supportive soles. Don't hesitate to customise shoes for your needs if required.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
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
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing the Expenses in India
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Long-term care doesn't always have to be expensive. Jan Aushadhi stores offer generic medicines at affordable prices. Government hospitals provide physiotherapy sessions, and telemedicine services can reduce your travel costs significantly.
                  </p>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
                    Helpful Schemes
                  </h3>
                  <ul className="space-y-4 mb-6" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">Ayushman Bharat (PM-JAY):</strong> Can cover up to ₹5 lakh for major surgeries such as knee replacement at specific hospitals.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">CGHS and ESI:</strong> Provide treatment support including physiotherapy, medicines, and referrals for surgeries for eligible individuals.</li>
                    <li className="text-[17px] leading-[1.75] text-navy-deep pl-1"><strong className="font-semibold">eSanjeevani:</strong> Offers free online doctor consultations - especially helpful for people in remote areas or those with limited mobility.</li>
                  </ul>

                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px", color: "#0f616e", marginBottom: "1rem" }}>
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
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "2rem" }}
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
                {/* Author line hidden by request */}

                {/* Intro */}
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                  Have you ever experienced weakness or tiredness in your joints that makes it difficult to perform daily tasks? Do you often normalise these symptoms and ignore them? If you have experienced anything similar, this article covers everything you need to know.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                  Rheumatoid arthritis is a long-term health condition in which the body&apos;s immune system fights against itself. As a result, you often experience pain, swelling, and, when left untreated, long-lasting damage. The exact cause is unknown.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-5">
                  Rheumatoid arthritis is becoming increasingly common in India. It especially affects women between 40 and 60 years old. Many people think of it as regular joint pain and avoid a rheumatologist consultation, which can lead to serious health issues.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-10">
                  With early diagnosis and proper treatment, RA can be controlled effectively. This guide will help you understand all about rheumatoid arthritis (RA), its various causes, how it presents, how doctors diagnose cases, and the available treatment options.
                </p>

                {/* ── WHAT IS RA ── */}
                <div id="what-is-ra" style={{ marginBottom: "3.5rem", marginTop: "2.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What is Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Joints are where two bones meet, such as your knuckles, knees, or wrists. Inside each joint is a thin lining called the synovium. The synovium produces fluid that helps your joints move smoothly and stay healthy.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In rheumatoid arthritis (RA), your body becomes confused and starts attacking its own joints rather than protecting them. This is called an autoimmune condition. It often affects joints on both sides of your body, like both hands or both feet at the same time. Rheumatoid arthritis can also affect other parts of your body, like your skin, eyes, lungs, heart, and blood vessels.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Rheumatoid arthritis is different from osteoarthritis, which happens due to wear and tear as people age. Osteoarthritis often affects just one side of the body and does not cause tiredness like RA does.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" style={{ marginBottom: "5rem", paddingTop: "1.75rem", marginTop: "-1.25rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
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
                    <strong className="font-bold">remission</strong>. Early diagnosis plays an important role in preventing permanent joint damage.
                  </p>
                </div>

                {/* ── STAGES ── */}
                <div id="stages" style={{ marginBottom: "5rem", paddingTop: "1.75rem", marginTop: "-1.25rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
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
                <div id="causes" style={{ marginBottom: "5rem", paddingTop: "1.75rem", marginTop: "-1.25rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What are the causes of Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    The exact cause of rheumatoid arthritis is unknown. Researchers think it is caused by a combination of genetics, hormones, and environmental factors.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">
                    Your immune system normally protects your body from infections. In rheumatoid arthritis, it gets confused and starts attacking your own joints instead. Certain factors, like smoking or infections, may trigger this response.
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
                <div id="diagnosis" style={{ marginBottom: "5rem", paddingTop: "1.75rem", marginTop: "-1.25rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
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
                    There is no single test that confirms rheumatoid arthritis. Rheumatologists recommend blood and imaging tests to reach a final diagnosis.
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

                <div id="treatment" style={{ marginBottom: "5rem", paddingTop: "1.75rem", marginTop: "-1.25rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What are the treatment options available for{" "}
                    <span
                      style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}
                    >
                      Rheumatoid Arthritis
                    </span>
                    ?
                  </h2>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The main aim of treatment is to reduce the symptoms. Once treatment begins, you will be evaluated every 3-6 months to monitor the disease&apos;s progression. If it does not improve, your doctor will increase the medication dosage or implement other methodologies.
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
                <div id="managing-ra" style={{ marginBottom: "5rem", paddingTop: "1.75rem", marginTop: "-1.25rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Rheumatoid Arthritis on a Day-to-Day Basis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-10">
                    With appropriate treatment and supportive therapy, many people are leading an active life despite the disease having a lifelong predilection.
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
                <div style={{ marginBottom: "5rem", paddingTop: "1.75rem", marginTop: "-1.25rem", borderTop: "1px solid #dadfe8" }}>
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
                    The initial three-month duration is the window during which the damage is processed. If we take the initiative to treat early, we can make a difference for the rest of our lives.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold" style={{ marginTop: "2rem" }}>
                    If you are experiencing persistent joint pain, stiffness, or swelling, don&apos;t ignore it. Early evaluation by a rheumatologist can make a significant difference in preventing long-term damage.
                  </p>
                </div>

                <GoutNewsletter />

                <hr className="border-none border-t border-[#dcdcdc] mt-12" />

              </div>

              {/* ── Right: TOC + CTA Sidebar ── */}
              <div className="hidden lg:block w-[320px] shrink-0">
                <div className="sticky top-[88px]">

                  {/* Table of Contents */}
                  <div className="bg-[#edf2fc] py-5 px-6 mb-6" style={{ borderRadius: 0 }}>
                    <h3
                      className="text-navy-deep mb-3"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.2 }}
                    >
                      Table of Contents
                    </h3>
                    <nav className="flex flex-col">
                      {[
                        { id: "what-is-ra", label: "What is RA?" },
                        { id: "symptoms", label: "Symptoms" },
                        { id: "stages", label: "Stages" },
                        { id: "causes", label: "Causes & Risk Factors" },
                        { id: "diagnosis", label: "Diagnosis" },
                        { id: "treatment", label: "Treatment" },
                        { id: "managing-ra", label: "Managing RA" },
                        { id: "faq", label: "FAQs" },
                      ].map((s) => (
                        <button
                          key={s.id}
                          onClick={() => scrollToSection(s.id)}
                          className="text-left py-2 border-b border-navy-deep/8 last:border-0"
                        >
                          <span
                            className="text-[13.5px] text-navy-deep/70 hover:text-navy-deep"
                            style={{ textDecoration: "underline", textDecorationColor: "currentColor", textUnderlineOffset: "4px", textDecorationThickness: "1px" }}
                          >
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Sidebar CTA hidden by request */}
                </div>
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

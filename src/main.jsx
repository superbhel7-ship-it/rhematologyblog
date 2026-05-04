import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"
import "./index.css"
import "./App.css"
import App from "./App.jsx"
import BlogDetail from "./pages/BlogDetail.jsx"
import OurApproach from "./pages/OurApproach.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Blog from "./pages/Blog.jsx"
import DoctorProfile from "./pages/DoctorProfile.jsx"
import HealthGuide from "./pages/HealthGuide.jsx"
import ArthritisGuide from "./pages/ArthritisGuide.jsx"
import Arthritis from "./pages/Arthritis.jsx"
import KnowledgeHub from "./pages/KnowledgeHub.jsx"
import TreatmentGuides from "./pages/TreatmentGuides.jsx"
import Gout from "./pages/Gout.jsx"
import Osteoarthritis from "./pages/Osteoarthritis.jsx"
import OsteoarthritisGuide from "./pages/OsteoarthritisGuide.jsx"
import OsteoarthritisAdvanced from "./pages/OsteoarthritisAdvanced.jsx"
import OsteoarthritisLiving from "./pages/OsteoarthritisLiving.jsx"
import Doctors from "./pages/Doctors.jsx"
import Locations from "./pages/Locations.jsx"

// Lenis smooth scroll -global
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    lenis.scrollTo(0, { immediate: true })
  }, [pathname])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<BlogDetail />} />
        <Route path="/specialist/:id" element={<DoctorProfile />} />
        <Route path="/health-guide" element={<HealthGuide />} />
        <Route path="/Rheumatoid-Arthritis" element={<ArthritisGuide />} />
        <Route path="/health-guide/Rheumatoid-Arthritis" element={<Navigate to="/Rheumatoid-Arthritis" replace />} />
        <Route path="/arthritis" element={<Arthritis />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/treatment-guides" element={<TreatmentGuides />} />
        <Route path="/gout" element={<Gout />} />
        <Route path="/osteoarthritis" element={<Osteoarthritis />} />
        <Route path="/Osteoarthritis-Guide" element={<OsteoarthritisGuide />} />
        <Route path="/Osteoarthritis-Advanced" element={<OsteoarthritisAdvanced />} />
        <Route path="/Osteoarthritis-Living" element={<OsteoarthritisLiving />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

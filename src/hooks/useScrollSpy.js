import { useEffect, useState } from "react";

// Finds which section the visitor is currently viewing
export const useScrollSpy = (sectionIds, offset = 100) => {
  // Stores the name of the current section, like "projects"
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // scrollY = how far down the page is scrolled
      // offset (+100) makes the link highlight a little early
      const scrollPosition = window.scrollY + offset;

      // Check the sections from last to first
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop; // where the section starts
          const sectionHeight = section.offsetHeight; // how tall it is

          // If the scroll position is inside this section...
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // ...save its name (like "projects") and stop checking
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Run once on page load so the right link is highlighted right away
    handleScroll();

    // Start watching the scroll (passive: true keeps scrolling smooth)
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Stop watching when the component is removed
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

// Smoothly scrolls to a section when a link is clicked
export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.offsetTop - offset; // leave room for the Navbar
    window.scrollTo({ top, behavior: "smooth" });
  }
};
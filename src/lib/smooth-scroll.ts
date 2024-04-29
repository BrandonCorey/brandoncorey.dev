const scrollToSection = (e: React.SyntheticEvent, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export default scrollToSection;

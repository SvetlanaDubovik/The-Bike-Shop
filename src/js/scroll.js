export const scrollFromLinkToSection = (link, section) => {
    link.addEventListener('click', evt => scrollTo(evt, section));
}

const scrollTo = (evt, section) => {
    evt.preventDefault();
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
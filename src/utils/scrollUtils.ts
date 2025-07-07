
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const initiateCall = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

export const initiateEmail = (email: string) => {
  window.location.href = `mailto:${email}`;
};

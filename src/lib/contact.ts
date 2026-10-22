export const contactEmail = "aristoscollective@gmail.com";

export const instagramHandle = "aristoscollective";
export const instagramUrl = `https://www.instagram.com/${instagramHandle}/`;

// FormSubmit forwards each enquiry to contactEmail. The first enquiry sends an
// activation email to that inbox; nothing is delivered until it's confirmed.
export const enquiryEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

export const enquiryTopics = [
  "Buying a print",
  "Sizes, paper or framing",
  "Commission or licensing",
  "Something else",
];

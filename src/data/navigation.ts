export type NavLink = {
  label: string;
  href: string;
};

export type NavLinkGroup = {
  title: string;
  links: NavLink[];
};

export const PRODUCTS_HREF =
  "https://www.weldtechcorp.com/products-solutions.html";
export const SERVICE_HREF = "https://www.weldtechcorp.com/service-repairs.html";
export const LEARNING_CENTER_HREF =
  "https://www.weldtechcorp.com/learning-center.html";
export const ABOUT_HREF = "https://www.weldtechcorp.com/about.html";
export const NEWS_HREF = "https://www.weldtechcorp.com/news/index.html";
export const CONTACT_HREF = "https://www.weldtechcorp.com/contact.html";
export const CAREERS_HREF = "https://www.weldtechcorp.com/hr/index.html";
export const TERMS_HREF = "https://www.weldtechcorp.com/legal.html";
export const WTC_UNIVERSITY_HREF = "https://moodle.weldtechcorp.com";

export const NAV_LINKS: NavLink[] = [
  { label: "Products and Solutions", href: PRODUCTS_HREF },
  { label: "Service and Support", href: SERVICE_HREF },
  { label: "Learning Center", href: LEARNING_CENTER_HREF },
  { label: "About", href: ABOUT_HREF },
  { label: "News", href: NEWS_HREF },
  { label: "Contact", href: CONTACT_HREF },
];

export const ACCOUNT_LINKS = {
  signIn: "https://www.weldtechcorp.com/fileaccess/signin.php",
  createAccount: "https://www.weldtechcorp.com/fileaccess/signup.php",
};

// Every page the old site linked from its header and footer, plus the
// homepage's WTC University and My WTC links. Terms of Use sits in the
// footer's bottom row instead.
export const FOOTER_LINK_GROUPS: NavLinkGroup[] = [
  {
    title: "Products and support",
    links: [
      { label: "Products and Solutions", href: PRODUCTS_HREF },
      { label: "Service and Support", href: SERVICE_HREF },
      { label: "Learning Center", href: LEARNING_CENTER_HREF },
      { label: "WTC University", href: WTC_UNIVERSITY_HREF },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: ABOUT_HREF },
      { label: "News", href: NEWS_HREF },
      { label: "Careers", href: CAREERS_HREF },
      { label: "Contact", href: CONTACT_HREF },
    ],
  },
  {
    title: "My WTC",
    links: [
      { label: "Sign in", href: ACCOUNT_LINKS.signIn },
      { label: "Create account", href: ACCOUNT_LINKS.createAccount },
    ],
  },
];

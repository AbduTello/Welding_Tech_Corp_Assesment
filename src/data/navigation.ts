export type NavLink = {
  label: string;
  href: string;
};

export const PRODUCTS_HREF =
  "https://www.weldtechcorp.com/products-solutions.html";

export const SERVICE_HREF = "https://www.weldtechcorp.com/service-repairs.html";

export const ABOUT_HREF = "https://www.weldtechcorp.com/about.html";

// The old link tree also had "Human Resources" and "Website Terms of Use" —
// those are probably better off in the footer.
export const NAV_LINKS: NavLink[] = [
  { label: "Products and Solutions", href: PRODUCTS_HREF },
  { label: "Service and Support", href: SERVICE_HREF },
  {
    label: "Learning Center",
    href: "https://www.weldtechcorp.com/learning-center.html",
  },
  { label: "About", href: ABOUT_HREF },
  { label: "News", href: "https://www.weldtechcorp.com/news/index.html" },
  { label: "Contact", href: "https://www.weldtechcorp.com/contact.html" },
];

export const ACCOUNT_LINKS = {
  signIn: "https://www.weldtechcorp.com/fileaccess/signin.php",
  createAccount: "https://www.weldtechcorp.com/fileaccess/signup.php",
};

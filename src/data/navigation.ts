export type NavLink = {
  label: string;
  href: string;
};

export const PRODUCTS_HREF =
  "https://www.weldtechcorp.com/products-solutions.html";

export const SERVICE_HREF = "https://www.weldtechcorp.com/service-repairs.html";

export const ABOUT_HREF = "https://www.weldtechcorp.com/about.html";

export const CAREERS_HREF = "https://www.weldtechcorp.com/hr/index.html";

// The old link tree also had "Human Resources" (CAREERS_HREF, linked from the
// careers panel) and "Website Terms of Use" — both probably also belong in the footer.
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

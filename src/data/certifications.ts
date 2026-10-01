export type Certificate = {
  pdf: string;
  // First page of the PDF rendered to an image — PDFs don't preview well in
  // mobile browsers, so the modal shows this and links out to the PDF
  image: string;
  imageWidth: number;
  imageHeight: number;
  issuer: string;
  validThrough: string;
};

export type Certification = {
  code: string;
  label: string;
  // When present, the badge opens a preview of the certificate
  certificate?: Certificate;
};

export const CERTIFICATIONS: Certification[] = [
  {
    code: "ISO 9001:2015",
    label: "Quality management systems",
    certificate: {
      pdf: "/ISO-Certificate-July-28-2024-to-July-27-2027.pdf",
      image: "/iso-9001-certificate.jpg",
      imageWidth: 1236,
      imageHeight: 1600,
      issuer: "American Global Standards",
      validThrough: "July 27, 2027",
    },
  },
  // TODO: verify these against WTC's actual certificates before launch —
  // they came from the design sketch, not from WTC
  { code: "AS9100D", label: "Aerospace quality management" },
  { code: "AWS D17.2", label: "Resistance welding for aerospace" },
  { code: "MIL-W-6858", label: "Military resistance welding spec" },
];

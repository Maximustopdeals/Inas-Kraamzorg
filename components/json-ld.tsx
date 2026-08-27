import { site, werkgebied } from "@/lib/site";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    description:
      "Persoonlijke kraamzorg aan huis in Zaandam en de Zaanstreek door gediplomeerd kraamverzorgster Fatima. Tweetalige begeleiding in Nederlands en Arabisch. 100% vergoed vanuit de basisverzekering.",
    url: site.url,
    telephone: "+31624933335",
    email: site.email,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/og-image.jpg`,
    priceRange: "100% vergoed vanuit de basisverzekering",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zaandam",
      addressRegion: "Noord-Holland",
      addressCountry: "NL",
    },
    areaServed: werkgebied.map((plaats) => ({
      "@type": "City",
      name: plaats,
    })),
    founder: {
      "@type": "Person",
      name: "Fatima",
      jobTitle: "Kraamverzorgster",
    },
    sameAs: [site.instagram],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}

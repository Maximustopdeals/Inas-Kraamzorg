import { site, werkgebied } from "@/lib/site";

export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    description:
      "Persoonlijke kraamzorg aan huis in Zaandam en de Zaanstreek door gediplomeerd kraamverzorgster Fatima. Warme en respectvolle begeleiding tijdens de kraamweek. Ook in het Arabisch. 100% vergoed vanuit de basisverzekering.",
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
      description:
        "Gediplomeerd kraamverzorgster met ervaring in Zaandam en de Zaanstreek. Begeleidt gezinnen in het Nederlands en Arabisch.",
    },
    knowsLanguage: ["nl", "ar"],
    sameAs: [site.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kraamzorg diensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kraamzorg aan huis",
            description:
              "Persoonlijke kraamzorg in Zaandam en omgeving, inclusief medische controles, borstvoedingsbegeleiding, babyverzorging en emotionele steun.",
          },
        },
      ],
    },
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

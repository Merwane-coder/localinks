
export default {
    hello: 'Hello',
    currentLanguage: 'en',
    language: {
        Language: "Language",
    },
    landing: {
      // en.ts — under: export default { landing: { ... HERE ... } }
clients: {
  title: "Client Management",
  subtitle: "Centralize and analyze your customer relationships",
  cta: "Manage my clients",
  image_alt: "Client management interface",
  features: {
    item1: { title: "Unified client profile", desc: "All data in one place" },
    item2: { title: "Interaction history", desc: "Track conversations and contracts" },
    item3: { title: "Personalized alerts", desc: "Important notifications" }
  },
  integrations: {
    title: "Available integrations",
    items: {
      crm: "CRM",
      outlook: "Outlook",
      google_contacts: "Google Contacts",
      mailchimp: "Mailchimp",
      zapier: "Zapier"
    }
  },
  stats: {
    title: "Advanced analytics",
    desc: "Analyze your customers' geographic distribution and identify high-potential areas"
  }
},

      // en.ts — under: export default { landing: { ... HERE ... } }
kml: {
  title: "KML Generation",
  subtitle: "Optimization for Google My Maps",
  cta: "Try KML generation",
  features: {
    item1: { title: "Bulk import", desc: "Import from Excel, CSV or APIs" },
    item2: { title: "Advanced styling", desc: "Customize icons and colors" },
    item3: { title: "Instant export", desc: "Download as KML/KMZ" }
  },
  key_features: {
    title: "Key features",
    item1: "Automatic address-to-GPS conversion",
    item2: "Category and filter management",
    item3: "Preset templates for various use cases"
  },
  use_cases: {
    title: "Use cases",
    business: {
      title: "For businesses:",
      desc: "Visualize your stores, delivery areas or covered territories"
    },
    public: {
      title: "For public bodies:",
      desc: "Map public facilities and infrastructures"
    }
  }
},

      // en.ts — under: export default { landing: { ... HERE ... } }
visibility: {
  hero: {
    title_leading: "Boost your",
    title_highlight: "local visibility",
    title_trailing: "on Google My Maps",
    description:
      "Generate a strategic KML file containing thousands of points, routes and areas to dominate your service area.",
    cta_demo: "See a demo",
    cta_pricing: "Pricing",
    image_alt: "Google My Maps visibility optimization"
  },
  how: {
    title_leading: "A simple process,",
    title_highlight: "powerful results",
    step1: {
      title: "Business profile",
      text:
        "Fill in your key business details—location, keywords, service type. Our algorithms tailor each KML accordingly."
    },
    step2: {
      title: "Increased visibility",
      lead: "We automatically generate:",
      item1: "Consistent geographic positions",
      item2: "Relevant routes for your customers",
      item3: "Polygons and well-defined influence areas",
      item4: "Credible mapping in Google’s eyes"
    },
    step3: {
      title: "Instant export",
      text:
        "Export a ready-to-use KML file and import it into Google My Maps with one click.",
      image_alt: "KML export preview"
    }
  },
  advantages: {
    title_leading: "Unmatched",
    title_highlight: "geographic visibility",
    card1: {
      title: "Geolocated presence",
      desc:
        "Your positions are computed based on urban density, road networks, and target customers."
    },
    card2: {
      title: "Consistency algorithm",
      desc:
        "Our AI avoids incoherent overload to maximize coverage without penalties."
    },
    card3: {
      title: "Fast indexing",
      desc:
        "Enriched KML structures help your areas get indexed faster in Google Maps."
    }
  },
  testimonial: {
    quote:
      "“Our real-estate agency saw inbound calls explode thanks to Localink’s automated map-visibility strategy.”",
    image_alt: "Agency manager",
    author_name: "Claire Dubois",
    author_role: "Manager, ImmoRéseau"
  },
  faq: {
    title_leading: "Frequently asked",
    title_highlight: "questions",
    q1: {
      question: "Does Google penalize this type of KML?",
      answer:
        "No. Our files are optimized to respect the guidelines while improving your presence."
    },
    q2: {
      question: "How many points can I generate?",
      answer:
        "It depends on your plan. Some clients exceed 100,000 mapped points without performance loss."
    },
    q3: {
      question: "Can I target multiple geographic areas?",
      answer:
        "Yes, create multiple KML files for different coverage zones."
    }
  }
},

      // en.ts — under: export default { landing: { ... HERE ... } }
    positions: {
      title: "Positions & Routes",
      subtitle: "Route optimization and coverage areas",
      cta: "Optimize my routes",
      image_alt: "Positions and routes preview",
      features: {
        item1: {
          title: "POI management",
          desc: "Consistent points of interest intelligently distributed",
        },
        item2: {
          title: "Route planning",
          desc: "Credible, optimized routes for your needs",
        },
        item3: {
          title: "KML/KMZ export",
          desc: "Ready-to-use files for Google My Maps",
        },
      },
      use_cases: {
        title: "Typical use cases",
        logistics: {
          title: "Logistics",
          desc: "Optimization of delivery rounds",
        },
        field_services: {
          title: "Field services",
          desc: "Planning technical interventions",
        },
        sales_networks: {
          title: "Sales networks",
          desc: "Managing sales territories",
        },
      },
    },

      polylines: {
        metadata: {
          title: "Mass Polyline Generation - Localink Pro",
          description:
            "Create realistic, styled polylines to boost your visibility on Google My Maps."
        },
  
        hero: {
          title_leading: "Strategic polylines",
          title_trailing: "to dominate Google My Maps",
          description:
            "Draw and generate credible paths (multi-segment, advanced styles, KML/KMZ export) for natural, high-performing geographic coverage.",
          cta_demo: "See a demo",
          cta_pricing: "Compare plans",
          image_alt: "Styled polylines on map"
        },
  
        how: {
          title: "How Localink boosts your visibility",
          step1: {
            title: "Fast setup",
            text:
              "Enter key info (business, keywords, area) and start drawing your polylines in a few clicks.",
            code_example: `{
    "entreprise": "Your Brand",
    "secteur": "Home services",
    "rayon": "20 km",
    "motsCles": ["intervention", "emergency", "technician"]
  }`
          },
          step2: {
            title: "Generation & styling",
            lead: "Automatically, we:",
            item1: "Chain credible segments (smoothing)",
            item2: "Apply colors/widths/dashes",
            item3: "Create variants to avoid uniformity",
            item4: "Optimize rendering for Google My Maps"
          },
          step3: {
            title: "KML / KMZ export",
            text:
              "Download a ready-to-use file and import it into Google My Maps in one click.",
            image_alt: "Example of exported polylines"
          }
        },
  
        advantages: {
          title: "Why our polylines stand out",
          card1: {
            title: "Local SEO optimization",
            description:
              "Structures and metadata tailored to strengthen the credibility of your map presence."
          },
          card2: {
            title: "Credible and lightweight rendering",
            description:
              "Smart smoothing and compressed files for a smooth, natural map."
          },
          card3: {
            title: "Deep customization",
            description:
              "Colors, widths, rounded joins, patterns… tailor your paths to your brand."
          }
        },
  
        testimonial: {
          quote:
            "“Our maps became readable and convincing. The polylines generated by Localink helped us illustrate realistic coverage and increase inquiries.”",
          author_name: "Camille R.",
          author_role: "Operations manager"
        },
  
        faq: {
          title: "Frequently asked questions",
          q1: {
            question: "Are the polylines compatible with My Maps?",
            answer:
              "Yes, the KML/KMZ export is optimized for direct import into Google My Maps."
          },
          q2: {
            question: "Can I customize the styles?",
            answer:
              "Absolutely: colors, width, dashes, joins, endpoints… you control everything."
          },
          q3: {
            question: "How often should I update?",
            answer:
              "A monthly update is ideal to keep the map credible and aligned with your activity."
          }
        }
      },
        header: {
          partners: "Partners",  
          contact: "Contact",
          features: {
            title: "Features",
            price: "Pricing",
            subtitle_1: {
              title: "KML Generation",
              description: "Create optimized KML files for Google My Maps"
            },
            subtitle_2: {
              title: "Online Visibility",
              description: "Analyze and improve your cartographic presence"
            },
            subtitle_3: {
              title: "Positions & Routes",
              description: "Manage your geographic points and routes"
            },
            subtitle_4: {
              title: "Client Management",
              description: "Complete tracking of your client portfolio"
            },
            subtitle_5: {
              title: "Analytics",
              description: "Detailed statistics about your visibility"
            },
            subtitle_6: {
              title: "Polylines",
              description: "Create complex paths for realistic coverage"
            }
          },
          signin: "Sign in",
          cta: "Free trial"
        },
        hero: {
            title: "Boost your local visibility",
            sub_title: "with the power of Google Maps",
            description_1: "Our solution automatically generates optimized KML files to create",
            description_2_blue: "thousands of positions, routes, and polylines",
            description_3: "thousands of positions, routes, and polylines",
            demarrer: "14-day free trial",
            confiance: "500+ businesses already trust us"
        },
        advantage_section: {
          title: "Why choose",
          title_2: "Localink ?",
          subtitle_1: {
            title: "Optimized local visibility",
            description: "Enhance your presence on maps and search engines with short, targeted links."
          },
          subtitle_2: {
            title: "Real-time tracking",
            description: "Analyze clicks, sharing zones and local engagement through simple, precise statistics."
          },
          subtitle_3: {
            title: "Simplified sharing",
            description: "Generate and distribute local links tailored to each audience with just a few clicks."
          },
          subtitle_4: {
            title: "Enhanced reputation",
            description: "Leverage customer feedback and boost your local brand image."
          },
          subtitle_5: {
            title: "Security & privacy",
            description: "Your data is protected by the strictest standards for complete peace of mind."
          },
          subtitle_6: {
            title: "Responsive & human support",
            description: "Benefit from expert assistance, attentive to your local needs."
          }
        },
        cta: {
          title: "Ready to boost your local visibility ?",
          sub_title: "Try Localink for free and discover how to attract more customers today.",
          signup: "Start with the free plan"
        },
        features: {
            title: "Pourquoi vendre sur notre plateforme ?",
            items: [
                {
                    title: "Inventaire Simplifié",
                    description: "Dashboard intuitif avec gestion d'inventaire en temps réel et alertes de stock"
                  },
                  {
                    title: "Commission Inégalée",
                    description: "Seulement 5% par transaction (vs 10-15% ailleurs) avec paiement hebdomadaire garanti"
                  },
                  {
                    title: "Activation Immédiate",
                    description: "Commencez à vendre en 5 minutes, sans documents ni vérification d'identité"
                  },
                  {
                    title: "Audience Qualifiée",
                    description: "Accès direct à nos milliers d'acheteurs mensuels actifs en Europe et dans le Monde"
                  },
                  {
                    title: "Sécurité Maximale",
                    description: "Protection anti-fraude et cryptage bancaire de niveau militaire"
                  },
                  {
                    title: "Expansion Globale",
                    description: "Vendez dans 28 pays européens sans formalités douanières"
                  }
            ]
        },
        faq: {
          title: "Frequently Asked Questions",
          items: [
            {
              question: "How does KML file generation work ?",
              answer: "Our system automatically generates optimized KML files containing hundreds of thousands of strategic positions, dozens of credible routes, and complex polylines to maximize your visibility on Google My Maps.",
            },
            {
              question: "How many geographic points can I generate ?",
              answer: "Depending on your subscription, you can generate up to 250,000 strategic points per map, with options to credibly distribute them across your operational area.",
            },
            {
              question: "How do routes and polylines improve my visibility ?",
              answer: "Our algorithms create realistic road networks that enhance your geographic presence. These paths are optimized to appear naturally in local search results.",
            },
            {
              question: "How often are updates made to Google My Maps ?",
              answer: "Updates are synchronized daily with the Google ecosystem. Our system intelligently manages changes to avoid algorithmic red flags.",
            },
            {
              question: "Is it compliant with Google's guidelines ?",
              answer: "Our technology uses 100% compliant methods, creating a credible geographic presence without manipulating results. We optimize rather than cheat.",
            },
            {
              question: "Can I track the impact on my local traffic ?",
              answer: "Yes, our analytics dashboard shows the evolution of your map visibility, the traffic generated, and your ranking in 'near me' searches.",
            },
            {
              question: "How do you handle international coverage ?",
              answer: "We automatically adapt positioning strategies to regional specificities, taking into account cultural differences and local map usage practices.",
            }
          ]
        },
        partnership: {
          title: "Our trusted partners",
          subtitle: "Join the businesses optimizing their visibility with Localink"
        },
        testimonials: {
          title_1: "In 3 months, our Google Maps visibility skyrocketed thanks to the 15,000 strategic points generated by Localink. Our local traffic increased by 220%.",
          title_2: "The virtual routes system gave incredible credibility to our distribution network. Our partners are impressed by our geographic coverage.",
          title_3: "Before Localink, our 12 agencies were invisible on Maps. Now we dominate local searches with perfect territorial coverage.",
          title_4: "The automatic polylines generation transformed our small business into a credible regional player in just 6 weeks.",
          title_5: "Our customized KML with 8,000 virtual sales points helped us secure a major contract with a national distributor."
        },
        presentationvideo: {
          title: "Discover Localink"
        },
        footer: {
          contact: "Contact",
          aria_label_home: "Localink - Back to home",
          description: "The all-in-one solution to connect local businesses with their customers.",
          navigation: {
            title: "Navigation",
            prices: "Pricing",
            testimonials: "Testimonials",
            new_features: "New features",
          },
          company: {
            title: "Company",
            about: "About us",
            partners_smes: "SME Partners",
            partners_brands: "Brand Partners",
          },
          legal: {
            terms: "Legal notice",
            privacy: "Privacy policy",
          },
          copyright: "All rights reserved.",
        },
        pricing: {
          title_1: "Simple pricing adapted to",
          title_2: "your growth",
          subtitle: "Choose the plan that matches your ambitions.",
          plan: {
            plan_1: {
              title: "Free",
              subtitle: "To test and discover the tool's power.",
              month: "month",
              signin: "Sign up",
              inclus: {
                title: "What's included",
                sub_1: "3 Saved clients",
                sub_2: "1,000 points max per map",
                sub_3: "5 routes max per map",
                sub_4: "10 service areas"
              }
            },
            plan_2: {
              title: "Professional",
              subtitle: "Perfect for freelancers and small businesses.",
              month: "month",
              signin: "Choose Pro plan",
              inclus: {
                title: "What's included",
                sub_1: "10 saved clients",
                sub_2: "20 service areas",
                sub_3: "10,000 points max per map",
                sub_4: "20 routes max per map",
                sub_5: "Email support"
              }
            },
            plan_3: {
              title: "Premium",
              subtitle: "For agencies and power users.",
              month: "month",
              signin: "Go Premium",
              inclus: {
                title: "What's included",
                sub_1: "50 saved clients",
                sub_2: "Unlimited points per map",
                sub_3: "70 service areas",
                sub_4: "100 routes max per map",
                sub_5: "Email & chat support"
              }
            }
          }
        },
        signin: {
        title: "Sign in",
        subtitle: "Discover where your business ranks on Google and get practical tips to improve.",
        input_mail: "Enter your email",
        input_password: "Enter your password",
        forget_password: "Forgot password ?",
        sign_in: "Sign in",
        new: "New?",
        not_have_account: "Don't have an account yet ?",
        not_have_account_signup: "Create an account",
        info: {
          title_1: "By signing in, you agree to our",
          condi_utilisation: " Terms of Use",
          title_2: "and",
          politic_confidential: " Privacy Policy."
        }
      },
      compare_plan: {
        title: "Feature Comparison",
        sub_title: "Discover which offer best suits your needs",
        features: {
          title_1: "Advanced KML Generation",
          subtitle_1: "Export optimized KML files for Google My Maps",
          
          title_2: "Geolocated Points",
          subtitle_2: "Up to 250,000 strategic positions generated",
          
          title_3: "Road Network",
          subtitle_3: "Generation of dozens of credible routes",
          
          title_4: "Complex Polylines",
          subtitle_4: "Creation of advanced paths for realistic coverage",
          
          title_5: "Maps Optimization",
          subtitle_5: "Specialized algorithm for Google Local SEO",
          
          title_6: "Automatic Updates",
          subtitle_6: "Regular synchronization with Google ecosystem",
          
          footer: "All plans include unlimited map generation and technical support"
        }
      },
      signup: {
        title: "Sign up",
        subtitle: "Discover your current Google ranking and get concrete improvement strategies.",
        input_mail: "Enter your email",
        input_password: "Enter your password",
        sign_up: "Sign up",
        i_signup: "Already registered?",
        you_have_account: "Already have an account ? ",
        you_have_account_signin: "Sign in",
        info: {
          title_1: "By signing up, you agree to our",
          condi_utilisation: " Terms of Use",
          title_2: "and",
          politic_confidential: " Privacy Policy."
        }
      }
    },
    dashboards: {
  dashboard: {
    title: "Admin Dashboard",
    soustitle: "Customer and Statistics Management",
    stats: {
      stat_1: "Customers",
      stat_2: "Points",
      stat_3: "Cards",
      stat_4: "Routes"
    },
    nbrs_clients: "customers found",
    not_think: "No customers found",
    initialize: "Reset search"
  },
  clients: {
    title: "My Customers",
    not_think: "No customers found",
    new_client: "Start by creating your first customer.",
    new_kml: "New KML"
  },
  generator: {
    title_1: "KML Generator",
    title_2: "KML Generation Form",
    description: "Fill in all required fields to generate your KML file",
    info_entreprise: "Business Information",
    name: "Business name",
    site: "Website",
    url_business: "Google MyBusiness URL",
    tel: "Phone",
    address: "Reference address",
    cle: "SEO Keywords",
    sittings: "Advanced Settings",
    localisation: {
      title: "Location Points",
    },
    zones: {
      title: "Coverage Areas",
      sousTitle_1: "Between",
      sousTitle_2: "circles"
    },
    itineraire: "Routes",
    button_generate: "Generate my KML file",
    guide: "User Guide"
  },
},
    registration: {
      sign_in: "Sign In",
      sign_up: "Sign Up",
      pricing: "Pricing"
    }
} as const
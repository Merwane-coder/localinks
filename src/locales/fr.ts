// locales/fr.ts
export default {
    hello: 'salut',
    currentLanguage: 'FR',
    language: {
        Language: "Langue",
        Currency: "Devise",
        Cerrency_price: "EUR: €"
    },
    landing: {
      clients: {
        title: "Gestion Clients",
        subtitle: "Centralisez et analysez votre relation client",
        cta: "Gérer mes clients",
        image_alt: "Interface de gestion des clients",
        features: {
          item1: { title: "Fiche client unifiée", desc: "Toutes les données au même endroit" },
          item2: { title: "Historique des interactions", desc: "Suivi des échanges et contrats" },
          item3: { title: "Alertes personnalisées", desc: "Notifications importantes" }
        },
        integrations: {
          title: "Intégrations disponibles",
          items: {
            crm: "CRM",
            outlook: "Outlook",
            google_contacts: "Google Contacts",
            mailchimp: "Mailchimp",
            zapier: "Zapier"
          }
        },
        stats: {
          title: "Statistiques avancées",
          desc: "Analysez la répartition géographique de votre clientèle et identifiez les zones à fort potentiel"
        }
      },
      
      kml: {
        title: "Génération KML",
        subtitle: "Optimisation pour Google My Maps",
        cta: "Essayer la génération KML",
        features: {
          item1: { title: "Import multiple", desc: "Importez depuis Excel, CSV ou APIs" },
          item2: { title: "Style avancé", desc: "Personnalisation des icônes et des couleurs" },
          item3: { title: "Export instantané", desc: "Téléchargement en KML/KMZ" }
        },
        key_features: {
          title: "Fonctionnalités clés",
          item1: "Conversion automatique des adresses en coordonnées GPS",
          item2: "Gestion des catégories et filtres",
          item3: "Modèles prédéfinis pour différents usages"
        },
        use_cases: {
          title: "Cas d'utilisation",
          business: {
            title: "Pour les entreprises :",
            desc: "Visualisez vos points de vente, zones de livraison ou territoires couverts"
          },
          public: {
            title: "Pour les collectivités :",
            desc: "Cartographiez vos équipements publics et infrastructures"
          }
        }
      },
      
      
      // fr.ts — sous: export default { landing: { ... ICI ... } }
visibility: {
  hero: {
    title_leading: "Boostez votre",
    title_highlight: "visibilité locale",
    title_trailing: "sur Google My Maps",
    description:
      "Générez un fichier KML stratégique intégrant des milliers de points, itinéraires et zones pour dominer votre zone de chalandise.",
    cta_demo: "Voir une démo",
    cta_pricing: "Nos tarifs",
    image_alt: "Optimisation visibilité Google My Maps"
  },
  how: {
    title_leading: "Un processus simple,",
    title_highlight: "des résultats puissants",
    step1: {
      title: "Profil d'entreprise",
      text:
        "Renseignez les détails clés de votre activité : localisation, mots-clés, type de service. Nos algorithmes personnalisent chaque fichier KML en fonction."
    },
    step2: {
      title: "Visibilité augmentée",
      lead: "Nous générons automatiquement :",
      item1: "Des positions géographiques cohérentes",
      item2: "Des trajets pertinents pour vos clients",
      item3: "Des polygones et zones d’influence bien définis",
      item4: "Une cartographie crédible aux yeux de Google"
    },
    step3: {
      title: "Export immédiat",
      text:
        "Exportez un fichier KML prêt à l'emploi et importez-le dans Google My Maps en un clic.",
      image_alt: "Aperçu export KML visibilité"
    }
  },
  advantages: {
    title_leading: "Une",
    title_highlight: "visibilité géographique incomparable",
    card1: {
      title: "Présence géolocalisée",
      desc:
        "Vos positions sont calculées selon la densité urbaine, les axes routiers et vos clients cibles."
    },
    card2: {
      title: "Algorithme de cohérence",
      desc:
        "Notre IA évite toute surcharge incohérente pour maximiser la couverture sans pénalités."
    },
    card3: {
      title: "Indexation rapide",
      desc:
        "Grâce à nos structures KML enrichies, les zones sont indexées plus vite dans Google Maps."
    }
  },
  testimonial: {
    quote:
      "« Notre agence immobilière a vu une explosion des appels entrants grâce à la stratégie de visibilité cartographique automatisée par Localink. »",
    image_alt: "Responsable agence",
    author_name: "Claire Dubois",
    author_role: "Responsable, ImmoRéseau"
  },
  faq: {
    title_leading: "Questions",
    title_highlight: "fréquentes",
    q1: {
      question: "Est-ce que Google pénalise ce type de KML ?",
      answer:
        "Non. Nos fichiers sont optimisés pour respecter les guidelines tout en améliorant votre présence."
    },
    q2: {
      question: "Combien de points puis-je générer ?",
      answer:
        "Selon votre plan. Certains clients dépassent 100 000 points cartographiés sans perte de performance."
    },
    q3: {
      question: "Puis-je cibler plusieurs zones géographiques ?",
      answer:
        "Oui, créez plusieurs fichiers KML pour différentes zones de couverture."
    }
  }
},

      // fr.ts — sous: export default { landing: { ... ICI ... } }
positions: {
  title: "Positions & Itinéraires",
  subtitle: "Optimisation des déplacements et zones de couverture",
  cta: "Optimiser mes itinéraires",
  image_alt: "Aperçu positions et itinéraires",
  features: {
    item1: {
      title: "Gestion des POI",
      desc: "Points d'intérêt cohérents et répartis intelligemment",
    },
    item2: {
      title: "Planification d'itinéraires",
      desc: "Trajets crédibles et optimisés pour vos besoins",
    },
    item3: {
      title: "Export KML/KMZ",
      desc: "Fichiers prêts à l'emploi pour Google My Maps",
    },
  },
  use_cases: {
    title: "Applications typiques",
    logistics: {
      title: "Logistique",
      desc: "Optimisation des tournées de livraison",
    },
    field_services: {
      title: "Services sur site",
      desc: "Planification des interventions techniques",
    },
    sales_networks: {
      title: "Réseaux commerciaux",
      desc: "Gestion des territoires de vente",
    },
  },
},

      polylines: {
        metadata: {
          title: "Génération Massive de Polylignes - Localink Pro",
          description:
            "Créez des polylignes réalistes et stylées pour booster votre visibilité sur Google My Maps."
        },
      
        hero: {
          title_leading: "Polylignes stratégiques",
          title_trailing: "pour dominer Google My Maps",
          description:
            "Dessinez et générez des tracés crédibles (multi-segments, styles avancés, export KML/KMZ) pour une couverture géographique naturelle et performante.",
          cta_demo: "Voir une démo",
          cta_pricing: "Comparer les plans",
          image_alt: "Polylignes stylées sur carte"
        },
      
        how: {
          title: "Comment Localink booste votre visibilité",
          step1: {
            title: "Configuration rapide",
            text:
              "Saisissez les infos clés (activité, mots-clés, zone) et commencez à tracer vos polylignes en quelques clics.",
            code_example: `{
        "entreprise": "Votre Marque",
        "secteur": "Services à domicile",
        "rayon": "20 km",
        "motsCles": ["intervention", "urgence", "technicien"]
      }`
          },
          step2: {
            title: "Génération & styles",
            lead: "Automatiquement, nous :",
            item1: "Chaînons des segments crédibles (lissage)",
            item2: "Appliquons couleurs/épaisseurs/pointillés",
            item3: "Créons des variantes pour éviter l’uniformité",
            item4: "Optimisons le rendu pour Google My Maps"
          },
          step3: {
            title: "Export KML / KMZ",
            text:
              "Téléchargez un fichier prêt à l’emploi et importez-le dans Google My Maps en un clic.",
            image_alt: "Exemple de polylignes exportées"
          }
        },
      
        advantages: {
          title: "Pourquoi nos polylignes se démarquent",
          card1: {
            title: "Optimisation SEO locale",
            description:
              "Structures et métadonnées adaptées pour renforcer la crédibilité de votre présence carto."
          },
          card2: {
            title: "Rendu crédible et léger",
            description:
              "Lissage intelligent et fichiers compressés pour une carte fluide et naturelle."
          },
          card3: {
            title: "Personnalisation poussée",
            description:
              "Couleurs, épaisseurs, jonctions arrondies, motifs… adaptez vos tracés à votre marque."
          }
        },
      
        testimonial: {
          quote:
            "« Nos cartes sont devenues lisibles et convaincantes. Les polylignes générées par Localink nous ont permis d’illustrer une couverture réaliste et d’augmenter nos demandes. »",
          author_name: "Camille R.",
          author_role: "Responsable opérations"
        },
      
        faq: {
          title: "Questions fréquentes",
          q1: {
            question: "Les polylignes sont-elles compatibles My Maps ?",
            answer:
              "Oui, l’export KML/KMZ est optimisé pour une importation directe dans Google My Maps."
          },
          q2: {
            question: "Puis-je personnaliser les styles ?",
            answer:
              "Bien sûr : couleurs, épaisseur, pointillés, jonctions, extrémités… vous contrôlez tout."
          },
          q3: {
            question: "À quelle fréquence mettre à jour ?",
            answer:
              "Une mise à jour mensuelle est idéale pour garder une carte crédible et alignée avec votre activité."
          }
        }
      },
        header:{
          contact: "Contact",
          partners: "Partenaires", 
          features:{
            title:"Fonctionnalités",
            price:"Tarifs",
            subtitle_1: {
              title:"Génération KML",
              description:"Créez des fichiers KML optimisés pour Google My Maps"
            },
            subtitle_2:{
              title: "Visibilité en ligne",
              description:"Analysez et améliorez votre présence cartographique",

            },
            subtitle_3:{
              title:"Positions & Routes",
              description:"Gérez vos points géographiques et itinéraires"
            },
            subtitle_4:{
              title:"Gestion Clients",
              description:"Suivi complet de votre portefeuille clients"
            },
            subtitle_5:{
              title:"Analytics",
              description:"Statistiques détaillées sur votre visibilité"
            },
            subtitle_6:{
              title:"Polylignes",
              description:"Créez des tracés complexes pour une couverture réaliste"
            }
          },
          signin: "Se connecter",
          cta: "Essai gratuit"
        },
        hero: {
            title: "Boostez votre visibilité locale",
            sub_title: "avec la puissance des cartes Google",
            description_1: "Notre solution génère automatiquement des fichiers KML optimisés pour créer",
            description_2_blue:"des milliers de positions, routes et polylines",
            description_3: "des milliers de positions, routes et polylines",
            demarrer: "Essai gratuit 14 jours",
            confiance: "+500 entreprises nous font déjà confiance"
    
        },
        advantage_section:{
          title:"Pourquoi choisir",
          title_2: "Localink ?",
          subtitle_1:{
            title:"Visibilité locale optimisée",
            description:"Améliorez votre présence sur les cartes et moteurs de recherche grâce à des liens courts et ciblés."
          },
          subtitle_2:{
            title:"Suivi en temps réel",
            description:"Analysez les clics, les zones de partage et l'engagement local via des statistiques simples et précises."
          },
          subtitle_3:{
            title:"Partage simplifié",
            description:"Générez et diffusez des liens locaux adaptés à chaque public, en quelques clics."
          },
          subtitle_4:{
            title:"Réputation renforcée",
            description:"Valorisez les retours de vos clients et boostez votre image de marque locale."
          },
          subtitle_5:{
            title:"Sécurité & confidentialité",
            description:"Vos données sont protégées selon les normes les plus strictes, pour une tranquillité totale."
          },
          subtitle_6:{
            title:"Support réactif & humain",
            description:"Bénéficiez d'une assistance experte, à l'écoute de vos besoins locaux."
          }
        },
        cta: {
            title: "Prêt à commencer à vendre ?",
            sub_title: "Rejoignez notre plateforme professionnelle dès aujourd'hui",
            signup: "S'inscrire maintenant",
            abonment: "Abonnement annuel à 25€ - Accès immédiat"
        },
        footer: {
          contact: "Contact",
          aria_label_home: "Localink - Retour à l'accueil",
          description: "La solution tout-en-un pour connecter les entreprises locales à leurs clients.",
          navigation: {
              title: "Navigation",
              prices: "Tarifs",
              testimonials: "Témoignages",
              new_features: "Nouvelles fonctionnalités",
          },
          company: {
              title: "Entreprise",
              about: "À propos",
              partners_smes: "Partenaires PME",
              partners_brands: "Partenaires Marques",
          },
          legal: {
              terms: "Mentions légales",
              privacy: "Confidentialité",
          },
          copyright: "Tous droits réservés.",
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
                    description: "Seulement 2-3% par transaction (vs 10-15% ailleurs) avec paiement hebdomadaire garanti"
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
          title: "Questions fréquentes",
          items: [
             {
              question: "Comment fonctionne la génération de fichiers KML ?",
              answer: "Notre système crée automatiquement des fichiers KML optimisés contenant des centaines de milliers de positions stratégiques, des dizaines de routes crédibles et des polylignes complexes pour maximiser votre visibilité sur Google My Maps.",
            },
            {
              question: "Combien de points géographiques puis-je générer ?",
              answer: "Selon votre abonnement, vous pouvez générer jusqu'à 250 000 points stratégiques par carte, avec des options pour les répartir de manière crédible sur votre zone d'activité.",
            },
            {
              question: "Comment les routes et polylignes améliorent-elles ma visibilité ?",
              answer: "Nos algorithmes créent des réseaux de routes réalistes qui renforcent votre présence géographique. Ces tracés sont optimisés pour apparaître naturellement dans les résultats de recherche locaux.",
            },
            {
              question: "Quelle est la fréquence de mise à jour sur Google My Maps ?",
              answer: "Les mises à jour sont synchronisées quotidiennement avec l'écosystème Google. Notre système gère intelligemment les modifications pour éviter les red flags algorithmiques.",
            },
            {
              question: "Est-ce conforme aux guidelines de Google ?",
              answer: "Notre technologie utilise des méthodes 100% conformes, en créant une présence géographique crédible sans manipuler les résultats. Nous optimisons plutôt que nous trichons.",
            },
            
            {
              question: "Puis-je suivre l'impact sur mon trafic local ?",
              answer: "Oui, notre dashboard analytique montre l'évolution de votre visibilité cartographique, le trafic généré et votre positionnement dans les recherches 'près de moi'.",
              
            },
            {
              question: "Comment gérez-vous la couverture internationale ?",
              answer: "Nous adaptons automatiquement les stratégies de positionnement aux spécificités régionales, en tenant compte des différences culturelles et des pratiques locales d'utilisation des cartes.",
              
            }
          ]
        },
        partnership: {
          title: "Nos partenaires de confiance",
          subtitle:"Rejoignez les entreprises qui optimisent leur visibilité avec Localink"
        },
        testimonials:{
          title_1: "En 3 mois, notre visibilité sur Google Maps a explosé grâce aux 15 000 points stratégiques générés par Localink. Notre trafic local a augmenté de 220%.",
          title_2: "Le système de routes virtuelles a donné une crédibilité incroyable à notre réseau de distribution. Nos partenaires sont impressionnés par notre couverture géographique.",
          title_3: "Avant Localink, nos 12 agences étaient invisibles sur Maps. Maintenant, nous dominons les recherches locales avec un maillage territorial parfait.",
          title_4: "La génération automatique de polylignes a transformé notre petite entreprise en acteur régional crédible en 6 semaines seulement.",
          title_5: "Notre KML personnalisé avec 8 000 points de vente virtuels nous a permis de décrocher un contrat majeur avec un distributeur national."
        },
        presentationvideo:{
          title: "Découvrez Localink"
        },
        
        pricing:{
          title_1: "Une tarification simple et adaptée à",
          title_2: "votre croissance",
          subtitle: "Choisissez le plan qui correspond à vos ambitions.",
          plan: {
            plan_1: {
              title: "Gratuit",
              subtitle: "Pour tester et découvrir la puissance de l’outil.",
              month: "mois",
              signin: "S’inscrire",
              inclus: {
                title: "Ce qui est inclus",
                sub_1: "3 clients sauvegardés",
                sub_2: "1 000 points maximum par carte",
                sub_3: "5 itinéraires maximum par carte",
                sub_4: "10 zones de chalandise"
              }
            },
            plan_2: {
              title: "Professionnel",
              subtitle: "Parfait pour les indépendants et petites entreprises.",
              month: "mois",
              signin: "Choisir l’offre Pro",
              inclus: {
                title: "Ce qui est inclus",
                sub_1: "10 clients sauvegardés",
                sub_2: "20 zones de chalandise",
                sub_3: "10 000 points maximum par carte",
                sub_4: "20 itinéraires maximum par carte",
                sub_5: "Assistance par e-mail"
              }
            },
            plan_3: {
              title: "Premium",
              subtitle: "Pour les agences et utilisateurs avancés.",
              month: "mois",
              signin: "Passer en Premium",
              inclus: {
                title: "Ce qui est inclus",
                sub_1: "50 clients sauvegardés",
                sub_2: "Points par carte illimités",
                sub_3: "70 zones de chalandise",
                sub_4: "100 itinéraires maximum par carte",
                sub_5: "Assistance par e-mail et chat"
              }
            },

          }
        },
        signin: {
          title: "Se connecter",
          subtitle: "Découvrez où se classe votre entreprise sur Google et obtenez des conseils pratiques pour vous améliorer.",
          input_mail: "Entrer votre email",
          input_password: "Entrer votre mot de passe",
          forget_password: "Mot de passe oublié ?",
          sign_in: "Se connecter",
          new: "Nouveau ?",
          not_have_account : "Pas encore de compte ?",
          not_have_account_signup: "Créer un compte",
          info: {
            title_1:"En vous connectant, vous acceptez nos",
            condi_utilisation: " conditions d'utilisation",
            title_2: "et",
            politic_confidential: " politique de confidentialité."
          }
        },
        compare_plan: {
          title: "Comparaison des fonctionnalités",
          sub_title: "Découvrez quelle offre correspond le mieux à vos besoins",
          features: {
            title_1: "Génération KML avancée",
            subtitle_1:"Export de fichiers KML optimisés pour Google My Maps",

            title_2: "Points géolocalisés",
            subtitle_2:"Jusqu'à 250 000 positions stratégiques générées",

            title_3: "Réseau de routes",
            subtitle_3:"Génération de dizaines d'itinéraires crédibles",

            title_4: "Polylignes complexes",
            subtitle_4:"Création de tracés avancés pour une couverture réaliste",

            title_5: "Optimisation Maps",
            subtitle_5:"Algorithme spécialisé pour le référencement Google Local",

            title_6: "Mises à jour automatiques",
            subtitle_6:"Synchronisation régulière avec l'écosystème Google",

            footer: "Tous les plans incluent une génération illimitée de cartes et un support technique"
          }
        },
        signup: {
          title: "S'inscrire",
          subtitle: "Découvrez votre classement Google actuel et obtenez des stratégies d'amélioration concrètes.",
          input_mail: "Entrer votre email",
          input_password: "Entrer votre mot de passe",
          sign_up: "S'inscrire",
          i_signup: "Déjà inscrit ?",
          you_have_account: "Vous avez déjà un compte ? ",
          you_have_account_signin: "Connectez-vous",
          info: {
            title_1:"En vous inscrivant, vous acceptez nos",
            condi_utilisation: " conditions d'utilisation",
            title_2: "et",
            politic_confidential: " politique de confidentialité."
          }

        }
    },
    dashboards: {
      dashboard: {
        title: "Tableau de Bord Admin",
        soustitle: "Gestion des clients et statistiques",
        stats: {
          stat_1: "Clients",
          stat_2: "Points",
          stat_3: "Cartes",
          stat_4: "Itinéraires"
        },
        nbrs_clients: "clients trouvés",
        not_think: "Aucun client trouvé",
        initialize: "Réinitialiser la recherche"
      },
      clients: {
        title: "Mes Clients",
        not_think: "Aucun client trouvé",
        new_client: "Commencez par créer votre premier client.",
        new_kml: "Nouveau KML"
      },
      generator : {
        title_1: "Générateur KML",
        title_2: "Formulaire de génération KML",
        description: "Remplissez tous les champs requis pour générer votre fichier KML",
        info_entreprise: "Informations de l'entreprise",
        name: "Nom de l'entreprise",
        site: "Site web",
        url_business: "URL Google MyBusiness",
        tel: "Téléphone",
        address: "Adresse de référence",
        cle: "Mots-clés SEO",
        sittings: "Paramètres avancés",
        localisation: {
          title: "Points de localisation",
        },
        zones: {
          title: "Zones de couverture",
          sousTitle_1:"Entre",
          sousTitle_2:"cercles"
        },
        itineraire: "Itinéraires ",
        button_generate: "Générer mon fichier KML",
        guide: "Guide d'utilisation"
      }
    }
} as const
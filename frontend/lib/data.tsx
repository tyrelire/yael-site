import { TransmissionIcon, FacturationIcon, SuiviIcon, RejetsIcon, MutuellesIcon, ReportingIcon } from "@/components/ui/icons";

export const services = [
  {
    icon: <TransmissionIcon />,
    title: "Télétransmission SESAM-Vitale",
    desc: "Envoi électronique de toutes vos feuilles de soins via SESAM-Vitale. Zéro démarche de votre côté, je m'en charge.",
  },
  {
    icon: <FacturationIcon />,
    title: "Facturation des actes infirmiers",
    desc: "Création et envoi de l'intégralité de votre facturation, en conformité avec la nomenclature des actes infirmiers en vigueur.",
  },
  {
    icon: <SuiviIcon />,
    title: "Suivi des remboursements",
    desc: "Vérification systématique des remboursements reçus et relance en cas de non-paiement ou d'anomalie détectée.",
  },
  {
    icon: <RejetsIcon />,
    title: "Gestion des rejets",
    desc: "Traitement de chaque rejet de la Sécurité sociale : analyse de la cause, correction et renvoi de la facturation.",
  },
  {
    icon: <MutuellesIcon />,
    title: "Relation avec les mutuelles",
    desc: "Gestion des prises en charge complémentaires et suivi des remboursements auprès des organismes de prévoyance.",
  },
  {
    icon: <ReportingIcon />,
    title: "Reporting mensuel",
    desc: "Un bilan mensuel clair et lisible de votre activité : actes facturés, remboursements perçus, encaissements du mois.",
  },
];

export const navLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Prestations", href: "/prestations" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
];

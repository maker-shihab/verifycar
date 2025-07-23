import { ContactData } from "@/types/types";

export const contactData: ContactData = {
  title: "Cerchi un'auto?",
  subtitle: "Richiedi la tua ricerca dell'auto personalizzata su misura inclusa nel prezzo del sopralluogo, sarà previsto un pagamento di quota 19.99 anticipata, da poi scalare ai 69.99 del sopralluogo.",
  description: "Da fornire i seguenti dati per la ricerca personalizzata:",
  requirements: {
    title: "Da fornire i seguenti dati per la ricerca personalizzata:",
    items: [
      "Marca",
      "Modello",
      "Versione",
      "Colore"
    ]
  },
  contactInfo: {
    title: "Ancora dubbi? Puoi trovarci qui.",
    address: {
      street: "Via corso della repubblica 322",
      city: "Velletri",
      postalCode: "00049",
      region: "RM"
    },
    phone: "+39 379 211 5840"
  },
  form: {
    title: "Contattaci",
    subtitle: "Lorem ipsum dolor sit amet consectetur.",
    fields: {
      name: "Nome e Cognome",
      email: "Il tuo indirizzo email",
      message: "Inserisci il tuo messaggio qui..."
    },
    buttonText: "Invia",
    termsText: "Procedendo con l'invio di questa email, dichiari di accettare i",
    termsLinks: {
      terms: "Termini di Servizio",
      privacy: "Privacy Policy"
    }
  }
};
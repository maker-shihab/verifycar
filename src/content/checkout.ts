import { CheckoutData } from "@/types/types";


export const checkoutData: CheckoutData = {
  title: "Checkout",
  backButtonText: "Torna indietro",
  steps: [
    {
      title: "1. Informazioni di contatto",
      fields: [
        {
          type: "email",
          name: "email",
          placeholder: "email@esempio.com",
          required: true
        },
        {
          type: "tel",
          name: "phone",
          placeholder: "Numero di telefono",
          icon: "/assets/flag.svg",
          required: true
        }
      ]
    },
    {
      title: "3. Dati per il pagamento",
      fields: [
        {
          type: "text",
          name: "name",
          placeholder: "Nome",
          required: true
        }
      ],
    },
    {
      title: "",
      fields: [
        {
          type: "text",
          name: "text",
          placeholder: "Nome",
          required: true
        },
        {
          type: "tel",
          name: "phone",
          placeholder: "Numero di telefono",
          icon: "/assets/flag.svg",
          required: true
        }
      ],
    }
  ],
  paymentMethods: [
    {
      id: "klarna",
      name: "",
      icon: "/assets/payment/klarna.png",
      bgColor: "bg-klarna-bg",
      focusedBgColor: "focus-within:border-klarna-border",
      width: 150,
      height: 35
    },
    {
      id: "card",
      name: "Carta di credito",
      icon: "/assets/payment/card.png",
      bgColor: "bg-card-bg",
      focusedBgColor: "focus-within:border-card-border",
      width: 50,
      height: 50
    },
    {
      id: "banco",
      name: "",
      icon: "/assets/payment/banco.png",
      bgColor: "bg-banco-bg",
      focusedBgColor: "focus-within:border-banco-border",
      width: 100,
      height: 50
    },
    {
      id: "google-pay",
      name: "",
      icon: "/assets/payment/google-pay.png",
      bgColor: "bg-googlePay-bg",
      focusedBgColor: "focus-within:border-googlePay-border",
      width: 150,
      height: 50
    },
    {
      id: "ideal",
      name: "",
      icon: "/assets/payment/ideal.png",
      bgColor: "bg-ideal-bg",
      focusedBgColor: "focus-within:border-ideal-border",
      width: 150,
      height: 60
    },
    {
      id: "eps",
      name: "",
      icon: "/assets/payment/eps.png",
      bgColor: "bg-eps-bg",
      focusedBgColor: "focus-within:border-eps-border",
      width: 150,
      height: 70
    },
  ],
  submitButtonText: "Prenota",
  manualAddressText: "Inserisci l'indirizzo manualmente"
};
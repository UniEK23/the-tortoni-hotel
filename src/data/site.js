import terraceImg from "../assets/images/facilities/terrace.jpg"
import salonImg from "../assets/images/facilities/the_salon.jpg"
import poolsGardenImg from "../assets/images/facilities/pool_and_garden.jpg"


// Demo Placeholders, reusable*
export const site = {
  name: "The Tortoni",
  city: "Vernice",
  whatsapp: "2348000000000",
  phone: "+234 800 000 0000",
  email: "stay@thetortoni.example",
  address: "12 Gallery Road, Vernice",
  hours: "Front desk open 24 hours · Terrace 7am to 11pm",
};

export const facilities = [
  {
    id: "terrace",
    name: "The Terrace",
    text: "Coffee at eight, something cold and sweet at four, dinner when the light goes.",
    meta: "Open daily, 7am to 11pm",
    image: terraceImg,
    alt: "The terrace at The Tortoni",
  },
  {
    id: "salon",
    name: "The Salon",
    text: "A room for weddings, launches and long dinners, set up the way you like it.",
    meta: "Up to 150 guests",
    image: salonImg,
    alt: "The Salon event room at The Tortoni",
  },
  {
    id: "garden",
    name: "Pool & Garden",
    text: "A quiet pool, shaded loungers and a garden that stays cool into the evening.",
    meta: "Open 8am to 8pm",
    image: poolsGardenImg,
    alt: "The pool and garden at The Tortoni",
  },
];

// Sample reviews
// Google reviews (with permission)
export const reviews = [
  {
    quote: "Quiet, spotless, and the best night's sleep I've had on a work trip.",
    who: "Business traveller",
  },
  {
    quote: "They remembered our names by the second morning. Small thing, big difference.",
    who: "Weekend guest",
  },
  {
    quote: "We held our reception in the Salon and the team handled everything calmly.",
    who: "Wedding party",
  },
];

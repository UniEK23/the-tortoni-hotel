import classicImg from "../assets/images/classic-room.jpg"
import deluxeImg from "../assets/images/deluxe-room.jpg"
import suiteImg from "../assets/images/executive-suite.jpg"

export const rooms = [
    {
        id: "classic",
        name: "Le Balcon",
        type: "Classic Room",
        description: "A calm room for one or two. Crisp linen, a writing desk and a window worth sitting at.",
        beds: "1 king bed",
        size: "28 sq m",
        guests: "2 guests",
        price: 95000,
        image: classicImg,
        alt: "Classic Room at The Tortoni",
    },
    {
        id: "deluxe",
        name: "Argenteuil",
        type: "Deluxe Room",
        description: "More space to stretch out, a reading chair and a bathroom that takes its time.",
        beds: "1 king bed",
        size: "36 sq m",
        guests: "2 guests",
        price: 130000,
        image: deluxeImg,
        alt: "Deluxe Room at The Tortoni",
    },
    {
        id: "suite",
        name: "Folies-Bergère",
        type: "Executive Suite",
        description: "Our largest. A separate sitting room, a long table and the best light in the house.",
        beds: "1 king bed + sofa",
        size: "58 sq m",
        guests: "3 guests",
        price: 210000,
        image: suiteImg,
        alt: "Executive Suite at The Tortoni",
    },
];
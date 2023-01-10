import { createContext, useState } from "react";

const LanguageContext = createContext();

const dictionary = {
    es: {
        menuAbout: "Sobre mi",
        menuSkills: "Habilidades",
        menuContact: "Contacto",
        menuProjects: "Projectos",
        introduceText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum eget elit sed interdum. Donec elit mauris, vestibulum vitae mi vel, porta cursus lectus.",
        codeEducation: "Ingeniero en Sistemas Computacionales",
        codeSkills: "Analitico, Trabajo en equipo",
        codeLanguage: "Inglés",
        buttonDownload: "Descargar CV",
        aboutText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum eget elit sed interdum. Donec elit mauris, vestibulum vitae mi vel, porta cursus lectus. Donec in aliquam leo, ac vulputate nibh. Morbi leo neque, sagittis malesuada ultricies eu, ullamcorper sed enim. Maecenas malesuada, eros et tincidunt consectetur, nulla risus lobortis enim, ac euismod lacus ligula nec metus",
        thanksText:
            "Gracias por interesarte en ponerte en contacto comigo sera un placer trabajar juntos.",
        project1Name: "Clon de WhatsApp",
        project1Description:
            "Creada con HTML, CSS y JS. Tiene la funcion de enviar y recibir mensajes y mostrar la notificacion de los mismos",
        project2Name: "Aplicacion de Recordatorio",
        project2Description:
            "Aplicacion que te muestra una alerta visual y sonora de tus pendientes, creado con HTML, CSS y TypeScript.",
        project3Name: "Aplicacion de Notas",
        project3Description:
            "Puedes agregar, eliminar y editar el contenido de las notas, el contenido se guarda en localStorage, creado con HTML, CSS y JS.",
        project4Name: "Aplicacion de Pendientes",
        project4Description:
            "Primera aplicacion que hice usando React, ejercicio simple para crear, eliminar y marcar pendientes.",
        project5Name: "Juego de Gato",
        project5Description:
            "Juego clasico de gato, hecho para 2 jugadores, creado con HTML, CSS y JS.",
        project6Name: "Tarjeta de Credito Virtual",
        project6Description:
            "Tarjeta virtual que genera un CVV dinamico con duracion de 10 segundos, creada con React",
    },
    en: {
        menuAbout: "About",
        menuSkills: "Skills",
        menuContact: "Contact",
        menuProjects: "Projects",
        introduceText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum eget elit sed interdum. Donec elit mauris, vestibulum vitae mi vel, porta cursus lectus.",
        codeEducation: "Bachelor's Degree Computer System Engineer",
        codeSkills: "Analytic mind, Work well in team",
        codeLanguage: "English",
        buttonDownload: "Download Resume",
        aboutText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum eget elit sed interdum. Donec elit mauris, vestibulum vitae mi vel, porta cursus lectus. Donec in aliquam leo, ac vulputate nibh. Morbi leo neque, sagittis malesuada ultricies eu, ullamcorper sed enim. Maecenas malesuada, eros et tincidunt consectetur, nulla risus lobortis enim, ac euismod lacus ligula nec metus",
        thanksText:
            "Thank you for your interest, it will be a pleasure working together.",
        project1Name: "WhatsApp clone",
        project1Description:
            "Made with HTML, CSS and JS. It shows new message notifications and you can send and receive messages as well",
        project2Name: "Reminder App",
        project2Description:
            "It shows you a visual and sound alert from your notes, made with HTML, CSS and TypeScript.",
        project3Name: "Notes App",
        project3Description:
            "You can add, delete and edit notes, and these save in local storage, made with HTML, CSS and JS.",
        project4Name: "To Do list App",
        project4Description:
            "This was my first React app, it is a simple app for creating, deleting, and marking as done every task.",
        project5Name: "Tic Tac Toe game",
        project5Description:
            "Tic Tac Toe is a classic game for 2 players, made with HTML, CSS y JS.",
        project6Name: "Virtual Credit Card",
        project6Description:
            "you can get a dynamic CVV number every 10 seconds, made with React",
    },
};

export function LanguageProvider({ children }) {
    const [text, setText] = useState(dictionary.es);

    function handleLanguage(val) {
        val === "ES" ? setText(dictionary.es) : setText(dictionary.en);
    }

    const data = { text, handleLanguage };
    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}
export default LanguageContext;

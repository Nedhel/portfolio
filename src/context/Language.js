import { createContext, useState } from "react";

const Language = createContext();

const dictionary = {
    es: {
        menuAbout: "Bienvenida",
        menuSkills: "Habilidades",
        menuContact: "Contacto",
        menuProjects: "Projectos",
        greeting: "Holaaa!!",
        introduceText:
            "Soy un desarrollador web de México, actualmente viviendo en Canada. Disfruto crear interfaces que ayuden a mejorar la interaccion de usuarios. Si tienes algún proyecto Contactame!!",
        codeEducation: "Ingeniero en Sistemas Computacionales",
        codeSkills: "Analitico, Trabajo en equipo",
        codeLanguage: "Inglés",
        buttonDownload: "Descargar CV",
        aboutText:
            "Soy ingeniero en Sistemas Computacionales egresado del Instituto Tecnologico de Morelia, trabaje durante 8 años para Telefonos de Mexico (Telmex) como supervisor y desarrollador de aplicaciones internas, actualmente dirigi mi carrera al desarrollo front-end con REACT como principal libreria JS",
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
        menuAbout: "Greeting",
        menuSkills: "Skills",
        menuContact: "Contact",
        menuProjects: "Projects",
        greeting: "Hellooo!!",
        introduceText:
            "I am a web developer from Mexico, currently living in Canada. I enjoy make friendly and simple interfaces. If you have some project in mind, let me know!",
        codeEducation: "Bachelor's Degree Computer System Engineer",
        codeSkills: "Analytic mind, Work well in team",
        codeLanguage: "English",
        buttonDownload: "Download Resume",
        aboutText:
            "I am a Computer Engineer who graduated from Instituto Tecnologico de Morelia, I worked 8 years for a Mexican telephony company (Telmex) as a supervisor and developer, and currently, I'm working as a front-end developer with REACT",
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
    return <Language.Provider value={data}>{children}</Language.Provider>;
}
export default Language;

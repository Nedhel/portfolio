import { createContext, useState } from "react";

const Language = createContext();

const dictionary = {
    es: {
        menuAbout: "Acerca de mi",
        menuSkills: "Habilidades",
        menuContact: "Contacto",
        menuProjects: "Projectos",
        greeting: "Hola!!",
        introduceText:
            "Saludos, soy un desarrollador web radicado en Canadá. Me apasiona crear interfaces amigables y minimalistas. Actualmente, me desempeño como desarrollador front-end especializado en React. Si tienes algún proyecto en mente, no dudes en comunicármelo. Estoy dispuesto a colaborar y hacer realidad tus ideas.",
        codeEducation: "Ingeniero en Sistemas Computacionales",
        codeSkills: "Analitico, Trabajo en equipo",
        codeLanguage: "Inglés",
        buttonDownload: "Descargar CV",
        aboutText:
            "Hola a todos. Mi nombre es Carlos poseo una Licenciatura en Ingeniería de Sistemas Computacionales, lo cual me ha proporcionado una sólida base en diversos aspectos de la tecnología. Durante los últimos 3 años, me he dedicado activamente al desarrollo web en el área de front-end, donde he adquirido una valiosa experiencia y he perfeccionado mis habilidades en HTML, CSS y JavaScript. También tengo experiencia en frameworks como React.js y disfruto utilizando herramientas como Tailwind CSS para crear interfaces de usuario visualmente atractivas y eficientes. Me apasiona la creación de aplicaciones web interactivas y siempre busco ampliar mis conocimientos en este campo en constante evolución.",
        thanksText:
            "Gracias por interesarte en ponerte en contacto comigo sera un placer trabajar juntos.",
        project1Name: "Clon de WhatsApp",
        project1Description:
            "Este proyecto fue de los primeros que realice con la finalidad de practicar y entender cómo funcionaba HTML, CSS y JavaScript, es una copia visual de Whatsapp con un par de funciones reales como mandar mensaje y recibir mensaje mediante la consola del navegador, creado con HTML, CSS y JavaScript",
        links1: { Git: "https://github.com/Nedhel/clone-WA" },
        project2Name: "Tarjeta de Credito Virtual",
        project2Description:
            "Este proyecto se trata de una tarjeta virtual que genera un número de seguridad dinámico cada vez que se pulsa el botón, la duración del numero de seguridad es 10 segundos, tambien agregue algunos efectos de movimiento como lo hacen algunas aplicaciones de banco, creada con React and Tailwind.",
        links2: { Git: "https://github.com/Nedhel/creditcard" },
        project3Name: "Tarjetas Publicitarias",
        project3Description:
            "Pensé en crear este proyecto como una forma de presentar algún producto o algún anuncio sobre una nueva película, creando una ilusión de movimiento y de interacción con el usuario, creada con React.",
        links3: { Git: "https://github.com/Nedhel/animation_card" },
        project4Name: "FAAR Agentes de Importación",
        project4Description:
            "Este iba a ser la página real de un cliente que se dedica a apoyar a pequeñas empresas que realizan importaciones de material o de maquinaria desde otro país hacia México, al final el cliente tuvo que cerrar su empresa y ya no se completo el proyecto, creado con React y Tailwind",
        links4: { Git: "https://github.com/Nedhel/faar" },
        project5Name: "Sacos Nacionales Especializados",
        project5Description:
            "Es pagina fue creada para un cliente cuya empresa es la creación, comercialización y venta de costales de polipropileno para envasar diferentes productos, en su mayoría fue creada con WordPress agregando algunas modificaciones con CSS",
        links5: { Web: "http://sacosnacionales.com.mx/" },
    },
    en: {
        menuAbout: "About me",
        menuSkills: "Skills",
        menuContact: "Contact",
        menuProjects: "Projects",
        greeting: "Hello!!",
        introduceText:
            "Greetings, I am a web developer based in Canada. I enjoy creating user-friendly and clean interfaces. Currently, I work as a front-end developer specializing in React. If you have any projects in mind, please let me know. I am eager to collaborate and bring your ideas to life.",
        codeEducation: "Bachelor's Degree Computer System Engineer",
        codeSkills: "Analytic mind, Work well in team",
        codeLanguage: "English",
        buttonDownload: "Download Resume",
        aboutText:
            "Hello, everyone! My name is Carlos, and I am a computer systems engineering. I hold a Bachelor's Degree in Computer Systems Engineering, which has equipped me with a strong foundation in various aspects of technology. Over the past 3 years, I have been actively involved in front-end web development, where I have gained valuable experience and honed my skills in HTML, CSS, and JavaScript. I am also well-versed in frameworks like React.js, and I enjoy utilizing tools like Tailwind CSS to create visually appealing and efficient user interfaces. I am truly passionate about creating interactive web applications and continuously strive to expand my knowledge in the ever-evolving field of front-end development.",
        thanksText:
            "Thank you for your interest, it will be a pleasure working together.",
        project1Name: "WhatsApp clone",
        project1Description:
            "This project was one of the first that I did with the purpose of practicing and understanding how HTML, CSS and JavaScript worked, it is a visual copy of WhatsApp with a couple of real functions such as sending messages and receiving messages through the browser console, created with HTML , CSS and JavaScript",
        links1: { Git: "https://github.com/Nedhel/clone-WA" },
        project2Name: "Virtual Credit Card",
        project2Description:
            "This project is about a virtual card that generates a dynamic security number every time the button is pressed, the duration of the security number is 10 seconds, I also added some movement effects like some bank applications do, created with React and Tailwind.",
        links2: { Git: "https://github.com/Nedhel/creditcard" },
        project3Name: "Advertising Cards",
        project3Description:
            "I thought of creating this project as a way to present some product or some announcement about a new movie, creating an illusion of movement and interaction with the user, created with React.",
        links3: { Git: "https://github.com/Nedhel/animation_card" },
        project4Name: "FAAR Fordwarder",
        project4Description:
            "This was going to be the real page of a client who is dedicated to supporting small companies that import material or machinery from another country to Mexico, in the end the client had to close his company and the project was no longer completed, created with React and Tailwind",
        links4: { Git: "https://github.com/Nedhel/faar" },
        project5Name: "Sacos Nacionales Especializados",
        project5Description:
            "This page was created for a client whose company is the creation, marketing and sale of polypropylene sacks to pack different products, mostly it was created with WordPress adding some modifications with CSS",
        links5: { Web: "http://sacosnacionales.com.mx/" },
    },
};

export function LanguageProvider({ children }) {
    const [text, setText] = useState(dictionary.en);

    function handleLanguage(val) {
        val === "ES" ? setText(dictionary.es) : setText(dictionary.en);
    }

    const data = { text, handleLanguage };
    return <Language.Provider value={data}>{children}</Language.Provider>;
}
export default Language;

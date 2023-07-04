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
            "Soy un desarrollador web con base en Canadá, especializado en desarrollo front-end, con un enfoque particular en React. Mi pasión radica en crear interfaces intuitivas y visualmente atractivas que mejoren la experiencia del usuario. Me enorgullece crear diseños limpios y amigables para el usuario que combinen funcionalidad y atractivo estético. Si tienes algún proyecto emocionante en mente, me encantaría saber de ellos. Estoy ansioso por colaborar y convertir tus ideas en realidad.",
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
            "Este proyecto ocupa un lugar especial, ya que fue uno de mis primeros emprendimientos con el propósito de practicar y comprender cómo funcionan HTML, CSS y JavaScript. Consiste en una réplica visual de WhatsApp con un par de funciones reales, como enviar y recibir mensajes a través de la consola del navegador, todo creado con HTML, CSS y JavaScript. A través de este proyecto, adquirí una valiosa experiencia práctica en desarrollo web, comprendiendo los conceptos fundamentales de HTML para la estructuración del contenido, CSS para el estilo y el diseño, y JavaScript para la implementación de funciones interactivas. Me permitió profundizar mi comprensión de cómo estos tres lenguajes se entrelazan de manera fluida para crear aplicaciones web dinámicas.",
        links1: { Git: "https://github.com/Nedhel/clone-WA" },
        project2Name: "Tarjeta de Credito Virtual",
        project2Description:
            "Este proyecto se trata de una tarjeta virtual que genera un número de seguridad dinámico cada vez que se presiona el botón. La duración del número de seguridad es de 10 segundos, y además he agregado efectos de movimiento similares a los que se encuentran en las aplicaciones bancarias. Todo esto ha sido creado utilizando React y Tailwind. Con React, he podido construir una interfaz de usuario interactiva y dinámica, asegurando la generación de un nuevo número de seguridad con cada presión del botón. Por su parte, Tailwind ha facilitado la implementación de atractivos efectos de movimiento, mejorando la apariencia visual de la tarjeta virtual en general. Juntos, estas tecnologías ofrecen una experiencia de usuario fluida y atractiva, brindando una solución segura y conveniente para generar números de seguridad temporales.",
        links2: { Git: "https://github.com/Nedhel/creditcard" },
        project3Name: "Tarjetas Publicitarias",
        project3Description:
            "Este proyecto surgió como una forma de presentar algún producto o anunciar una nueva película, creando una ilusión de movimiento e interacción con el usuario. Fue creado utilizando React. Mi objetivo al desarrollar este proyecto fue brindar una experiencia inmersiva al usuario, donde pudiera explorar y descubrir información sobre un producto o una película de manera interactiva. Utilizando React, pude crear una interfaz dinámica que ofrece una sensación de movimiento y permite al usuario interactuar con los elementos presentados. Esta combinación de diseño visual atractivo y funcionalidad interactiva proporciona una experiencia única y cautivadora para los usuarios.",
        links3: { Git: "https://github.com/Nedhel/animation_card" },
        project4Name: "FAAR Agentes de Importación",
        project4Description:
            "Este proyecto iba a ser la página real de un cliente dedicado a brindar apoyo a pequeñas empresas que importan materiales o maquinaria de otros países a México. Lamentablemente, debido a circunstancias imprevistas, el cliente tuvo que cerrar su empresa y el proyecto quedó sin completarse. El sitio web fue creado con React y Tailwind. El objetivo de este sitio web era proporcionar asistencia y recursos valiosos a las pequeñas empresas que se dedican a actividades de importación. La implementación de React y Tailwind permitió crear una interfaz moderna y adaptable, garantizando una experiencia amigable para el usuario. Aunque el proyecto no se pudo finalizar, es un testimonio de la visión y el compromiso del cliente en apoyar a las empresas locales en sus esfuerzos de importación.",
        links4: { Git: "https://github.com/Nedhel/faar" },
        project5Name: "Sacos Nacionales Especializados",
        project5Description:
            "Esta página fue creada para un cliente cuya empresa se dedica a la creación, comercialización y venta de sacos de polipropileno para empacar diversos productos. La mayor parte del sitio web fue construida utilizando WordPress, y se realizaron algunas modificaciones adicionales con CSS para mejorar su funcionalidad y diseño. Con el enfoque principal de promover y vender sacos de polipropileno, esta página web proporciona una plataforma para exhibir la gama de productos del cliente. Al utilizar WordPress como base, aseguramos una gestión de contenido y personalización sencilla. Para adaptar aún más el sitio web a las necesidades del cliente, se incorporaron modificaciones de CSS para refinar el aspecto visual y optimizar la experiencia del usuario. El resultado es un sitio web fácil de usar y visualmente atractivo que presenta de manera efectiva los sacos de polipropileno del cliente a posibles compradores.",
        links5: { Web: "http://sacosnacionales.com.mx/" },
        project6Name: "Discover Vancouver",
        project6Description:
            "Este proyecto es nuestro proyecto final en equipo para nuestro primer curso de desarrollo web en Tamwood. Se trata de una plataforma que muestra una variedad de actividades que las personas pueden disfrutar durante el día y la noche en Vancouver, B.C. En este proyecto, nos enfocamos en crear un diseño responsivo para garantizar una experiencia óptima en dispositivos móviles, tabletas y computadoras. Utilizamos técnicas como Flexbox y, principalmente, Grid para lograr una distribución flexible y atractiva de los elementos en la página. Fue un trabajo colaborativo en el que mi compañera de equipo, Alice, aportó su experiencia como diseñadora UI/UX de Brasil. Su conocimiento en diseño permitió que creáramos una interfaz visualmente atractiva y fácil de usar para los usuarios.",
        links6: {
            Git: "https://github.com/AliceLzz/discovery-vancouver",
            Alice_Lazzari_Portfolio: "https://alicelazzari.com/",
        },
    },
    en: {
        menuAbout: "About me",
        menuSkills: "Skills",
        menuContact: "Contact",
        menuProjects: "Projects",
        greeting: "Hello!!",
        introduceText:
            "I am a web developer based in Canada, with a specialization in front-end development, particularly focusing on React. My passion lies in creating intuitive and visually appealing interfaces that enhance user experience. I take pride in crafting clean and user-friendly designs that bring functionality and aesthetic appeal together. If you have any exciting projects in mind, I would be thrilled to hear about them. I am eager to collaborate and transform your ideas into a reality.",
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
            "This project holds a special place as one of my early ventures aimed at practicing and comprehending the workings of HTML, CSS, and JavaScript. It serves as a visual replica of WhatsApp, encompassing key functionalities like sending and receiving messages, all achieved through the browser console. The project was entirely built using HTML, CSS, and JavaScript. Through this undertaking, I gained valuable hands-on experience in web development, grasping the fundamental concepts of HTML for structuring the content, CSS for styling and layout, and JavaScript for implementing interactive features. It allowed me to deepen my understanding of how these three languages seamlessly intertwine to create dynamic web applications.",
        links1: { Git: "https://github.com/Nedhel/clone-WA" },
        project2Name: "Virtual Credit Card",
        project2Description:
            "This project revolves around a virtual card that generates a unique security number dynamically each time the button is pressed. The security number remains active for a duration of 10 seconds, providing a temporary and secure identification. Additionally, I incorporated movement effects similar to those found in banking applications to enhance the user experience. This project was developed using React and Tailwind, leveraging their capabilities to create a responsive and visually appealing virtual card. By utilizing React, I was able to build an interactive and dynamic user interface, ensuring the generation of a new security number with each button press. Tailwind, on the other hand, facilitated the implementation of attractive movement effects, enhancing the overall visual appeal of the virtual card. Together, these technologies offer a seamless and engaging user experience, providing a secure and convenient solution for generating temporary security numbers.",
        links2: { Git: "https://github.com/Nedhel/creditcard" },
        project3Name: "Advertising Cards",
        project3Description:
            "I came up with this project as a way to showcase a product or announce a new movie, creating an illusion of movement and interaction with the user. It was created using React. My goal in developing this project was to provide an immersive experience to the user, where they could explore and discover information about a product or a movie in an interactive way. By utilizing React, I was able to create a dynamic interface that offers a sense of movement and allows the user to interact with the presented elements. This combination of visually appealing design and interactive functionality provides a unique and captivating experience for users.",
        links3: { Git: "https://github.com/Nedhel/animation_card" },
        project4Name: "FAAR Fordwarder",
        project4Description:
            "This project aimed to be the actual website for a client who specialized in supporting small businesses importing materials or machinery from other countries to Mexico. Unfortunately, due to unforeseen circumstances, the client had to close their company, resulting in the project remaining unfinished. The website was developed using React and Tailwind. The purpose of this website was to provide valuable assistance and resources to small companies involved in import activities. The implementation of React and Tailwind allowed for the creation of a modern and responsive interface, ensuring a user-friendly experience. Although the project was ultimately left incomplete, it served as a testament to the client's vision and commitment to supporting local businesses in their import endeavors.",
        links4: { Git: "https://github.com/Nedhel/faar" },
        project5Name: "Sacos Nacionales Especializados",
        project5Description:
            "This webpage was specifically developed for a client whose company specializes in creating, marketing, and selling polypropylene sacks for packaging various products. The majority of the website was built using WordPress, with additional modifications made using CSS to enhance its functionality and design. With the primary focus on promoting and selling polypropylene sacks, this webpage provides a platform for showcasing the client's product range. By utilizing WordPress as the foundation, we ensured easy content management and customization. To further tailor the website to the client's needs, CSS modifications were incorporated to refine the visual appearance and optimize user experience. The result is a user-friendly and visually appealing website that effectively presents the client's polypropylene sacks to potential customers.",
        links5: { Web: "http://sacosnacionales.com.mx/" },
        project6Name: "Discover Vancouver",
        project6Description:
            "This project was our final team project for our first web development course at Tamwood. It showcases activities that people can do during the day and night in Vancouver, B.C. We used a responsive design approach, catering to mobile phones, tablets, and computers, using Flexbox and primarily Grid for layout. My teammate for this project was Alice, a UI/UX designer from Brazil. In this collaborative project, Alice brought her expertise as a UI/UX designer to create visually appealing and user-friendly interfaces. We are proud of the outcome, which represents our effort and learning in the field of web development. Our goal is to provide inspiration to users seeking exciting activities in Vancouver, whether its day or night.",
        links6: {
            Git: "https://github.com/AliceLzz/discovery-vancouver",
            Alice_Lazzari_Portfolio: "https://alicelazzari.com/",
        },
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

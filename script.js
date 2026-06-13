console.log("Moda ECCI cargada correctamente");

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

const translations = {
    es: {
        navbar: "Evento Moda ECCI",
        inicio: "Inicio",
        introduccion: "Introducción",
        experiencia: "Experiencia",
        galeria: "Galería",
        glosario: "Glosario",
        conclusion: "Conclusión",
        titulo: "Teoría del Color en la Moda",
        titulo1: "Con Sara Viloria",
        mas: "Conocer más",
        intro: "Introducción",
        introp: "Este sitio web fue desarrollado con el propósito de presentar los principales aprendizajes obtenidos durante el evento MODA ECCI y la conferencia Traigamos el color de vuelta, dirigida por Sara Viloria.A través de este espacio se exploran conceptos relacionados con la teoría del color, el sistema Pantone y la semiología visual, destacando su impacto en la moda, la comunicación y la identidad visual.",
        obj: "Objetivos del sitio web",
        obj1: "Compartir los conocimientos adquiridos durante la conferencia MODA ECCI",
        obj2: "Explicar la importancia de la teoría del color en el mundo de la moda.",
        obj3: "Dar a conocer el papel del sistema Pantone en la comunicación visual",
        obj4: "Analizar cómo los colores influyen en las emociones y percepciones.",
        obj5: "Aplicar conceptos de diseño y desarrollo web en una experiencia interactiva.",
        miexperiencia: "Mi Experiencia",
        aprendizajes: "🎓 Aprendizajes Obtenidos",
        aprendizajesp: "Aprendí sobre la teoría del color, la importancia de Pantone como estándar internacional y cómo los colores transmiten emociones, mensajes y significados diferentes según el contexto cultural y personal de cada individuo",
        aspectos: "👀 Aspectos que Llamaron mi Atención",
        aspectosp: "Lo que más me gustó fue la metodología de la conferencista, quien utilizó diapositivas tipo collage llenas de imágenes, colores y ejemplos visuales que hicieron la presentación más atractiva y fácil de comprender.",
        industria: "💻 Industria Creativa y Software",
        industriap: "La conferencia me permitió entender que el diseño y la tecnología están estrechamente relacionados. En el desarrollo de software, el uso adecuado del color mejora la comunicación, la accesibilidad y la interacción entre el usuario y las aplicaciones.",
        aplicacion: "🎨 Aplicación del Color en UX",
        aplicacionp: "Los colores influyen en la experiencia de usuario porque ayudan a guiar la navegación, destacar información importante y transmitir emociones. Una buena selección de colores puede hacer que un sitio web sea más atractivo y fácil de utilizar.",
        pantone: "🌈 Pantone y Semiología Visual",
        pantonep: "El sistema Pantone es de suma importancia ya que se usa para garantizar la uniformidad de los colores en distintos medios. La semiología visual interpreta los mensajes y emociones que los colores pueden comunicar.",
        reflexion: "🚀 Reflexión Personal",
        reflexionp: "Esta experiencia fortaleció mi formación profesional porque me permitió conocer perspectivas diferentes a mi área de estudio. Entendí que combinar creatividad, diseño y tecnología es clave para desarrollar productos digitales innovadores",
        galeria: "Galería",
        glosariosection: "Glosario de Moda",
        glosariop: "Descubre los términos técnicos y conceptos más importantes vistos durante la conferencia, relacionados con la teoría del color, el diseño y la comunicación visual.",
        botonglosario: "Explorar Glosario",
        conclusion1: "Conclusión",
        conclusionp: "La tecnología desempeña un papel fundamental en la transformación de la industria de la moda hacia  modelos más sostenibles. A través de la optimización de recursos, la reducción de residuos y la implementación de procesos más eficientes, se promueve la economía circular, fomentando la reutilización y el reciclaje de materiales.Estas prácticas contribuyen a disminuir el impacto ambiental y favorecen una producción más responsable, equilibrando la innovación, la creatividad y el cuidado del medio ambiente.",
        footer: "🎨 MODA ECCI | Desarrollado por Herly Johana Villamizar Carreño"

    },

    en: {
        navbar: "Moda ECCI Event",
        inicio: "Home",
        introduccion: "Introduction",
        experiencia: "Learning Experience",
        galeria: "Photo Gallery",
        glosario: "Glossary",
        conclusion: "Conclusion",
        titulo: "Color Theory in Fashion",
        titulo1: "With Sara Viloria",
        mas: "Learn More",
        intro: "Introduction",
        introp: "This website was created to showcase the key lessons learned during the MODA ECCI event and the conference 'Let's Bring Color Back', presented by Sara Viloria. It explores concepts related to color theory, the Pantone system, and visual semiotics, emphasizing their influence on fashion, communication, and visual identity.",
        obj: "Website objectives",
        obj1: "Share the knowledge acquired during the ECCI MODA Conference",
        obj2: "Explain the importance of color theory in the world of fashion.",
        obj3: "Present the role of the Pantone system in visual communication.",
        obj4: "Analyze how colors influence emotions and perceptions.",
        obj5: "Apply web design and development concepts in an interactive experience.",
        miexperiencia: "My Experience",
        aprendizajes: "🎓 Lessons Learned",
        aprendizajesp: "I learned about color theory, the importance of Pantone as an international standard, and how colors convey emotions, messages, and different meanings depending on each individual's cultural and personal context",
        aspectos: "👀 Aspects That Caught My Attention",
        aspectosp: "What I liked most was the speaker's methodology, who used collage-style slides filled with images, colors, and visual examples that made the presentation more engaging and easier to understand.",
        industria: "💻 Creative Industry and Software",
        industriap: "The conference allowed me to understand that design and technology are closely related. In software development, the proper use of color improves communication, accessibility, and interaction between users and applications.",
        aplicacion: "🎨 Color Application in UX",
        aplicacionp: "Colors influence the user experience because they help guide navigation, highlight important information, and convey emotions. A good color selection can make a website more attractive and easier to use.",
        pantone: "🌈 Pantone and Visual Semiotics",
        pantonep: "The Pantone system is extremely important because it is used to ensure color consistency across different media. Visual semiotics interprets the messages and emotions that colors can communicate.",
        reflexion: "🚀 Personal Reflection",
        reflexionp: "This experience strengthened my professional training because it allowed me to learn about perspectives different from my field of study. I understood that combining creativity, design, and technology is key to developing innovative digital products",
        galeria: "Gallery",
        glosariosection: "Fashion Glossary",
        glosariop: "Discover the most important technical terms and concepts presented during the conference, related to color theory, design, and visual communication.",
        botonglosario: "Explore Glossary",
        conclusion1: "Conclusion",
        conclusionp: "Technology plays a fundamental role in transforming the fashion industry toward more sustainable models. Through resource optimization, waste reduction, and the implementation of more efficient processes, the circular economy is promoted by encouraging the reuse and recycling of materials. These practices help reduce environmental impact and support more responsible production, balancing innovation, creativity, and environmental care.",
        footer: "🎨 MODA ECCI | Developed by Herly Johana Villamizar Carreño"
    }
};

let currentLanguage = "es";

document.getElementById("languageBtn").addEventListener("click", () => {

    currentLanguage = currentLanguage === "es" ? "en" : "es";

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.getAttribute("data-lang");

        element.textContent = translations[currentLanguage][key];
    });

    document.getElementById("languageBtn").textContent =
        currentLanguage === "es" ? "EN" : "ES";
});
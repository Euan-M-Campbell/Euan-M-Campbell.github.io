const strings = {
  'name': {'ru': 'Еюан Маклин Кэмпбелл', 'en': 'Euan McLean Campbell'},
  'role': {'ru': 'Разработчик', 'en': 'Software Developer'},
  'education': {'ru': 'Образование', 'en': 'Education'},
  'experience': {'ru': 'Опыт', 'en': 'Experience'},
  'tech-stack': {'ru': 'Навыки', 'en': 'Tech-Stack'},
  'projects': {'ru': 'Проекты', 'en': 'Portfolio'},
  'portfolio': {'ru': 'Проекты', 'en': 'Portfolio'},
  'contact': {'ru': 'Контакт', 'en': 'Contact'},
  'bio': {'ru': 'Био', 'en': 'Bio'},
  'bio-p-1': {'ru': 'Студент четвертого курса бакалавриата компьютерных наук (с отличием) Эдинбургского университета Нейпир.', 'en': 'Fourth-year BSc (Hons) Computer Science student at Edinburgh Napier University.'},
  'bio-p-2': {'ru': 'Опыт разработки полного цикла, сопровождения программного обеспечения и эффективного сотрудничества в командах разработчиков. Уверен в основных концепциях разработки, включая алгоритмы, структуры данных и шаблоны проектирования.', 'en': 'Experienced in full-stack development, software maintenance, and effective collaboration within development teams. Confident in core development concepts, including algorithms, data structures, and design patterns.'},
  'bio-p-3': {'ru': 'Я увлечен созданием высокопроизводительных, масштабируемых систем путем написания чистого, удобного в обслуживании кода и применения лучших практик. Я особенно заинтересован в изучении новых технологий, таких как искусственный интеллект и его применения для решения сложных реальных задач.', 'en': 'Passionate about building high-performance, scalable systems by writing clean, maintainable code and adhering to best practices. I am particularly interested in exploring emerging technologies such as artificial intelligence and its applications in solving complex, real-world problems.'},
  "bio-p-4": {"ru": "Ищу возможности применить свои навыки и знания в сложной роли разработчика программного обеспечения, где я могу вносить вклад в инновационные проекты и продолжать развиваться как разработчик.", "en": "Seeking opportunities to apply my skills and knowledge in a challenging software development role, where I can contribute to innovative projects and continue to grow as a developer."},
  "bio-p-5": {"ru": "В настоящее время я говорю на русском языке на среднем уровне и постоянно работаю над улучшением своих языковых навыков. Прожив три месяца в Санкт-Петербурге и Москве с сентября по декабрь 2023 года, я получил сильную мотивацию работать в технологическом секторе России.", "en": ""},
  'bsc-computer-science': {'ru': 'Бакалавр компьютерных наук (с отличием) {', 'en': 'BSc (Hons) Computer Science {'},
  'edinburgh-napier-university': {'ru': 'Университет Эдинбурга Нейпир', 'en': 'Edinburgh Napier University'},
  'napier-grade': {'ru': "Оценка: Первый класс (предполагаемая)", 'en': "Grade: First-Class (Projected)"},
  'napier-p-1': {'ru': 'Добился успехов в изучении модулей, охватывающих широкий спектр дисциплин и технологий как в области вычислительной техники высокого, так и низкого уровня. Разрабатывал и демонстрировал курсовые проекты, включая веб-приложения, мобильные приложения и системы баз данных. Участвовал во внеклассных мероприятиях, таких как ежегодные хакатоны.', 'en': 'Achieved merit in modules covering a wide array of subjects and technologies in both high-level and low-level areas of computing. Designed, developed and showcased coursework projects including web applications, mobile applications and database systems. Participated in extracurricular events such as annual hackathons.'},
  'napier-p-2': {'ru': 'Оценки за последний год:', 'en': 'Final Year Grades:'},
  "module-list-1": {'ru': '73% - Мультиагентные системы', 'en': '73% - Multi-Agent Systems'},
  "module-list-2": {'ru': '77% - Архитектура программного обеспечения', 'en': '77% - Software Architecture'},
  "module-list-3": {'ru': 'Уточняется - Формальные подходы к разработке программного обеспечения', 'en': 'TBC - Formal Approaches to Software Engineering'},
  "module-list-4": {'ru': 'Уточняется - Вычислительный интеллект', 'en': 'TBC - Computational Intelligence'},
  "module-list-5": {'ru': 'Уточняется - Выпускной проект: "Сравнительный анализ CPython и Mojo с точки зрения производительности и удобства использования."', 'en': 'TBC - Honours Project: "A Comparative Analysis of CPython and Mojo for Performance and Usability."'},
  "russian-language-studies": {'ru': "Изучение русского языка {", 'en': "Russian Language Studies {"},
  "international-house-edinburgh": {'ru': "International House Эдинбург", 'en': "International House Edinburgh"},
  "international-house-grade": {'ru': "Оценка: B2 (CERF)", 'en': "Grade: B2 (CERF)"},
  "international-house-p-1": {'ru': "Изучал русский язык и культуру в течение года, достигнув уровня B2 в разговорной речи, восприятии на слух, чтении и письме. Завершил курсовые работы и экзамены по грамматике, лексике и пониманию. Участвовал в упражнениях на говорение и восприятие на слух, а также в разговорной практике с носителями языка.", 'en': "Studied Russian language and culture for a year, achieving a B2 level of proficiency in speaking, listening, reading and writing. Completed coursework and exams in grammar, vocabulary, and comprehension. Participated in speaking and listening exercises, and conversational practice with native speakers."},
  "scottish-highers-nat-5": {'ru': "Шотландские Highers и National 5s {", 'en': "Scottish Highers and National 5s {"},
  "scottish-highers": {'ru': "Шотландские Highers и National 5s", 'en': "Scottish Highers and National 5s"},
  "scottish-highers-p-1": {'ru': "Развил глубокий интерес к науке, особенно к физике, которая заложила основу моего академического пути. Эти предметы пробудили во мне любопытство и привели к более глубокому пониманию науки, технологий и инженерного дела.", 'en': "Developed a keen interest in science, particularly physics, which formed the foundation of my academic journey. These subjects sparked my curiosity and led to a deeper understanding of science, technology and engineering."},
  "subjects": {'ru': "Предметы:", 'en': "Subjects:"},
  "subject-list-1": {'ru': "B - Физика (Higher)", 'en': "B - Higher Physics"},
  "subject-list-2": {'ru': "B - Биология (Higher)", 'en': "B - Higher Biology"},
  "subject-list-3": {'ru': "C - Математика (Higher)", 'en': "C - Higher Mathematics"},
  "subject-list-4": {'ru': "C - Английский (Higher)", 'en': "C - Higher English"},
  "subject-list-5": {'ru': "A - Религиозные, моральные и философские исследования (National 5)", 'en': "A - National 5 Religious, Moral and Philosophical Studies"},
  "subject-list-6": {'ru': "B - Химия (National 5)", 'en': "B - National 5 Chemistry"},
  "tech-stack-tab-title": {'ru': "Навыки", 'en': "Tech-Stack"},
  "tab-subsection-client-side": {'ru': "Клиентская разработка {", 'en': "Client-Side Development {"},
  "tab-subsection-cliet-side-p-1": {'ru': 'На протяжении моих академических исследований и опыта в разработке программного обеспечения я развил сильные навыки в клиентской веб-разработке. У меня есть опыт работы с JavaScript, TypeScript, HTML и CSS в рамках таких фреймворков, как Angular и React, для создания динамических одностраничных веб-приложений. Я уверен в основных клиентских процессах, таких как манипулирование DOM, управление состоянием, компоненты и оптимизация, что позволяет разрабатывать отзывчивые и насыщенные данными веб-приложения.', 'en': 'Throughout my academic studies and experience in software development, I have developed a strong skills in client-side web development. I have experience using Javascript, TypeScript, HTML, and CSS within frameworks such as Angular and React to create dynamic single-page web applications. I am confident in core client-side processes such as DOM manipulation, state management, components and optimization, that allow for the development of responsive and data-intensive web applications.'},
  "tab-subsection-server-side": {'ru': "Серверная разработка {", 'en': "Server-Side Development {"},
  "tab-subsection-server-side-p-1": {'ru': 'У меня есть практический опыт серверной разработки, я создавал несколько проектов с трехуровневой архитектурой, используя библиотеки, такие как Node.js, Flask и Django. Я обладаю глубоким пониманием ключевых серверных концепций, включая проектирование REST API, аутентификацию, интеграцию промежуточного программного обеспечения и оптимизацию серверов. Мои проекты включали создание масштабируемых и безопасных серверных систем для поддержки динамических веб-приложений, обеспечивая эффективную обработку данных и бесшовное взаимодействие между клиентским и базовым слоями.', 'en': 'I have hands-on experience in server-side development, having built several three-tiered architecture projects using libraries such as Node.js, Flask, and Django. I possess a solid understanding of core server-side concepts, including REST API design, authentication, middleware integration, and server optimization. My projects have involved creating scalable and secure backend systems to support dynamic web applications, ensuring efficient data handling and seamless communication between the client and database layers.'},
  "tab-subsection-database": {'ru': "Управление базами данных {", 'en': "Database Management {"},
  "tab-subsection-database-p-1": {'ru': 'Я работал как с реляционными, так и с NoSQL базами данных, включая SQLite, PostgreSQL и Firestore. Мой опыт включает в себя проектирование и реализацию схем баз данных, написание сложных запросов и оптимизацию производительности баз данных для приложений. Я понимаю сильные стороны и случаи использования реляционных баз данных (например, таблицы, объединения, нормализация) и документно-ориентированных баз данных (например, коллекции, вложенные структуры данных), что позволяет мне выбирать подходящую систему баз данных в зависимости от требований проекта.', 'en': 'I have worked with both relational and NoSQL databases, including SQLite, PostgreSQL, and Firestore. My experience includes designing and implementing database schemas, writing complex queries, and optimizing database performance for applications. I understand the strengths and use cases of relational (e.g., tables, joins, normalization) and document-based databases (e.g., collections, nested data structures), allowing me to choose the appropriate database system based on project requirements.'},
  "tab-subsection-tools": {'ru': "Инструменты и платформы {", 'en': "Tools & Platforms {"},
  "tab-subsection-tools-p-1": {'ru': 'Я хорошо владею использованием Git для контроля версий и имею опыт участия в программных проектах корпоративного уровня, используя TortoiseGit. Кроме того, я изучал облачные платформы, такие как AWS и Google Cloud, развертывая приложения с использованием Google Cloud App Engine и функций Lambda. У меня также есть опыт работы с инструментами контейнеризации, такими как Docker, что позволяет создавать согласованные среды развертывания, а также работать с виртуальными машинами и WSL (Подсистема Windows для Linux) для разработки и тестирования приложений в Ubuntu. Мое знакомство с этими инструментами и платформами позволяет мне эффективно управлять процессами разработки и развертывать масштабируемые облачные решения.', 'en': 'I am proficient in using Git for version control, with experience contributing to enterprise-level software projects using TortoiseGit. Additionally, I have explored cloud platforms such as AWS and Google Cloud, deploying applications using Google Cloud App Engine with Lambda functions. I also have experience with containerization tools like Docker, enabling consistent deployment environments, and have worked with virtual machines and WSL (Windows Subsystem for Linux) to develop and test applications in Ubuntu. My familiarity with these tools and platforms allows me to effectively manage development workflows and deploy scalable, cloud-based solutions.'},
  "tab-title-experience": {'ru': 'Опыт', 'en': 'Experience'},
  "tab-subsection-title-r&d-intern": {'ru': 'Стажёр в отделе исследований и разработок {', 'en': 'R&D Intern {'},
  "tab-subsection-r&d-p-1": {'ru': 'Июнь 2023 - Сентябрь 2023', 'en': 'June 2023 - September 2023'},
  "tab-subsection-r&d-p-2": {'ru': 'Во время моей второй стажировки в SAS я снова присоединился к команде поиска и сетевого обнаружения (SAND), где мне было поручено разработать и внедрить новую функцию "Сохраненные поиски" для приложения SAS Visual Investigator. Эта функция предоставила пользователям возможность создавать, сохранять и управлять сложными поисковыми запросами, включая параметры, такие как текст, атрибуты элементов и местоположение. Функция была разработана с использованием Angular, и за время ее разработки я углубил свои знания о фреймворке Angular и компонентной клиентской веб-разработке. Кроме того, я вносил исправления ошибок, создавал документацию и проводил код-ревью.', 'en': 'During my second internship at SAS I rejoined the Search and Network Discovery (SAND) team where I was given responsibility of developing and implementing a new "Saved Searches" feature for the SAS Visual Investigator application. The feature allowed provided users to the functionality to create, save and manage complex search queries including parameters such as text, item attributes and location. The feature was developed using Angular, and over the duration of its development I strengthened my understanding of the Angular Framework and component-based client-side web development. Additionally I contributed bug fixes, created documentation, and completed code reviews.'},
  "tab-subsection-r&d-p-3": {'ru': 'Июнь 2022 - Сентябрь 2022', 'en': 'June 2022 - September 2022'},
  "tab-subsection-r&d-p-4": {'ru': 'Во время моей первой стажировки в SAS я присоединился к команде поиска и сетевого обнаружения (SAND), где я использовал фреймворк Angular для внесения вклада в приложение SAS Visual Investigator. Во время этой стажировки я получил опыт работы в Scrum-команде и участия в проектных встречах. Мне было поручено разработать новую функцию "Диаграмма системы", которая позволяет администраторам Visual Investigator визуализировать компоненты системы и их взаимосвязи в динамическом графе узлов и связей.', 'en': 'During my first internship as SAS I joined the Search and Network Discovery (SAND) team where I used the Angular Framework to contribute to the SAS Visual Investigator application. During this internship I gained experience working as part of a Scrum team and participating in design meetings. I was tasked with developing a new "System Diagram" feature, to allow Visual Investigator admin users to visualize the components of a system and their relationships in a dynamic node-edge graph.'},
  "tab-subsection-title-dissertation": {"ru": "Проект бакалаврской диссертации {", "en": "Undergraduate Dissertation Project {"},
  "tab-subsection-title-gdi": {"ru": "Пакет глобального интерфейса данных {", "en": "Global Data Interface Package {"},
  "tab-subsection-title-mas": {"ru": "Многоагентные системы {", "en": "Multi-Agent Systems {"},
  "tab-subsection-dissertation-p-1": {"ru": '"Сравнительный анализ CPython и Mojo по производительности и удобству использования."', 'en': '"A Comparative Analysis of CPython and Mojo for Performance and Usability."'},
  "tab-subsection-dissertation-p-2": {"ru": "Разработан сравнительный анализ CPython и его надмножества Mojo, путём реализации сопоставимых алгоритмов и тестирования ключевых бенчмарков. Изучены различные подходы, используемые в проектировании языков и компиляторов, и их влияние на производительность и удобство использования.", "en": "Developed a comparative analysis of CPython and its superset Mojo, by implementing comparable algorithm implementations and testing key benchmarks. Investigated the different approaches taken in language and compiler design, and their impacts on performance and usability."},
  "tab-subsection-dissertation-p-3": {"ru": "Сравненные реализации алгоритмов:", "en": "Algorithm Implementations Compared:"},
  "tab-subsection-dissertation-p-4": {"ru": "Используя более явный контроль Mojo над низкоуровневыми системными ресурсами, время выполнения алгоритмов увеличилось до 5 раз по сравнению с обычным CPython.", "en": "Through utilising Mojo's more explicit control over low system resources, execution time of algorithms was increased by up to 5x over standard CPython."},
  "tab-subsection-dissertation-li-1": {"ru": "Умножение матриц", "en": "Matrix Multiplication"},
  "tab-subsection-dissertation-li-2": {"ru": "Быстрая сортировка", "en": "Quick Sort"},
  "tab-subsection-dissertation-li-3": {"ru": "Поиск пути A*", "en": "A* Pathfinding"},
  "tab-subsection-dissertation-li-4": {"ru": "Игра жизни Конвея", "en": "Conway's Game of Life"},
  "tab-subsection-gdi-p-1": {"ru": "Пакет Python для взаимодействия с несколькими API, предоставляющими международные временные ряды данных", "en": "Python package for interfacing with multiple APIs providing international time-series data"},
  "tab-subsection-gdi-p-2": {"ru": "Global Data Interface пакет Python, предназначенный для предоставления унифицированного интерфейса для простого запроса данных из нескольких API, предоставляющих международные временные ряды данных. Включает клиентов для API таких организаций, как Всемирный банк (WB), ООН (UN), МВФ (IMF) и ВТО (WTO).", "en": "Global Data Interface is a Python package designed to provide a unified interface to easily query for data from a number of APIs providing international time series data. Includes clients for APIs from organizations such as the WB, UN, IMF, and WTO."},
  "tab-subsection-mas-p-1": {"ru": "Фреймворк, разработанный на Python для создания проектов MAS.", "en": "Framework developed in Python for creating MAS projects."},
  "tab-subsection-mas-p-2": {"ru": "Фреймворк Multi-Agent System предоставляет строительные блоки для создания многоагентных систем. Обеспечивает создание нескольких агентов, которые взаимодействуют друг с другом и с общей средой. Агенты действуют независимо и работают асинхронно. Может быть использован в качестве основы для ряда проектов MAS.", "en": "The Multi-Agent System Framework provides the building blocks to create a multi-agent system. Enables the creation of multiple agents that interact with each other and a shared environment. Agents act independently, and run asynchronously. Can be used as a foundation for a number of MAS projects."},
  "tab-subsection-mas-p-3": {"ru": "Демонстрация показывает использование фреймворка для создания симуляции муравьев, собирающих еду и возвращающих её в гнездо. Муравьи действуют независимо, помогая друг другу, оставляя следы в окружающей среде.", "en": "The demo shows the framework used to create a simulation of Ants collecting food and returning it to a nest. Ants function independently while assisting each other through leaving trails in the environment"}
}   

let globalLang = 'en';
let globalTabName = 'bio';

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('page-head');
    const content = document.getElementById('page-content');
    const tabHead= document.getElementById('tab-head');
    
    // We'll track the "shrink amount" in pixels
    let headerDelta = 0;
    
    // Calculate header sizes in pixels based on window height
    function getHeaderSizes() {
      const windowHeight = window.innerHeight;
      return {
        maxHeight: 0.2 * windowHeight, // 20vh in pixels
        minHeight: 0.1 * windowHeight  // 10vh in pixels
      };
    }
    
    // Update header height and content margin-top
    function updateHeader() {
      const { maxHeight, minHeight } = getHeaderSizes();
      const headerDiff = maxHeight - minHeight;
      // headerDelta is clamped between 0 and headerDiff
      headerDelta = Math.min(Math.max(headerDelta, 0), headerDiff);
      const newHeight = maxHeight - headerDelta;
      header.style.height = newHeight + 'px';
      content.style.marginTop = newHeight + 'px';
    }
    
    // Set initial header height and margin-top
    updateHeader();
    
    // Listen for wheel events to intercept scrolling
    document.addEventListener('wheel', function(event) {
      const { maxHeight, minHeight } = getHeaderSizes();
      const headerDiff = maxHeight - minHeight;
      const deltaY = event.deltaY;
      
      // Scrolling down
      if (deltaY > 0) {
        // If header isn't fully shrunk, consume the wheel event to shrink header
        if (headerDelta < headerDiff) {
          headerDelta = Math.min(headerDelta + deltaY, headerDiff);
          updateHeader();
          event.preventDefault(); // prevent the page from scrolling
          // Keep page scroll position at 0 while header shrinks
          window.scrollTo(0, 0);
        }
        // If header is fully shrunk, allow scrolling to occur normally.
      } 
      // Scrolling up
      else if (deltaY < 0) {
        // If the content is already scrolled down, let the browser scroll normally.
        // Otherwise, if we're at the top (pageYOffset === 0) and the header is shrunk, expand it.
        if (window.pageYOffset === 0 && headerDelta > 0) {
          headerDelta = Math.max(headerDelta + deltaY, 0); // deltaY is negative here
          updateHeader();
          event.preventDefault();
          window.scrollTo(0, 0);
        }
      }
    }, { passive: false });
    
    // Update header if the window is resized
    window.addEventListener('resize', updateHeader);
});

function adjustFontSize() {
    const pageHead = document.getElementById("page-head");
    if (!pageHead) return;
  
    // Convert 1vh to pixels
    const oneVh = window.innerHeight / 100;
    // Get the height of #page-head in vh units
    const heightVh = pageHead.getBoundingClientRect().height / oneVh;
  
    // Map height from 10vh (min) to 20vh (max) into a ratio (0 to 1)
    // Clamp the ratio between 0 and 1
    let ratio = (heightVh - 10) / 10;
    ratio = Math.max(0, Math.min(ratio, 1));
  
    // Calculate new font sizes based on the ratio
    // For h1: from 4vh (min) to 6vh (max)
    const newH1Size = 4 + 2 * ratio;
    // For h2: from 2vh (min) to 3vh (max)
    const newH2Size = 2 + 1 * ratio;
  
    // Apply new font sizes
    const h1 = pageHead.querySelector("h1");
    const h2 = pageHead.querySelector("h2");
    if (h1) h1.style.fontSize = newH1Size + "vh";
    if (h2) h2.style.fontSize = newH2Size + "vh";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    adjustFontSize();
  
    // Use ResizeObserver to monitor changes in #page-head's size
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(adjustFontSize);
      observer.observe(document.getElementById("page-head"));
    } else {
      // Fallback: update on window resize
      window.addEventListener("resize", adjustFontSize);
    }
});

function showTab(tabName) {
    globalTabName = tabName;

    // Check if the user has scrolled down more than 10vh
    if (window.scrollY > window.innerHeight * 0) {
      // Scroll the page back to 10vh
      window.scrollTo(0, window.innerHeight * 0);
    }

    // Hide all tabs
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    const tabTitle = document.querySelector("#tab-title");
    tabTitle.textContent = strings[tabName][globalLang];

    // Show the selected tab
    var selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    // Remove active styling from all nav buttons
    var buttons = document.getElementById('nav-bar').getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.borderBottom = '5px solid white'; // Reset to default
    }

    // Add active styling to the selected tab's button
    var activeButton = document.getElementById('btn-' + tabName);
    if (activeButton) {
        activeButton.style.borderBottom = '5px solid darkgrey';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector("#page-head h1");
    const h2 = document.querySelector("#page-head h2");

    // Array of the strings you want to display for h1
    const stringsH1 = [
        "$",
        "€",
        "£",
        "E",
        "E>",
        "Eu",
        "Eu6",
        "Euap",
        "Euan=",
        "Euan ?",
        "Euan j",
        "Euan k",
        "Euan M[",
        "Euan MK",
        "Euan Mc|",
        "Euan Mcl",
        "Euan McL€",
        "Euan McLe=",
        "Euan McLe@",
        "Euan McLeaj",
        "Euan McLean/",
        "Euan McLean V",
        "Euan McLean Cp",
        "Euan McLean C+",
        "Euan McLean Ca^",
        "Euan McLean Cam=",
        "Euan McLean Cam-",
        "Euan McLean Campq",
        "Euan McLean CampB",
        "Euan McLean Campb+",
        "Euan McLean Campb0",
        "Euan McLean Campb2",
        "Euan McLean Campbel",
        "Euan McLean Campbel*",
        "Euan McLean Campbell",
    ];

    // Array of the strings you want to display for h2 (Software Developer)
    const stringsH2 = [
        "5",
        "S0",
        "So'",
        "So/",
        "Sof8",
        "Soft>",
        "Softwx",
        "SoftwaH",
        "Softwa[",
        "Softwar3",
        "Software_",
        "Software q",
        "Software Dv",
        "Software Del",
        "Software Dev2",
        "Software Deve!",
        "Software DevelQ",
        "Software DevelO",
        "Software Develob",
        "Software Develor",
        "Software Develop€",
        "Software Develope=",
        "Software Develope-",
        "Software Develope%",
        "Software Developer"
    ];

    let currentStringIndexH1 = 0;
    let currentStringIndexH2 = 0;
    const typingDelay = 50; // Delay between each string change

    // Function to "decrypt" each string for h1
    function decryptTextH1() {
        if (currentStringIndexH1 < stringsH1.length) {
            // Show the "encrypted" text for h1
            h1.textContent = stringsH1[currentStringIndexH1];
            
            if (currentStringIndexH1 === stringsH1.length - 1) {
                // After the last string for h1, stop decrypting and show the final name
                setTimeout(() => {
                    h1.textContent = "Euan McLean Campbell";
                    // Start decrypting for h2 after h1 is finished
                    decryptTextH2();
                }, typingDelay);
            } else {
                currentStringIndexH1++;
                setTimeout(decryptTextH1, typingDelay);  // Wait before changing to next string
            }
        }
    }

    // Function to "decrypt" each string for h2
    function decryptTextH2() {
        if (currentStringIndexH2 < stringsH2.length) {
            // Show the "encrypted" text for h2
            h2.textContent = stringsH2[currentStringIndexH2];
            
            if (currentStringIndexH2 === stringsH2.length - 1) {
                // After the last string for h2, stop decrypting and show the final string
                setTimeout(() => {
                    h2.textContent = "Software Developer";
                }, typingDelay);
            } else {
                currentStringIndexH2++;
                setTimeout(decryptTextH2, typingDelay);  // Wait before changing to next string
            }
        }
    }

    // Start the decryption process for h1
    decryptTextH1();
});



function translateTitle(lang) {
  const h1 = document.querySelector("#page-head h1");
  const h2 = document.querySelector("#page-head h2");

  // Original and target strings for h1
  const originalEngH1 = "Euan McLean Campbell";
  const originalRusH1 = "Юан Маклин Кэмпбелл";
  const originalH1 = lang === "en" ? originalRusH1 : originalEngH1;
  const targetH1 = lang === "en" ? originalEngH1 : originalRusH1;

  // Original and target strings for h2
  const originalEngH2 = "Software Developer";
  const originalRusH2 = "Разработчик"; // Replace with appropriate target language
  const originalH2 = lang === "en" ? originalRusH2 : originalEngH2;
  const targetH2 = lang === "en" ? originalEngH2 : originalRusH2;

  let index = 0;

  function updateTitle(h, original, target, callback) {
    let maxSteps = original.length + target.length + 2;

    function animate() {
      let output;
      if (index <= original.length) {
        // Deleting phase
        output = original.slice(0, original.length - index) + "_";
      } else {
        // Retyping phase
        const retypeIndex = index - original.length - 1;
        output = target.slice(0, retypeIndex + 1) + (retypeIndex < target.length - 1 ? "_" : "");
      }

      h.textContent = output;
      index++;

      if (index < maxSteps) {
        setTimeout(animate, 50); // Delay of 0.05 seconds between updates
      } else if (callback) {
        // Call the callback (next animation) when this one finishes
        index = 0; // Reset index for the next animation
        callback();
      }
    }

    animate();
  }

  // First, change h1, then change h2
  updateTitle(h1, originalH1, targetH1, () => {
    updateTitle(h2, originalH2, targetH2, null); // No further callback after h2
  });
}



function changeLang() {
    const button = document.getElementById('lang-button');
    const img = button.querySelector('img');
    
    // Determine the new language
    let newLang;
    if (img.src.includes('gb.svg')) {
      img.src = 'ru.svg';
      img.alt = 'Russian Flag';
      newLang = 'ru';
    } else {
      img.src = 'gb.svg';
      img.alt = 'British Flag';
      newLang = 'en';
    }
    globalLang = newLang
    
    // Find all elements with the data-string attribute and update their content
    const elements = document.querySelectorAll('[data-string]');
    elements.forEach(element => {
      const key = element.getAttribute('data-string');
      if (strings[key]) {
        element.textContent = strings[key][newLang];
      }
    });

    const tabTitle = document.querySelector("#tab-title");
    tabTitle.textContent = strings[globalTabName][globalLang];

    translateTitle(newLang);
}

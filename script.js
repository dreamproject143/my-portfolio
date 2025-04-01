<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ram's Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">Ram's Portfolio</div>
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">🌓</button>
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero" id="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Turning Ideas Into Digital Reality</h1>
                <p>Full Stack Developer specializing in creating efficient web solutions</p>
                <div class="project-buttons">
                    <a href="#projects" class="btn btn-primary">View Projects</a>
                </div>
            </div>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" class="profile-img">
        </div>
    </section>

    <section class="projects" id="projects">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
            <!-- PDF to Excel Project -->
            <div class="project-card">
                <h3 class="project-title">PDF to Excel Converter</h3>
                <p>Advanced PDF conversion tool with AI-powered data extraction</p>
                <div class="project-buttons">
                    <a href="https://reduced-verna-learnandexplore-6dc4204b.koyeb.app/" class="btn btn-primary" target="_blank">Live Demo 1</a>
                    <a href="https://pdf-to-excel-made-by-ashish.onrender.com/" class="btn btn-primary" target="_blank">Live Demo 2</a>
                </div>
            </div>

            <!-- OEE Tracker Project -->
            <div class="project-card">
                <h3 class="project-title">OEE Tracker</h3>
                <p>Real-time equipment effectiveness monitoring system</p>
                <div class="project-buttons">
                    <a href="https://jhm-oee-tracker.onrender.com/" class="btn btn-primary" target="_blank">Production Version</a>
                    <a href="https://web-production-f8ea8.up.railway.app/" class="btn btn-primary" target="_blank">Development Version</a>
                </div>
            </div>
        </div>
    </section>

    <section class="skills" id="skills">
        <h2 class="section-title">My Skills</h2>
        <div class="skills-container">
            <div class="skill-category">
                <h3>Languages</h3>
                <div class="skill-item"><i class="fab fa-html5"></i> HTML</div>
                <div class="skill-item"><i class="fab fa-css3-alt"></i> CSS</div>
                <div class="skill-item"><i class="fab fa-js"></i> JavaScript</div>
            </div>
            <div class="skill-category">
                <h3>Frameworks</h3>
                <div class="skill -item"><i class="fab fa-react"></i> React</div>
                <div class="skill-item"><i class="fab fa-node-js"></i> Node.js</div>
                <div class="skill-item"><i class="fab fa-bootstrap"></i> Bootstrap</div>
            </div>
            <div class="skill-category">
                <h3>Tools</h3>
                <div class="skill-item"><i class="fas fa-database"></i> MongoDB</div>
                <div class="skill-item"><i class="fas fa-git"></i> Git</div>
                <div class="skill-item"><i class="fas fa-cloud"></i> AWS</div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <h2 class="section-title">Contact Me</h2>
        <form id="contactForm">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    </section>

    <footer>
        <div class="footer-content">
            <p class="copyright">© 2025 Ram. Made with ❤️ for the web.</p>
            <div class="social-links">
                <a href="https://github.com/yourprofile" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>

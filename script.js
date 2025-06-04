document.addEventListener('DOMContentLoaded', function() {
    // Controle do tema claro/escuro
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        }
    });

    // Alternância de idiomas
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    
const translations = {
    'pt': {
        'name': 'Matheus de Vasconcelos Lobo',
        'profession': 'Especialista em TI | DBA | Segurança da Informação | Professor e Desenvolvedor',
        'download': 'Baixar PDF',
        'about': 'Resumo Profissional',
        'about-text': 'Profissional com mais de 15 anos de experiência em Tecnologia da Informação, atuando com suporte técnico, redes, desenvolvimento de sistemas, análise de dados e docência. Possui domínio em infraestrutura de TI, bancos de dados, segurança da informação e ferramentas de automação. Fluente em inglês, com foco em clareza na comunicação, resolução de problemas e aprendizado contínuo. Forte perfil educacional, com atuação em cursos livres, técnicos e treinamentos corporativos.',
        'experience': 'Experiência Profissional',
        'job1-title': 'Professor de TI',
        'job1-company': 'ASSOCIAÇÃO NOSSA SENHORA DE FÁTIMA | fev. 2024 – atual',
        'job1-description': 'Treinamentos profissionalizantes em informática, redes e análise de dados; Estruturação de servidores e manutenção de infraestrutura; Implementação de manutenção preventiva.',
        'education': 'Formação Acadêmica',
        'course1-name': 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        'course1-institution': 'Universidade São Judas Tadeu (Unimonte) | 2015',
        'skills': 'Habilidades Técnicas',
        'skill1': 'C#, Python, SQL, HTML, CSS, PHP, Java, ASP, VB.NET',
        'skill2': 'Power BI, Excel, Power Automate, Active Directory, VPN, Zabbix',
        'contact': 'Contato',
        'form-name': 'Nome:',
        'form-email': 'Email:',
        'form-message': 'Mensagem:',
        'form-submit': 'Enviar Mensagem',
        'copyright': '© 2025 Matheus de Vasconcelos Lobo. Todos os direitos reservados.'
    },
    'en': {
        'name': 'Matheus de Vasconcelos Lobo',
        'profession': 'IT Specialist | DBA | Information Security | Teacher and Developer',
        'download': 'Download PDF',
        'about': 'Professional Summary',
        'about-text': 'Professional with over 15 years of experience in Information Technology, working with technical support, networking, systems development, data analysis, and teaching. Skilled in IT infrastructure, databases, information security, and automation tools. Fluent in English with a focus on communication clarity, problem-solving, and continuous learning. Strong educational background with experience in free, technical, and corporate training courses.',
        'experience': 'Professional Experience',
        'job1-title': 'IT Instructor',
        'job1-company': 'ASSOCIAÇÃO NOSSA SENHORA DE FÁTIMA | Feb. 2024 – Present',
        'job1-description': 'Professional training in computing, networking, and data analysis; Server structuring and infrastructure maintenance; Implementation of preventive maintenance.',
        'education': 'Education',
        'course1-name': 'Technologist in Systems Analysis and Development',
        'course1-institution': 'São Judas Tadeu University (Unimonte) | 2015',
        'skills': 'Technical Skills',
        'skill1': 'C#, Python, SQL, HTML, CSS, PHP, Java, ASP, VB.NET',
        'skill2': 'Power BI, Excel, Power Automate, Active Directory, VPN, Zabbix',
        'contact': 'Contact',
        'form-name': 'Name:',
        'form-email': 'Email:',
        'form-message': 'Message:',
        'form-submit': 'Send Message',
        'copyright': '© 2025 Matheus de Vasconcelos Lobo. All rights reserved.'
    }
};

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Atualiza botão ativo
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Atualiza o conteúdo
            elementsToTranslate.forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = translations[lang][key];
            });
        });
    });

    // Gerar PDF
    const downloadBtn = document.getElementById('download-pdf');
    
    downloadBtn.addEventListener('click', function() {
        const element = document.body;
        const opt = {
            margin: 10,
            filename: 'curriculo.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Temporariamente esconde os controles
        const headerControls = document.querySelector('.header-controls');
        const originalDisplay = headerControls.style.display;
        headerControls.style.display = 'none';
        
        // Gera o PDF
        html2pdf().from(element).set(opt).save().then(() => {
            headerControls.style.display = originalDisplay;
        });
    });

    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio (substitua por código real)
        formStatus.textContent = 'Mensagem enviada com sucesso!';
        formStatus.style.display = 'block';
        formStatus.style.backgroundColor = '#4CAF50';
        formStatus.style.color = 'white';
        
        // Limpa o formulário
        contactForm.reset();
        
        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 3000);
    });

    // Animação ao rolar a página
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializa as seções como invisíveis
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica ao carregar a página
});
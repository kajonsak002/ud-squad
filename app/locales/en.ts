export const en = {
    nav: {
        features: "Features",
        pricing: "Pricing",
        docs: "Docs",
        contact: "Contact",
        getStarted: "Get Started"
    },
    hero: {
        badge: "🚀 AI Code Analysis Platform",
        title1: "Refactor Your Code",
        title2: "Smarter with AI",
        desc: "Analyze, detect issues, and improve your codebase automatically. Get insights like DeepSource — but smarter, faster, and tailored for devs.",
        startBtn: "Get Started",
        demoBtn: "Live Demo",
        registerBtn: "Register",
        stat1: "Future-Ready Strategies",
        stat2: "24/7 Customer Support"
    },
    features: {
        f1: {
            title: "AI Code Review",
            desc: "Analyze your codebase automatically and detect bugs, anti-patterns, and hidden issues with superhuman accuracy.",
            tag: "Automated Analysis"
        },
        f2: {
            title: "Smart Refactor Suggestions",
            desc: "Refactor code safely with AI suggestions and understand changes visually before applying them to production.",
            tag: "Intelligent Editing"
        },
        f3: {
            title: "Impact Analysis",
            desc: "Know exactly which parts of your system are affected when modifying your code through dynamic visual graphs.",
            tag: "System Mapping"
        }
    },
    pricing: {
        title: "Pricing Plans",
        desc: "Choose the plan that fits your workflow",
        getStarted: "Get Started",
        starter: {
            name: "Starter",
            desc: "For individuals getting started",
            features: ["Basic AI code review", "Limited analysis", "Community support"]
        },
        pro: {
            name: "Pro",
            desc: "For developers & small teams",
            features: ["Advanced AI review", "Refactor suggestions", "Impact analysis", "Priority support"]
        },
        enterprise: {
            name: "Enterprise",
            price: "Custom",
            desc: "For large teams & organizations",
            features: ["Full AI analysis suite", "Team collaboration", "Custom integrations", "Dedicated support"]
        }
    },
    footer: {
        brandDesc: "Build better software with AI-powered code analysis and refactoring tools.",
        product: "Product",
        company: "Company",
        support: "Support",
        rights: "All rights reserved.",
        links: {
            features: "Features", pricing: "Pricing", docs: "Docs",
            about: "About", blog: "Blog", careers: "Careers",
            contact: "Contact", help: "Help Center", privacy: "Privacy Policy"
        }
    },
    docs: {
        title: "Documentation",
        desc: "Everything you need to integrate UD-Squad into your workflow.",
        getStarted: "Quick Start",
        introduction: "Introduction",
        install: "Installation",
        auth: "Authentication",
        usage: "Usage",
        commands: "CLI Commands",
        cicd: "CI/CD Integration",
        api: "API Reference",
        installCode: "npm install -g @udsquad/cli",
        installDesc: "Install the CLI to start analyzing your codebase in seconds.",
        authDesc: "To use UD-Squad in your CI/CD pipeline, you need an API key. You can generate one from your user dashboard under the Settings -> API Keys section.",
        usageTitle: "How to run a scan",
        usageDesc: "Once installed, navigate to your project's root directory and run the following command to start the analysis:",
        usageCode: "ud-squad scan",
        cicdTitle: "Continuous Integration",
        cicdDesc: "Integrate UD-Squad into your GitHub Actions or GitLab CI to catch bugs before they are merged.",
        cicdCode: "- name: Run UD-Squad Scan\n  run: ud-squad scan --api-key=${{ secrets.UD_SQUAD_API_KEY }}"
    },
    contact: {
        title: "Get in Touch",
        desc: "Have questions about our AI platform? Let's talk.",
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        success: "Message Sent Successfully!",
        contactInfo: "Contact Information",
        address: "123 Innovation Drive, Tech City, TC 10100",
        emailStr: "support@udsquad.ai",
        phone: "+1 (555) 123-4567"
    },
    dashboard: {
        menu: {
            main: "MAIN",
            modernization: "MODERNIZATION",
            moreTools: "MORE TOOLS",
            dashboard: "Dashboard",
            codeInterpreter: "Code Interpreter",
            securityGuard: "Security Guard",
            refactoringPlanner: "Refactoring Planner",
            microservicesSplitter: "Microservices Splitter",
            onboardingTimeMachine: "Onboarding Time Machine",
            databaseBridge: "Database Bridge",
            apiAdapter: "API Adapter",
            assessmentReport: "Assessment Report",
            dependencyVisualizer: "Dependency Visualizer"
        },
        overview: {
            welcome: "Welcome back",
            stats: {
                totalAnalyses: "Total Analyses",
                criticalIssues: "Critical Issues",
                uptime: "System Uptime",
                efficiency: "Code Efficiency"
            }
        }
    },
    auth: {
        login: {
            title: "Welcome Back",
            subtitle: "Enter your credentials to access your dashboard",
            email: "Email Address",
            password: "Password",
            forgotPassword: "Forgot Password?",
            signIn: "Sign In",
            signingIn: "Signing In...",
            noAccount: "Don't have an account?",
            register: "Register here"
        },
        register: {
            title: "Create Account",
            subtitle: "Join the next generation of code intelligence",
            name: "Full Name",
            email: "Email Address",
            password: "Password",
            confirmPassword: "Confirm Password",
            signUp: "Create Account",
            signingUp: "Creating Account...",
            hasAccount: "Already have an account?",
            login: "Log in here"
        }
    }
}
export type Dictionary = typeof en;

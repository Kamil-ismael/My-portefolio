import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const navItmes = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
            ?'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' 
            :'bg-transparent'
            }`}>
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div
                            className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={() => scrollToSection('hero')}
                        >
                            Portfolio
                        </div>

                        {/* Navigation desktop */}
                        <div className="hidden md:flex item-center space-x-8">
                            {navItmes.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => scrollToSection(item.id)}
                                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}

                            {/* Theme toggle button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-color duration-200"
                                aria-label= "Toggle theme"
                            >
                                {isDark ? <Sun size={20}/> : <Moon size={20}/>}
                            </button>
                        </div>
                    </div>
                </nav>
                
            </header>
    )
}

export default Header;
import React, { useState } from "react";
import i18n from "../../../i18n";

type Language = {
  code: string;
  label: string;
};

const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "mk", label: "Македонски" },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);
    i18n.changeLanguage(lang.code);
  };

  return (
    <div className="language-card" onClick={toggleDropdown}>
      <div className="selected-lang">
        <span>{selectedLang.label}</span>
        <span className={`arrow ${isOpen ? "up" : "down"}`} />
      </div>

      {isOpen && (
        <ul className="dropdown">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(lang);
              }}
              className={selectedLang.code === lang.code ? "active" : ""}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;

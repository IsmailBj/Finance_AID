import { FC, useState } from "react";
import { getTimeZone } from "../../../helpers/DateAndTimeHelpers";

const LanguageRegion: FC = () => {
  const [language, setLanguage] = useState("en");
  const [autoTimezone, setAutoTimezone] = useState(false);
  const [timezone, setTimezone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If no timezone selected or autoTimezone is true, use system timezone
    const finalTimezone =
      autoTimezone || timezone === "" ? getTimeZone() : timezone;

    const payload = {
      language,
      timezone: finalTimezone,
    };

    console.log("Form data ready for API:", payload);

    // Example API call:
    // fetch('/api/user/settings', { ... })
  };

  return (
    <form className="langRegion-container" onSubmit={handleSubmit}>
      {/* Language selection */}
      <div className="language">
        <div className="input-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="it">Italian</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese (Simplified)</option>
            <option value="ja">Japanese</option>
            <option value="ar">Arabic</option>
            <option value="pt">Portuguese</option>
          </select>
          <span className="form-helper">
            Choose the language you'd like to use
          </span>
        </div>
      </div>

      {/* Timezone selection */}
      <div className="Timezone">
        <div className="input-group">
          <label>TimeZone And Region</label>
          <label htmlFor="autoTimezone" className="auto-timezone">
            <input
              type="checkbox"
              id="autoTimezone"
              checked={autoTimezone}
              onChange={(e) => setAutoTimezone(e.target.checked)}
            />
            Set timezone automatically
          </label>
          <select
            name="timezone"
            id="timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className={autoTimezone ? "disable" : ""}
            disabled={autoTimezone}
          >
            <option value="">-- Select a timezone --</option>{" "}
            {/* empty initial */}
            <option value="UTC">UTC</option>
            <option value="Europe/London">London (GMT+0)</option>
            <option value="Europe/Berlin">Berlin (GMT+1)</option>
            <option value="Europe/Paris">Paris (GMT+1)</option>
            <option value="America/New_York">New York (GMT-5)</option>
            <option value="America/Los_Angeles">Los Angeles (GMT-8)</option>
            <option value="Asia/Tokyo">Tokyo (GMT+9)</option>
            <option value="Asia/Shanghai">Shanghai (GMT+8)</option>
            <option value="Asia/Dubai">Dubai (GMT+4)</option>
            <option value="Australia/Sydney">Sydney (GMT+10)</option>
          </select>
          <span className="form-helper">Select a Time zone you prefer</span>
        </div>
      </div>

      {/* Submit button */}
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default LanguageRegion;

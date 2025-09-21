import { FC, useState } from "react";
import { getTimeZone } from "../../../helpers/DateAndTimeHelpers";
import LanguageSelector from "../../common/bars/LanguageSelector";

const LanguageRegion: FC = () => {
  const [autoTimezone, setAutoTimezone] = useState(false);
  const [timezone, setTimezone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If no timezone selected or autoTimezone is true, use system timezone
    const finalTimezone =
      autoTimezone || timezone === "" ? getTimeZone() : timezone;
    // update seperately
    const payload = {
      language: "en", // default for now
      timezone: finalTimezone,
    };

    try {
      const res = await fetch(
        "http://localhost:3000/api/auth/settings/timezonelang",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (res.ok) {
        updateUserSettings(data.user.language, data.user.timezone);
        alert("Timezone/Language updated successfully.");
      } else {
        alert(data.error || "Failed update timezone/language details");
      }
    } catch (error) {
      console.error("Error submitting Timezone/Language", error);
    }
  };

  const updateUserSettings = (language: string, timezone: string): void => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) return;

    try {
      const user = JSON.parse(storedUser);
      const updatedUser = {
        ...user,
        language,
        timezone,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Failed to update user settings:", error);
    }
  };

  return (
    <form className="langRegion-container" onSubmit={handleSubmit}>
      {/* Language selection */}
      <div className="language">
        <div className="input-group">
          <label htmlFor="language">Language</label>
          <LanguageSelector />
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

{
  /* <div className="language">
        <div className="input-group">
          <label htmlFor="language">Language</label>

          <span className="form-helper">
            Choose the language you'd like to use
          </span>
        </div>
      </div> */
}

export default LanguageRegion;

import { useState } from "react";
import './Translator.css';
import { AiOutlineClose } from 'react-icons/ai';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [outputLang, setOutputLang] = useState('hi');
  const [outputText, setOutputText] = useState('');
  const [isTranslated, setIsTranslated] = useState(null);

  const translate = async () => {
    const apiUrl = `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to=${outputLang}`;
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '280bfe97c4msh84b84ada3f78524p1e7593jsn6cd59edb075b',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      body: JSON.stringify([{ Text: inputText }])
    };

    try {
      const response = await fetch(apiUrl, options);
      const result = await response.json();
      if (response.ok && result[0] && result[0].translations) {
        setOutputText(result[0].translations[0].text);
        setIsTranslated(true);
      } else {
        throw new Error('Translation failed');
      }
    } catch (error) {
      console.error(error);
      setIsTranslated(false);
      setOutputText('');
    }
  };

  const clearInput = () => {
    setInputText('');
    setOutputText('');
    setIsTranslated(null);
  };

  return (
    <section className="translator">
      <div className="row-wrapper">
        <div className="translator-container input-lang">
          <div className="top-row">
            <button
              className="btn btn-primary btn-translate"
              onClick={translate}
            >
              Translate
            </button>
          </div>
          <form className="input-form">
            <textarea
              className="text-box"
              placeholder="Enter text (any language)"
              onChange={e => setInputText(e.target.value)}
              value={inputText}
            ></textarea>

            
            {
              inputText !== "" &&
              <AiOutlineClose
                className="icon-btn close-btn"
                onClick={clearInput}
              />
            }
          </form>
        </div>
        <div className="translator-container output-lang">
          <div className="top-row">
            <select
              name="languages"
              id="languages"
              className="form-select form-select-sm"
              onChange={e => setOutputLang(e.target.value)}
              value={outputLang}
            >
              <option value="hi">Hindi</option>
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <p className="text-box output-box">
            {
              isTranslated === false ?
                <span className="output-placeholder translation-error">Translation failed</span>
                :
                outputText === "" ?
                  <span className="output-placeholder">Select a language</span>
                  :
                  outputText
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Translator;

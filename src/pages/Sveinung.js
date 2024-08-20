// SveinungGameRules.js
import React from 'react';
import Rule from '../components/Rule.js'; // Import the Rule component
import gameImage from '../data/sveinung.png';
import '../App.css';

const SveinungGameRules = () => {
  // Define the game rules
  const rules = [
    "Del ut et kort til hver spiller (med sveinung-siden ned).",
    "Hver spiller ser på sitt kort og legger tilbake kortet på plassen sin slik at ingen kan se tallverdien.",
    "Start med en tilfeldig spiller. Denne kan velge å beholde kortet sitt (\"pass\") eller bytte det med en annen spiller uten å se kortene (\"swappy\"). \"Swappy\" eller pass skjer på rundgang med klokken.",
    "Når alle har passet eller tatt en \"swappy\", viser alle kortene sine. Den med lavest verdi drikker slurker lik kortets tall (bildekort og ess = 10 slurker). Hvis to eller flere spillere har lik lavest verdi, drikkes dobbelt så mange slurker som normalt.",
    "Runden er over. Gå tilbake til punkt 1. og begynn neste runden med neste spiller i rekken."
  ];

  const getBackgroundColor = (index) => {
    return index % 2 === 0 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.06)';
  };

  return (
    <div>
      <h1>Sveinung's drikkelek</h1>
      <div style={{ marginTop: '20px' }}>
        <img src={gameImage} alt="Game illustration" className="gameImage" style={{ borderRadius: '90%', height: 'auto' }} />
      </div>
      <h2>Anbefalt spillere: 4-9 personer</h2>
      {/* Apply the 'question-container' class to the div that wraps the rules */}
      <div className="question-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          {rules.map((rule, index) => (
            <Rule key={index} number={index + 1} text={rule} backgroundColor={getBackgroundColor(index)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SveinungGameRules;
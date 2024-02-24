// SveinungGameRules.js
import React from 'react';
import Rule from '../components/Rule.js'; // Import the Rule component
import gameImage from '../data/sveinung.png';
import '../App.css';

const SveinungGameRules = () => {
  // Define the game rules
  const rules = [
    "Del ut et kort til hver person.",
    "Hver person ser på sitt kort.",
    "Start med en tilfeldig spiller. Denne kan velge å beholde kortet ('pass') eller bytte det med en annen spiller uten å se kortene. Bytte eller pass skjer før turen går videre med klokken.",
    "Når alle har passet eller byttet, viser alle kortene. Den med lavest verdi drikker slurker lik kortets tall (bildekort = 10 slurker, ess = 1 slurk). Ved lik lavest verdi mellom to eller flere spillere, drikkes dobbelt så mange slurker."
  ];

  return (
    <div>
      <h1>Sveinung's drikkelek</h1>
      <div style={{ marginTop: '20px' }}>
        <img src={gameImage} alt="Game illustration" className="gameImage" style={{ borderRadius: '90%', height: 'auto' }} />
      </div>
      <h2>Anbefalt spillere: 4-9 personer</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '60%' }}>
          {rules.map((rule, index) => (
            <Rule key={index} number={index + 1} text={rule} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SveinungGameRules;
import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

const Roulette = () => {
    const data = [
        { option: '0', style: { backgroundColor: 'green' } },
        { option: '32', style: { backgroundColor: 'red' } },
        { option: '15', style: { backgroundColor: 'black' } },
        { option: '19', style: { backgroundColor: 'red' } },
        { option: '4', style: { backgroundColor: 'black' } },
        { option: '21', style: { backgroundColor: 'red' } },
        { option: '2', style: { backgroundColor: 'black' } },
        { option: '25', style: { backgroundColor: 'red' } },
        { option: '17', style: { backgroundColor: 'black' } },
        { option: '34', style: { backgroundColor: 'red' } },
        { option: '6', style: { backgroundColor: 'black' } },
        { option: '27', style: { backgroundColor: 'red' } },
        { option: '13', style: { backgroundColor: 'black' } },
        { option: '36', style: { backgroundColor: 'red' } },
        { option: '11', style: { backgroundColor: 'black' } },
        { option: '30', style: { backgroundColor: 'red' } },
        { option: '8', style: { backgroundColor: 'black' } },
        { option: '23', style: { backgroundColor: 'red' } },
        { option: '10', style: { backgroundColor: 'black' } },
        { option: '5', style: { backgroundColor: 'red' } },
        { option: '24', style: { backgroundColor: 'black' } },
        { option: '16', style: { backgroundColor: 'red' } },
        { option: '33', style: { backgroundColor: 'black' } },
        { option: '1', style: { backgroundColor: 'red' } },
        { option: '20', style: { backgroundColor: 'black' } },
        { option: '14', style: { backgroundColor: 'red' } },
        { option: '31', style: { backgroundColor: 'black' } },
        { option: '9', style: { backgroundColor: 'red' } },
        { option: '22', style: { backgroundColor: 'black' } },
        { option: '18', style: { backgroundColor: 'red' } },
        { option: '29', style: { backgroundColor: 'black' } },
        { option: '7', style: { backgroundColor: 'red' } },
        { option: '28', style: { backgroundColor: 'black' } },
        { option: '12', style: { backgroundColor: 'red' } },
        { option: '35', style: { backgroundColor: 'black' } },
        { option: '3', style: { backgroundColor: 'red' } },
        { option: '26', style: { backgroundColor: 'black' } },
        
    ]

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [rouletteData, setRouletteData] = useState(data);
    const [showPrize, setShowPrize] = useState(false);

    const handleSpin = () => {
        const randomPrize = Math.floor(Math.random() * data.length);
        setPrizeNumber(randomPrize);
        setMustSpin(true);
        setShowPrize(false);
        setTimeout(() => {
            setMustSpin(false);
            setShowPrize(true);
        }, 5000); // Change the duration as per your requirement
    };

    const prizeDisplayStyle = {
        height: '50px', // Set this to the height of your prize display
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        visibility: showPrize ? 'visible' : 'hidden', // Hide the content but reserve the space
        fontSize: '40px',
    };

    // Add media query for phones
    

    return (
        <div className="App-body">
            <h1>Roulette</h1>
            <button onClick={handleSpin} style={{ fontSize: '20px', padding: '10px 20px' }}>Spin</button>

                <div className="wheel-container">
                    <Wheel
                        mustStartSpinning={mustSpin}
                        spinDuration={[0.4]}
                        prizeNumber={prizeNumber}
                        data={rouletteData}
                        outerBorderColor={["black"]}
                        outerBorderWidth={[9]}
                        innerBorderColor={["Baige"]}
                        radiusLineColor={["pink"]}
                        radiusLineWidth={[1]}
                        textColors={["white"]}
                        textDistance={70}
                        fontSize={[10]}
                        innerRadius={40}
                        renderChild={(option, index, changeSegment) => (
                            <div style={{ textAlign: 'center', fontSize: '16px', color: 'white', backgroundColor: option.style.backgroundColor }}>
                                <div>{option.option}</div>
                                <div style={{ marginTop: '10px' }}>{index}</div>
                            </div>
                        )}
                        onStopSpinning={() => {
                            console.log("finish spinning");
                        }}
                    />
                    {showPrize && (
                    <div className="prize-display" style={prizeDisplayStyle}>
                    <p>{rouletteData[prizeNumber].option}</p>
                    </div>
                    )}
                </div>
        </div>
    );
};

export default Roulette;
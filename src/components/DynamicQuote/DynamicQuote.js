import './DynamicQuote.scss';
import { useState, useEffect } from 'react';
import _ from 'lodash';

const DynamicQuote = () => {
    // TODO: this is better to keep in consts.js or outside of the component
    // (because it does not depend on any props).
    // Otherwise it will be recreated on each component change
    const quotes = [
        'Welcome To The Club, Pal',
        'Wubba Lubba Dub Dub!',
        'Sometimes Science Is More Art Than Science',
        'The universe is basically an animal. It grazes on the ordinary. It creates infinite idiots just to eat them',
        "Now if you'll excuse me, I've got a quick solo adventure to go on and this one will not be directed by Ron Howard",
        'Pickle Ri-i-i-ick!',
        'What up, my glip-glops?',
        "It's time to get schwifty",
        "I'm Mr. Meeseeks! Look at me!",
    ];

    const [quote, setQuote] = useState(_.sample(quotes));

    const chooseRandomQuote = () => {
        setQuote(_.sample(quotes));
    };

    useEffect(() => {
        setInterval(chooseRandomQuote, 30000);
        return () => clearInterval(chooseRandomQuote);
    }, []);

    return <div className="DynamicQuote">{quote}</div>;
};

export default DynamicQuote;

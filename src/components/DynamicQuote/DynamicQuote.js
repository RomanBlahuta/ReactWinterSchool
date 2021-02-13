import './DynamicQuote.scss';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import { QUOTES } from '../../util/consts';

const DynamicQuote = () => {
    const [quote, setQuote] = useState(_.sample(QUOTES));

    const chooseRandomQuote = () => {
        setQuote(_.sample(QUOTES));
    };

    useEffect(() => {
        setInterval(chooseRandomQuote, 30000);
        return () => clearInterval(chooseRandomQuote);
    }, []);

    return <div className="DynamicQuote">{quote}</div>;
};

export default DynamicQuote;

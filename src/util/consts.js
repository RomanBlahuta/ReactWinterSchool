import Alive from '../assets/alive.svg';
import Dead from '../assets/dead.svg';
import Unknown from '../assets/unknown.svg';
import Male from '../assets/male.svg';
import Female from '../assets/female.svg';
import Genderless from '../assets/genderless.svg';

export const SERVER_URL = 'https://rickandmortyapi.com/api';
export const MAX_CARD_NAME_LEN = 28;
export const PAGE_DISPLAY_NUMBER = 5;
export const QUOTES = [
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
export const TAG_ICONS = {
    Alive: Alive,
    Dead: Dead,
    unknown: Unknown,
    Male: Male,
    Female: Female,
    Genderless: Genderless,
};
export const LOADER = 'Loading...';
export const DEFAULT_STATUS = 'All statuses';
export const DEFAULT_GENDER = 'All genders';

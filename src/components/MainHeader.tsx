import React from 'react';
import got_logo from '../img/got_logo.png';
import '../App.css';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Quote = {
    quote: string;
    orator: string;
};

const quotes: Quote[] = [
    { quote: 'Winter is Coming', orator: 'Ned Stark'},
    { quote: 'You Know Nothing Jon Snow', orator: 'Ygritte'},
    { quote: 'Can a man be brave if he\'s afraid?', orator: 'Bran Stark'},
    { quote: 'Fear cuts deeper than swords', orator: 'Arya Stark'},
    { quote: 'Some wounds never truly heal, and bleed again at the slightest word', orator: 'Ned Stark'},
    { quote: 'A lion doesn\'t concern himself with the opinions of a sheep', orator: 'Tywin Lannister'},
    { quote: 'If you think this has a happy ending you haven’t been paying attention', orator: 'Ramsay Bolton'},
    { quote: 'A man with no motive is a man no one suspects. Always keep your foes confused', orator: 'Lord Baelish'},
    { quote: 'The man who passes the sentence should swing the sword', orator: 'Ned Stark'},
    { quote: 'Any man who must say ‘I am the king’ is no true king', orator: 'Tywin Lannister'},
    { quote: 'When you play the game of thrones, you win or you die', orator: 'Cersei Lannister'},
    { quote: 'A Lannister always pays his debts', orator: 'The Lannister motto'},
    { quote: 'All men must die, but we are not men', orator: 'Daenerys Targaryen'},
    { quote: 'Chaos isn\'t a pit. Chaos is a ladder.', orator: 'Lord Baelish'},
    { quote: 'It is beautiful beneath the sea, but if you stay too long, you’ll drown', orator: 'Three Eyed Raven'},
    { quote: 'The things I do for love', orator: 'Jaime Lannister'},
    { quote: 'Never forget what you are. The rest of the world will not', orator: 'Tyrion Lannister'},
    { quote: 'There is only one thing we say to death: Not today', orator: 'Syrio Forel'},
    { quote: 'That\'s what I do: I drink and I know things', orator: 'Tyrion Lannister'},
    { quote: 'The night is dark and full of terrors', orator: 'Melisandre'},
    { quote: 'It doesn\'t matter what we want. Once we get it, then we want something else', orator: 'Lord Baelish'}
];

function getRandomQuote(): Quote {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

const MainHeader = () => {
    const navigate = useNavigate();
    function goHome() {
        navigate('/');
    }

    const [quote, setQuote] = React.useState({
        quote: getRandomQuote()
    });

    const displayQuote = () => {
        //pick and display a random quote every 10 seconds
        setTimeout(() => {
            setQuote({ ...quote, ['quote']: getRandomQuote() } )
        }, 10000)
    }

    displayQuote();

    return (
        <div>
            <img src={got_logo} className={"logo hoverClass"} alt="logo" onClick={goHome}/>
            <Typography variant="h4" component="h3">
                <b><i>"{ quote.quote.quote }"</i></b> - { quote.quote.orator }
            </Typography>
        </div>
    );
}

export default MainHeader;
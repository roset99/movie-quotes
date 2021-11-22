import {useState, useEffect} from "react";
import QuoteViewer from '../components/QuoteViewer';
// import NewQuoteButton from '../components/NewQuoteButton';
import VillagerContainer from "./VillagerContainer";

const QuoteContainer = () => {
    
    const [quote, setQuote] = useState(null);

    const updateQuoteData = () => {
        console.log("update quote info");
        fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
            .then(response => response.json())
            .then(data => setQuote(data))
    };

    useEffect(() => {
        updateQuoteData();
    }, []);

    return (
        quote ?

        <div>
            <QuoteViewer quote={quote}/>
            <VillagerContainer onQuoteButtonClicked={updateQuoteData}/>
        </div>

        :

        <p>loading quote...</p>
    )

}

export default QuoteContainer;
import './QuoteViewer.css'
const QuoteViewer = ({quote}) => {

    return(
        <div>
            <h1>{quote.quote}</h1>
            <h2>{quote.role}</h2>
        </div>
        
    )
}

export default QuoteViewer;
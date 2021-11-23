import './NewQuoteButton.css'

const NewQuoteButton =({onQuoteButtonClicked, updateVillager}) => {

    const handleClick = () => {
        console.log("quote button clicked!");
        onQuoteButtonClicked();
        updateVillager();
    }

    return (
        <button onClick={handleClick}>New Quote!</button>
    )
}

export default NewQuoteButton;
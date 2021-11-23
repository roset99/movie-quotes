import {useState, useEffect} from 'react';
import NewQuoteButton from '../components/NewQuoteButton';
import VillagerViewer from '../components/VillagerViewer';

const VillagerContainer = ({onQuoteButtonClicked}) => {

    const [villager, setVillager] = useState(null);
    
    const randomNum = () => {
        return Math.floor((Math.random()*397)+1)
    }

    const updateVillagerData = () => {
        console.log("update animal crossing villager info");
        const num = randomNum();
        fetch(`http://acnhapi.com/v1/villagers/4`)
            .then(response => response.json())
            .then(data => setVillager(data))
    };

    useEffect(() => {
        fetch(`http://acnhapi.com/v1/villagers/4`)
            .then(response => response.json())
            .then(data => setVillager(data))
    }, []);

    return (
        villager ?

        <div>
            <VillagerViewer villarger={villager}/>
            <NewQuoteButton onQuoteButtonClicked={onQuoteButtonClicked} updateVillager = {updateVillagerData}/>
        </div>

        :

        <p>loading villager...</p>
    )

}

export default VillagerContainer;
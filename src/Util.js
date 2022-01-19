import { v4 as uuidv4 } from 'uuid';

function chillhop(){
    return[
        {
            name : "Soulsounds",
            artish : "Parkbench Epiphany",
            cover : "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-300x300.jpg",
            id : uuidv4(),
            active : true,
            color :["#Bfa949","#E2d59c"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=27500"
        },
        {
            name : "Everlight",
            artish : "Parkbench Epiphany",
            cover : "https://chillhop.com/wp-content/uploads/2021/09/1db4d2274604636097241aca0f7077594e95edc7-300x300.jpg",
            id : uuidv4(),
            active : false,
            color :["#7be4bd","#4ac396"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=24694"
        },
        {
            name : "Soul",
            artish : "Epiphany",
            cover : "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-300x300.jpg",
            id : uuidv4(),
            active : false,
            color :["#Bfa949","#E2d59c"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=27500"
        }
    ];
}

export default chillhop;
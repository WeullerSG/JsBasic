const words = ["spray", "elite", "exuberant", "destruction", "present"];

const letters = (array, maiorOumenor, amount) => {
    if(maiorOumenor === "maior"){
    const result = array.filter((word) => word.length > amount);
    console.log(result);
    } else if(maiorOumenor === "menor"){
        const result = array.filter((word) => word.length < amount);
        console.log(result);
    }
}

letters(words, "menor", 6); // returns [ 'spray', 'elite' ]
letters(words, "maior", 6); // returns [ 'exuberant', 'destruction', 'present' ]
const words = ["spray", "elite", "exuberant", "destruction", "present"];

letters = (array, maiorOumenor, amount) => {
    if(maiorOumenor === "maior"){
    const result = array.filter((word) => word.length > amount);
    console.log(result);
    } else if(maiorOumenor === "menor"){
        const result = array.filter((word) => word.length < amount);
        console.log(result);
    }
}

letters(words, "menor", 6);
letters(words, "maior", 6);
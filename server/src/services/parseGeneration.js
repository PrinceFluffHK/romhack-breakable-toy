const parseGeneration = (genString) => {
    let genNumber = 0;
    switch (genString) {
        case "generation-i":
            genNumber = 1;
            break;
        case "generation-ii":
            genNumber = 2;
            break;
        case "generation-iii":
            genNumber = 3;
            break;
        case "generation-iv":
            genNumber = 4;
            break;
        case "generation-v":
            genNumber = 5;
            break;
        case "generation-vi":
            genNumber = 6;
            break;
        case "generation-vii":
            genNumber = 7;
            break;
        case "generation-viii":
            genNumber = 8;
            break;
        case "generation-ix":
            genNumber = 9;
            break;
    }
    return genNumber;
};

export default parseGeneration;

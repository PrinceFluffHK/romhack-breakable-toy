const getTypeColor = (type) => {
    switch (type) {
        case "Normal":
            return "#9ea19f"
        case "Fighting":
            return "#ff8001"
        case "Flying":
            return "#81b8ef"
        case "Poison":
            return "#9040cc"
        case "Ground":
            return "#905120"
        case "Rock":
            return "#afa980"
        case "Bug":
            return "#91a119"
        case "Ghost":
            return "#70416f"
        case "Steel":
            return "#60a0b7"
        case "Fire":
            return "#e52829"
        case "Water":
            return "#2880ee"
        case "Grass":
            return "#41a128"
        case "Electric":
            return "#fabf00"
        case "Psychic":
            return "#f04179"
        case "Ice":
            return "#3ed8ff"
        case "Dragon":
            return "#4f61e1"
        case "Dark":
            return "#50413e"
        case "Fairy":
            return "#f16ff1"
    }
}

export default getTypeColor
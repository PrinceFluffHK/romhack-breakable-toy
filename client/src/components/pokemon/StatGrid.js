import React from "react"

const StatGrid = ({ selectedMon }) => {


    const baseData = [
        {
            name: "Stat:",
            base: "Base:",
            ev: "EVs:",
        },
        {
            name: "HP",
            base: selectedMon.baseHp,
            ev: selectedMon.evHp,
        },
        {
            name: "Atk",
            base: selectedMon.baseAtk,
            ev: selectedMon.evAtk
        },
        {
            name: "Def",
            base: selectedMon.baseDef,
            ev: selectedMon.evDef
        },
        {
            name: "SpA",
            base: selectedMon.baseSpA,
            ev: selectedMon.evSpA
        },
        {
            name: "SpD",
            base: selectedMon.baseSpD,
            ev: selectedMon.evSpD
        },
        {
            name: "Spe",
            base: selectedMon.baseSpe,
            ev: selectedMon.evSpe
        },
    ];

    const statGrid = baseData.map(stat => {
        return(
            <div key={stat.name} className="cell auto" style={{margin: ".5rem"}}>
                <div className="grid-y" style={{height: "5rem"}}>
                    <h5 className="cell auto flex-center" style={{fontWeight: "bold"}}>
                        {stat.name}
                    </h5>
                    <h5 className="cell auto flex-center">
                        {stat.base}
                    </h5>
                    <h5 className="cell auto flex-center">
                        {stat.ev}
                    </h5>
                </div>
            </div>
        )
    })

    return(
        <div className="grid-x grid-margin-x" style={{margin: "1rem, 0rem"}}>
            {statGrid}
        </div>
    )
}

export default StatGrid
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


{/* <div id="stats" className="grid-y">
<div className="cell">
    <div className="cell auto grid-x">
        <div className="cell small-2 flex-center">Stat</div>
        <div className="cell auto flex-center">HP</div>
        <div className="cell auto flex-center">Atk</div>
        <div className="cell auto flex-center">Def</div>
        <div className="cell auto flex-center">SpA</div>
        <div className="cell auto flex-center">SpD</div>
        <div className="cell auto flex-center">Spe</div>
    </div>
    <div className="cell auto grid-x">
        <div className="cell small-2 flex-center">EVs</div>
        <div className="cell auto flex-center">{evHp}</div>
        <div className="cell auto flex-center">{evAtk}</div>
        <div className="cell auto flex-center">{evDef}</div>
        <div className="cell auto flex-center">{evSpA}</div>
        <div className="cell auto flex-center">{evSpD}</div>
        <div className="cell auto flex-center">{evSpe}</div>
    </div>
    <div className="cell auto grid-x">
        <div className="cell small-2 text-bold flex-center">Base</div>
        <div className="cell auto">
            <BarChart width={190} height={150} data={baseData}>
                <Bar
                    type="monotone"
                    dataKey="stat"
                    fill={primaryColor}
                    stroke={"#FFFFFF"}
                    margin={{
                        top: 5,
                        right: 30,
                    }}
                    label={renderLabel}
                />
                <XAxis dataKey="stat" color={primaryColor} />
            </BarChart>
        </div>
    </div>
</div>
</div> */}
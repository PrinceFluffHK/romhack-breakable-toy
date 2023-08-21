import React from "react";
import AbilityDisplayShow from "./AbilityDisplayShow";
import EvolutionDisplay from "./EvolutionDisplay";
import TypeDisplay from "./TypeDisplay";
// import CanvasJSReact from "@canvasjs/react-charts";

const PokemonShow = ({ selectedMon }) => {

    // const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const chartProps = {
        title: {
            text: "TestTest",
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Atk", y: 50 },
                    { label: "def", y: 50 },
                ],
            },
        ],
    };

    return (
        <div id="whole-thing" className="">
            <div id="top-row" className="poke-grid-abilities-list ">
                <div className="flex-right">
                    <TypeDisplay
                        typeList={selectedMon.types}
                        labelClass={"image-show-label"}
                        containerClass={"flex-show-top"}
                    />
                </div>
                <div className="flex-center">
                    <img src={selectedMon.profileUrl} className="sprite-show" />
                </div>
                <div className="flex-left">
                    <AbilityDisplayShow abilities={selectedMon.abilities} />
                </div>
            </div>
            <div id="middle bar">
                <div id="evo-and-stats-row" className="flex-center">
                    <EvolutionDisplay selectedMon={selectedMon} />
                </div>
                <div id="stats">
                    {/* <CanvasJSChart options={chartProps} /> */}
                </div>
            </div>
            <div id="moves-row">
                <h1>[Moves]</h1>
            </div>
        </div>
    );
};

export default PokemonShow;

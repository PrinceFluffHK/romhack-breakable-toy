import _ from "lodash";

class EvoSerializer {
    static async getEvos(linkArray, prePost) {
        const serializedEvos = await Promise.all(
            linkArray.map(async (link) => {
                let serializedEvo = {};

                const requiredLinkAttributes = ["parameter", "levelReq"];
                for (const attribute of requiredLinkAttributes) {
                    serializedEvo[attribute] = link[attribute];
                }

                let relatedEvo;
                if (prePost === "pre") {
                    relatedEvo = await link.$relatedQuery("preEvo");
                } else {
                    relatedEvo = await link.$relatedQuery("postEvo");
                }

                const requiredEvoAttributes = ["spriteUrl", "name", "id"];

                for (const attribute of requiredEvoAttributes) {
                    serializedEvo[attribute] = relatedEvo[attribute];
                }

                const relatedTrigger = await link.$relatedQuery("trigger");
                const capitalTriggerName = _.capitalize(relatedTrigger.name);
                const spacedTriggerName = capitalTriggerName.replace("-", " ");
                serializedEvo.triggerName = spacedTriggerName;
                serializedEvo.triggerId = relatedTrigger.id;

                serializedEvo.linkId = link.id;

                return serializedEvo;
            })
        );
        return serializedEvos;
    }
}

export default EvoSerializer;

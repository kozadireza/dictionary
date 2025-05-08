import React from "react";
interface Definitions {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
  antonyms: string[];
}
interface WordDefinitionProps {
  definition: Meaning;
}
export default function WordDefinition({ definition }: WordDefinitionProps) {
  return (
    <div className="meaningContainer">
      <div className="partOfSpeech">
        <h2 style={{ marginTop: 0 }}>{definition.partOfSpeech}</h2>
      </div>
      <div className="definitionContainer">
        {definition.definitions.map((element, index) => {
          return (
            <div key={100 - index} className="definitionInnerContainer">
              <p style={{ marginTop: 0 }}>{element.definition.trim()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

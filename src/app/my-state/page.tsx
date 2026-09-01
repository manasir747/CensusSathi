"use client";

import { useState } from "react";
import { MyStateHero, StateSelector, StateDetails } from "@/components/my-state";
import { STATES_DATA } from "@/data/statesData";
import styles from "./page.module.css";

export default function MyStatePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);

  const selectedState = selectedStateId 
    ? STATES_DATA.find(s => s.id === selectedStateId) || null 
    : null;

  return (
    <main className={styles.page}>
      <MyStateHero />
      
      <section className={`container ${styles.mainContent}`}>
        <div className={styles.gridContainer}>
          <div className={styles.leftCol}>
            <StateSelector 
              states={STATES_DATA}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedStateId={selectedStateId}
              onStateSelect={setSelectedStateId}
            />
          </div>
          
          <div className={styles.rightCol}>
            <StateDetails stateData={selectedState} />
          </div>
        </div>
      </section>
    </main>
  );
}

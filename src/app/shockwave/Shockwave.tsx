"use client";
import { useState } from "react";
import styles from "./Shockwave.module.css";

export default function ShockwaveButton() {
    const [isWarping, setIsWarping] = useState(false);

    const triggerShockwave = () => {
        setIsWarping(true);

        setTimeout(() => {
            setIsWarping(false);
        }, 1000);
    };

    return (
        <div className={`${styles.pageContainer} ${isWarping ? styles.warping : ""}`}>
            <button className={styles.btn} onClick={triggerShockwave}>
                Click me
            </button>
        </div>
    );
}

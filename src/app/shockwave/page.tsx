"use client";
import Head from "next/head";
import ShockwaveButton from "./Shockwave";

export default function ShockwavePage() {
    return (
        <div className="relative">
            <Head>
                <title>Shockwave Button Demo</title>
            </Head>
            <ShockwaveButton />
            <p className="absolute bottom-4 right-4 z-30">
                <a
                    href="https://github.com/pentcle/playground/tree/main/src/app/shockwave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    GitHub
                </a>
            </p>
        </div>
    );
}

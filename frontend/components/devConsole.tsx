"use client";

import { useEffect, useState } from "react";

export default function DevConsole() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.shiftKey && e.key.toLowerCase() === "c") {
                setOpen(prev => !prev);
                setInput("");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const addLog = (message: string) => {
        setLogs(prev => [...prev, message]);
    };

    const helpCommand = () => {
        addLog("");
        addLog("help - all commands");
        addLog("clear - clears the console");
        addLog("cleardb - clears all stocks generated data");
        addLog("/tickrate [tickrate] - changes bots tickrate (1 is default)");
        addLog("");
    };

    const clearCommand = () => {
        setLogs([]);
    };

    const cleardbcom = () => {
        cleardb();
    };

    const tickrateCommand = (args: string[]) => {
        if (!args[0]) {
            addLog("Usage: /tickrate [tickrate]");
            return;
        }

        const parsedTickrate = Number(args[0]);

        if (!Number.isFinite(parsedTickrate) || parsedTickrate <= 0) {
            addLog("Invalid tickrate");
            return;
        }

        tickrate(parsedTickrate);
    };

    async function tickrate(tickrateValue: number) {
        const response = await fetch("http://localhost:8000/changeTickRate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ tickrate: tickrateValue })
        });

        addLog(`res: ${response.status}`);
    }

    async function cleardb() {
        addLog(`Clearing all stocks generated data...`);

        const response = await fetch("http://localhost:8000/clearData", {
            method: "POST"
        });

        addLog(`res: ${response.status}`);
    }

    const executeCommand = () => {
        const command = input.trim();

        if (!command) return;

        addLog(`> ${command}`);

        const parts = command.split(/\s+/);
        const commandName = parts[0].toLowerCase();
        const args = parts.slice(1);

        switch (commandName) {
            case "help":
                helpCommand();
                break;

            case "clear":
                clearCommand();
                break;

            case "cleardb":
                cleardbcom();
                break;

            case "tickrate":
                tickrateCommand(args);
                break;

            default:
                addLog(`Unknown command: ${command}`);
                break;
        }

        setInput("");
    };

    if (!open) return null;

    return (
        <div className="devConsole absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-black text-white p-4 z-50">
            <h1 className="text-2xl select-none">
                dev console  <span className="text-gray-800">(shift + C to toggle)</span>
            </h1>

            <div className="overflow-y-auto mt-2 h-8/12 bg-gray-950 p-2">
                {logs.map((log, index) => (
                    <div key={index} className="font-mono">
                        {log}
                    </div>
                ))}
            </div>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { 
                    if (e.key === "Enter") {
                        executeCommand();
                    }
                }}
                className="w-full h-1/12 bg-gray-950 text-white p-2 mt-5 outline-none"
                placeholder="Enter command..."
                autoFocus
            />
        </div>
    );
}
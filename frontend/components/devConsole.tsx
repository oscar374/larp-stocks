
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
        addLog("/help - all commands");
        addLog("/clear - clears the console");
        addLog("/cleardb - clears all stocks generated data");
    };

    const clearCommand = () => {
        setLogs([]);
    };

    const cleardbcom = () => {
        cleardb();
    };

    async function cleardb(){
        const response = await fetch(`http://localhost:8000/clearData`);
        addLog(`res: ${response.status}`);
    }

    const executeCommand = () => {
        const command = input.trim();

        if (!command) return;

        addLog(`> ${command}`);

        switch (command.toLowerCase()) {
            case "help":
                helpCommand();
                break;

            case "clear":
                clearCommand();
                break;

            case "cleardb":
                cleardbcom();
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
                dev console
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


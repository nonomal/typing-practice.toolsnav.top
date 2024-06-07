export default function Result({ accuracy, wpm }: { accuracy: number, wpm: number }) {
    let status: string;
    let emoji: string;

    if (accuracy >= 90 && wpm >= 60) {
        status = "Excellent!";
        emoji = "🎉";
    } else if (accuracy >= 80 && wpm >= 50) {
        status = "Great Job!";
        emoji = "👍";
    } else if (accuracy >= 70 && wpm >= 40) {
        status = "Good Effort!";
        emoji = "😊";
    } else {
        status = "Keep Practicing!";
        emoji = "💪";
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <section className="p-2 w-1/2 h-1/2 rounded flex flex-col gap-3 bg-success justify-center items-center text-slate-50">
                <div className="text-4xl">{emoji}</div>
                <div className="text-xl">{status}</div>
                <div className="">Accuracy : {accuracy}%</div>
                <div>WPM (Word Per Minute) : {wpm}</div>
                <div>
                    <button onClick={() => window.location.reload()} className="bg-success p-2 flex items-center gap-1 rounded border">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.72167 1.84998 3.34849 3.9064 2.76335 5H4.5C4.77614 5 5 5.22386 5 5.5C5 5.77614 4.77614 6 4.5 6H1.5C1.22386 6 1 5.77614 1 5.5V2.5C1 2.22386 1.22386 2 1.5 2C1.77614 2 2 2.22386 2 2.5V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7.5 4.00001C7.77614 4.00001 8 4.22387 8 4.50001V7.29291L9.85355 9.14646C10.0488 9.34172 10.0488 9.65831 9.85355 9.85357C9.65829 10.0488 9.34171 10.0488 9.14645 9.85357L7.14645 7.85357C7.05268 7.7598 7 7.63262 7 7.50001V4.50001C7 4.22387 7.22386 4.00001 7.5 4.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        Restart</button>
                </div>
            </section>
        </div>
    )
}

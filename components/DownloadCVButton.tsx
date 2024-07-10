import React from "react";

export function DownloadCVButton() {
    const downloadCV = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Shakh7/assets/main/shakhzodbek_sharipov.pdf');
            if (!response.ok) throw new Error('Download failed');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'shakhzodbek_sharipov.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download error:', error);
            alert('Failed to download the CV. Please try again later.');
        }
    };

    return (
        <button
            onClick={downloadCV}
            className="px-8 py-5 rounded-md border border-black
                       dark:bg-transparent dark:text-white
                       dark:border-white/25 bg-white text-black text-lg
                       dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)]
                       hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]
                       transition duration-200"
        >
            Download CV
        </button>
    );
}
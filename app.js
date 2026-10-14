// ===================================================================
// 🛰️ C37 SMARTLABS: MULTI-SERVICE QR VECTOR COMPILATION ENGINE
// ===================================================================

// Global helper function to switch interface panels instantly
function switchUtilityTab(targetPanelId, selectedTabButton) {
    document.querySelectorAll('.service-panel-content').forEach(panel => {
        panel.classList.remove('active-panel');
    });
    document.querySelectorAll('.tab-valve').forEach(btn => {
        btn.classList.remove('active-tab');
    });
    document.getElementById(targetPanelId).classList.add('active-panel');
    selectedTabButton.classList.add('active-tab');
}

document.addEventListener("DOMContentLoaded", () => {
    // 📡 SELECTING ALL MY ACTIVE TERMINAL INTERFACE ACTION BUTTONS
    const compileBtn = document.getElementById("compile-matrix-trigger");
    const downloadBtn = document.getElementById("download-asset-trigger");
    const canvasDeck = document.getElementById("qrcode-canvas-target");

    let myQrMatrix = null;

    // Automatically load up a default clean QR block right upon initial page view loading
    myQrMatrix = new QRCode(canvasDeck, {
        text: "https://onrender.com",
        width: 240, height: 240,
        colorDark: "#0b0f19", colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    /**
     * ⚡ MY DYNAMIC DATA COLLECTION & GENERATION PROCESSOR
     * Captures data from fields and triggers high-speed pixel mapping
     */
    function executeCompilation() {
        let compiledPayloadString = "";
        
        // Check which tab screen view card is currently active on the display layout
        if (document.getElementById("link-panel").classList.contains("active-panel")) {
            compiledPayloadString = document.getElementById("link-url-input").value.trim();
        } else if (document.getElementById("text-panel").classList.contains("active-panel")) {
            compiledPayloadString = document.getElementById("text-raw-input").value.trim();
        } else if (document.getElementById("wifi-panel").classList.contains("active-panel")) {
            const ssid = document.getElementById("wifi-ssid").value.trim();
            const pass = document.getElementById("wifi-password").value.trim();
            if (ssid) {
                // Formatting into global standard Wi-Fi configuration patterns strings
                compiledPayloadString = `WIFI:S:${ssid};T:WPA;P:${pass};;`;
            }
        }

        if (!compiledPayloadString) {
            alert("❌ CoreVault Notice: Please populate your target data field parameters first!");
            return;
        }

        // Wipe out old content inside my container box and draw the fresh code pixel arrays instantly
        canvasDeck.innerHTML = "";
        myQrMatrix = new QRCode(canvasDeck, {
            text: compiledPayloadString,
            width: 240, height: 240,
            colorDark: "#0b0f19", colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    /**
     * 📥 CLEAN CANVAS FILE EXPORT VALVE
     * Extracts client-side base64 stream links to allow 100% offline file downloads
     */
    function triggerAssetDownload() {
        // Target the native HTML5 Canvas block compiled inside our library container
        const targetCanvasElement = canvasDeck.querySelector("canvas");
        
        if (!targetCanvasElement) {
            alert("❌ Extraction Failure: Please create your QR code layout first!");
            return;
        }

        try {
            // Extract pure base64 raw data URL image parameters from the active canvas matrix
            const canvasDataStream = targetCanvasElement.toDataURL("image/png");

            // Construct an anchor node link block to download the graphic file asset instantly
            const virtualAnchorNode = document.createElement("a");
            virtualAnchorNode.href = canvasDataStream;
            virtualAnchorNode.download = `C37_WORKSTATION_QR_${Date.now()}.png`;
            
            document.body.appendChild(virtualAnchorNode);
            virtualAnchorNode.click();
            document.body.removeChild(virtualAnchorNode);

        } catch (downloadCrashError) {
            console.error("🚨 Download Engine exception handled:", downloadCrashError);
            alert("❌ Extraction Error: Browser blocked offline file storage streams.");
        }
    }

    compileBtn.addEventListener("click", executeCompilation);
    downloadBtn.addEventListener("click", triggerAssetDownload);
});
    
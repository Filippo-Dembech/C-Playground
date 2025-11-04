import { spawn } from "child_process";
import fs from "fs";

const SRC = "main.cpp";
const OUT = process.platform === "win32" ? "main.exe" : "main";
let runningProcess = null;

function killRunningProcess() {
    runningProcess.kill("SIGKILL");
    runningProcess = null;
}

function runMain(code) {
    if (code !== 0) {
        console.log("❌ Compilation failed.");
        return;
    }
    console.log("✅ Compiled. Running...\n");
    runningProcess = spawn(`./${OUT}`, [], { stdio: "inherit" });
}

function startCompileProcess() {
    console.log("🔨 Compiling...");
    return spawn("g++", [SRC, "-std=c++17", "-o", OUT]);
}

function compileAndRun() {
    if (runningProcess) killRunningProcess();

    console.clear();

    const compileProcess = startCompileProcess();

    // if some error in compilation process occurs, print it
    compileProcess.stderr.on("data", (d) => process.stderr.write(d));

    // run runMain() when compileProcess has finished
    compileProcess.on("close", runMain);
}

function cleanup() {
  try {
    fs.unlinkSync(OUT);
    console.log(`🧹 Deleted ${OUT}`);
  } catch (err) {
    // ignore if file doesn't exist
  }
  process.exit(0);
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
process.on("exit", cleanup);

// initial run
compileAndRun();

// watch for changes
fs.watchFile(SRC, { interval: 500 }, () => {
    console.log("\n💾 File changed. Rebuilding...");
    compileAndRun();
});

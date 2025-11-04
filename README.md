# C++ Playground

A local playground where you can test your C++ code and practice it's syntax.

## Why This Playground

It's local. You can use Vim/Neovim to edit your playground code. I've always found frustrating online Playground that close every time I type `Ctrl + W`.

## Requirements

- Node.js v.16.0.0+
- C++ compiler in `PATH`

## How To Use

1. Clone this repo locally
2. Run `watch-app.js` in a terminal
3. Write your C++ playground code in `main.cpp` and save
4. See code output in the terminal
5. Whenever you want to stop the playground, close the terminal or just terminate the `watch-app.js` process

> NOTE: `watch-app.js` compiles and runs `main.cpp` code every time the `main.cpp` code changes.

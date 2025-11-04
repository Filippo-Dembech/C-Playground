# C++ Playground

A local playground where you can test your C++ code and practice it's syntax.

## Why This Playground

It's local. You can use Vim/Neovim to edit your playground code. I've always found frustrating online Playground that close every time I type `Ctrl + W`.

## Requirements

- Node.js v.16.0.0+
- C++ compiler in `PATH`

## How To Use

1. Clone this repo locally

    ```cli
    git clone https://github.com/Filippo-Dembech/C-Playground.git [<playground-name>]
    ```

    > NOTE: `<playground-name>` is optional. You can give the repository a custom name if you specify it. Otherwise the cloned repo will have the default name `C-Playground` (`C++` isn't accepted because `+` is a special character in the URL).

2. Enter the cloned repository:

    ```cli
    cd <playground-name>
    ```

3. Run `watch-app.js` in a terminal
4. Write your C++ playground code in `main.cpp` and save
5. See code output in the terminal
6. Whenever you want to stop the playground, close the terminal or just terminate the `watch-app.js` process

> NOTE: `watch-app.js` compiles and runs `main.cpp` code every time the `main.cpp` code changes.

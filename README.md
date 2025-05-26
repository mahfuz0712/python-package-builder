# Python Package Builder (ppb)

[![Python Package Builder Logo](images/logo.png)]

**Python Package Builder (ppb)** is a CLI tool designed to streamline the process of initializing, building, and managing Python package projects. It helps you quickly scaffold a new Python package, manage project metadata, and automate common packaging tasks.

---

## Features

- **Project Initialization:**  
  Quickly scaffold a new Python package project with sensible defaults or interactive prompts.

- **Version Management:**  
  Easily bump the version in your project metadata and keep it in sync across `pyproject.toml` and `setup.py`

- **Build & Publish Commands:**  
  Predefined commands for building and publishing your package using standard Python tools.

- **Customizable Metadata:**  
  Manage package name, version, author, license, repository, and more.

---

## Installation

#### Go to latest releases and download the latest version of the CLI tool from the [releases page](https://github.com/mahfuz0712/python-package-builder/releases/). after downloading and instaling run the following command in the terminal:
```sh
ppb --version
```
* if it says `x.x.x`, then the installation was successful.
## Usage

### Initialize a New Project

#### To make a new project, run the following command in the terminal:
```sh
ppb init myLibrary 
```
* Replace `myLibrary` with your desired package name. This will create a new directory with the necessary files to start your Python package.

* Creates a new directory `myLibrary` with all necessary files.

#### Or initialize in the current directory:

```sh
ppb init 
```



### Update Package Version


```sh
ppb update
```
### Build the Package
```sh
ppb run build
```

### Publish the Package

```sh
ppb run publish
```


---

## Project Structure

A typical project initialized by ppb will include:

- `.venv-windows` — virtual environmet to keep your dependencies separated from your current machine.
- `.venv-linux` — virtual environment for Linux users.
- `.venv-mac` — virtual environment for  mac users.
- `pyproject.toml` — Project metadata managed by ppb.
- `.pypytoken` — store your secret token from pypi site.
- `setup.py` — Standard Python packaging script.
- `README.md` — Project documentation.
- `LICENSE` — License file.
- `.gitignore` — Git ignore rules.
- `build/` and `dist/` — Build output directories.


---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is licensed under the MIT License.
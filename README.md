# Init Typescript Project CLI

## Description

A command line tool for initializing a custom typescript project. Builds a simple project from a template with eslint, prettier, and jest set up for use with TS and ready to go.

This CLI tool is designed to quickly and simply initialize a typescript project and take away all the pain of setting up the boilerplate. The goal is to shave a minimum of 1 hour of set up time for any new project.


## Project initialization flow

I set up a lot of typescript projects from scratch and like a lot of Typescript users I find myself doing a lot of the same things over and each time. This project simulates the manual set up process by following the same flow. 

### This flow is: 

1. Initialize git (if not already initialized)
2. Initialize npm 
3. Install dependencies
4. Install dev dependencies
5. Set up tsconfig.json
6. Set up .eslintrc.json
7. Set up .prettierrc
8. Set up .eslintignore
9. Set up .prettierignore
10. Set up .gitignore
11. Add entry point file and project directory (src, lib, etc)
12. Add test directory and files
13. Write/run initial tests 

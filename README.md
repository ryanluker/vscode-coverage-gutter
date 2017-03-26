# coverage-gutters
[![Build Status](https://travis-ci.org/ryanluker/vscode-coverage-gutters.svg?branch=master)](https://travis-ci.org/ryanluker/vscode-coverage-gutters)
[![Build status](https://ci.appveyor.com/api/projects/status/8vb8t787frcqtrm7?svg=true)](https://ci.appveyor.com/project/ryanluker/vscode-coverage-gutters)

## Features
- simple line coverage rendering using lcov

![Coverage Gutters features context](images/coverage-gutters-features-context.gif)

- workspace settings to customize the features to your liking
- colour compatibility with light and dark themes

![Coverage Gutters features basic](images/coverage-gutters-features-basic.gif)

## Requirements
- vscode 1.9.0 and up
- macos, linux or windows

## Extension Settings

|Setting | Description
|--------|------------
|`coverage-gutters.lcovname`|Allows specification of a custom lcov file name
|`coverage-gutters.altSfCompare`|Uses a relative method of comparing lcov source file paths
|`coverage-gutters.highlightlight`|Changes the highlight for light themes
|`coverage-gutters.highlightdark`|Changes the Highlight for dark themes
|`coverage-gutters.gutterIconPathDark`|Relative path to an icon in the extension for dark themes
|`coverage-gutters.gutterIconPathLight`|Relative path to an icon in the extension for light themes
|`coverage-gutters.customizable.menus-editor-context-displayCoverage-enabled`|Setting this to false will remove the command from the editor context menu and vice versa
|`coverage-gutters.customizable.menus-editor-context-watchLcovFile-enabled`|Setting this to false will remove the command from the editor context menu and vice versa
|`coverage-gutters.customizable.menus-editor-context-removeCoverage-enabled`|Setting this to false will remove the command from the editor context menu and vice versa

Some examples for the highlight colour are as follows:
- rgba(102, 153, 51, 0.75) <- recommended syntax based on vscode.d.ts
- keyword values like `lightred`

<a>https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool</a>

<a>https://developer.mozilla.org/en/docs/Web/CSS/background-color#Syntax</a>

## Known Issues
- can only reliably handle one lcov file per workspace [#35](https://github.com/ryanluker/vscode-coverage-gutters/issues/35)

## Release Notes
### [Changelog](https://github.com/ryanluker/vscode-coverage-gutters/releases)

## Contribution Guidelines
- test backed code changes
- new code matches existing style
- bug fixes always welcome :)
- new feature proposals go through a github issue

-----------------------------------------------------------------------------------------------------------

<div>Icon made by <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

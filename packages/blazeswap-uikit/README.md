# Blaze UIkit

[![Version](https://img.shields.io/npm/v/@blazeswap-libs/uikit)](https://www.npmjs.com/package/@blazeswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@blazeswap-libs/uikit)](https://www.npmjs.com/package/@blazeswap-libs/uikit)

Blaze UIkit is a set of React components and hooks used to build pages on Blaze's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @blazeswap-libs/uikit`

## Setup

### Theme

Before using Blaze UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@blazeswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@blazeswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

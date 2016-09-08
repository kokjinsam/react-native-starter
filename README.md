# React Native Starter

> yet another React Native starter...

## What's included

* [x] Navigation Experimental
* [x] Redux
* [x] Redux Form
* [x] React Native Drawer
* [x] Material Design Kit
* [x] React Native Vector Icons
* [x] Material Design Input Field for Redux Form
* [ ] Material Design Select Field for Redux Form
* [ ] Material Design Menu List
* [ ] Apollo Client
* [ ] Storage

## Some Drawbacks

1. NavigationTransitioner is used here instead of CardStack. Some of the notable differences are
  1. current scene will not stay when pushing a new scene
  2. `panHandlers` only works on NavigationCard
2. Android is the only supported platform. No plans for iOS.

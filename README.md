# React Native: Accessing State/Props Before Component Mount

This repository demonstrates a common error in React Native: attempting to access component state or props before the component has fully mounted.  This often leads to unexpected behavior or crashes.

The `bug.js` file shows the incorrect implementation where `props` are accessed within the `constructor`. The `bugSolution.js` file provides the corrected version, demonstrating the correct way to access and use `props` after component mount.
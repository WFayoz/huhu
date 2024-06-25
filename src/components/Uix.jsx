import React from "react";

const Uix = () => {
  const Figma =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yMiA0Ny4wMDAzQzI1LjMxMiA0Ny4wMDAzIDI4IDQ0LjIzNzcgMjggNDAuODMzN1YzNC42NjdIMjJDMTguNjg4IDM0LjY2NyAxNiAzNy40Mjk3IDE2IDQwLjgzMzdDMTYgNDQuMjM3NyAxOC42ODggNDcuMDAwMyAyMiA0Ny4wMDAzWiIgZmlsbD0iIzBBQ0Y4MyIvPgo8cGF0aCBkPSJNMTYgMjguNTAwMkMxNiAyNS4wOTYyIDE4LjY4OCAyMi4zMzM1IDIyIDIyLjMzMzVIMjhWMzQuNjY2OEgyMkMxOC42ODggMzQuNjY2OCAxNiAzMS45MDQyIDE2IDI4LjUwMDJaIiBmaWxsPSIjQTI1OUZGIi8+CjxwYXRoIGQ9Ik0xNiAxNi4xNjY3QzE2IDEyLjc2MjcgMTguNjg4IDEwIDIyIDEwSDI4VjIyLjMzMzNIMjJDMTguNjg4IDIyLjMzMzMgMTYgMTkuNTcwNyAxNiAxNi4xNjY3WiIgZmlsbD0iI0YyNEUxRSIvPgo8cGF0aCBkPSJNMjggMTBIMzRDMzcuMzEyIDEwIDQwIDEyLjc2MjcgNDAgMTYuMTY2N0M0MCAxOS41NzA3IDM3LjMxMiAyMi4zMzMzIDM0IDIyLjMzMzNIMjhWMTBaIiBmaWxsPSIjRkY3MjYyIi8+CjxwYXRoIGQ9Ik00MCAyOC41MDAyQzQwIDMxLjkwNDIgMzcuMzEyIDM0LjY2NjggMzQgMzQuNjY2OEMzMC42ODggMzQuNjY2OCAyOCAzMS45MDQyIDI4IDI4LjUwMDJDMjggMjUuMDk2MiAzMC42ODggMjIuMzMzNSAzNCAyMi4zMzM1QzM3LjMxMiAyMi4zMzM1IDQwIDI1LjA5NjIgNDAgMjguNTAwMloiIGZpbGw9IiMxQUJDRkUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIzNyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEwKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
  const Atomic =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDI4VjI4LjAyMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDQuNDk5MSAxMS41MDA4QzQyLjc0ODcgOS43NTA0NSAzOS4zMzE4IDkuODEwMSAzNC45OTk5IDExLjY2NjZDMzAuNjY4IDEzLjUyMzEgMjUuNzc2MSAxNy4wMjQ0IDIxLjQwMDMgMjEuNDAwM0MxNy4wMjQ0IDI1Ljc3NjEgMTMuNTIzMSAzMC42NjgxIDExLjY2NjYgMzQuOTk5OUM5LjgxMDA3IDM5LjMzMTggOS43NTA0MiA0Mi43NDg4IDExLjUwMDggNDQuNDk5MUMxMy4yNTExIDQ2LjI0OTQgMTYuNjY4MSA0Ni4xODk4IDIwLjk5OTkgNDQuMzMzM0MyNS4zMzE4IDQyLjQ3NjggMzAuMjIzNyAzOC45NzU1IDM0LjU5OTYgMzQuNTk5NkMzNi43NjYzIDMyLjQzMjkgMzguNzQxMSAzMC4xMTY3IDQwLjQxMTIgMjcuNzgzM0M0Mi4wODEzIDI1LjQ0OTggNDMuNDE0IDIzLjE0NDkgNDQuMzMzMyAyMC45OTk5QzQ1LjI1MjUgMTguODU1IDQ1Ljc0MDMgMTYuOTEyMiA0NS43Njg3IDE1LjI4MjNDNDUuNzk3MiAxMy42NTI0IDQ1LjM2NTggMTIuMzY3NSA0NC40OTkxIDExLjUwMDgiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNTAxIDExLjUwMDlDOS43NTA2OSAxMy4yNTEzIDkuODEwMzQgMTYuNjY4MiAxMS42NjY5IDIxLjAwMDFDMTMuNTIzNCAyNS4zMzIgMTcuMDI0NyAzMC4yMjM5IDIxLjQwMDUgMzQuNTk5N0MyNS43NzY0IDM4Ljk3NTYgMzAuNjY4MyA0Mi40NzY5IDM1LjAwMDIgNDQuMzMzNEMzOS4zMzIxIDQ2LjE4OTkgNDIuNzQ5IDQ2LjI0OTYgNDQuNDk5MyA0NC40OTkyQzQ2LjI0OTcgNDIuNzQ4OSA0Ni4xOSAzOS4zMzE5IDQ0LjMzMzUgMzUuMDAwMUM0Mi40NzcgMzAuNjY4MiAzOC45NzU3IDI1Ljc3NjMgMzQuNTk5OSAyMS40MDA0QzMyLjQzMzIgMTkuMjMzNyAzMC4xMTcgMTcuMjU4OSAyNy43ODM1IDE1LjU4ODhDMjUuNDUwMSAxMy45MTg3IDIzLjE0NTEgMTIuNTg2IDIxLjAwMDIgMTEuNjY2N0MxOC44NTUzIDEwLjc0NzUgMTYuOTEyNCAxMC4yNTk3IDE1LjI4MjUgMTAuMjMxM0MxMy42NTI3IDEwLjIwMjggMTIuMzY3NyAxMC42MzQyIDExLjUwMSAxMS41MDA5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
  const UI =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDQ5QzI1LjI0MjIgNDkgMjIuNTExNSA0OC40NTY4IDE5Ljk2MzYgNDcuNDAxNUMxNy40MTU4IDQ2LjM0NjEgMTUuMTAwOCA0NC43OTkzIDEzLjE1MDggNDIuODQ5MkMxMS4yMDA3IDQwLjg5OTIgOS42NTM4OCAzOC41ODQyIDguNTk4NTMgMzYuMDM2NEM3LjU0MzE4IDMzLjQ4ODUgNyAzMC43NTc4IDcgMjhDNyAyNS4yNDIyIDcuNTQzMTggMjIuNTExNSA4LjU5ODUzIDE5Ljk2MzZDOS42NTM4OCAxNy40MTU4IDExLjIwMDcgMTUuMTAwOCAxMy4xNTA4IDEzLjE1MDhDMTUuMTAwOCAxMS4yMDA3IDE3LjQxNTggOS42NTM4OCAxOS45NjM2IDguNTk4NTNDMjIuNTExNSA3LjU0MzE4IDI1LjI0MjIgNyAyOCA3QzMzLjU2OTUgNyAzOC45MTEgOC45NjY2NiA0Mi44NDkyIDEyLjQ2NzNDNDYuNzg3NSAxNS45NjggNDkgMjAuNzE2IDQ5IDI1LjY2NjdDNDkgMjguMTQyIDQ3Ljg5MzcgMzAuNTE2IDQ1LjkyNDYgMzIuMjY2M0M0My45NTU1IDM0LjAxNjcgNDEuMjg0OCAzNSAzOC41IDM1SDMyLjY2NjdDMzEuNjI1NyAzNC45ODMyIDMwLjYwOSAzNS4zMTUgMjkuNzc4MyAzNS45NDI3QzI4Ljk0NzYgMzYuNTcwMyAyOC4zNTA2IDM3LjQ1NzcgMjguMDgyNCAzOC40NjM2QzI3LjgxNDEgMzkuNDY5NiAyNy44OSA0MC41MzY0IDI4LjI5NzggNDEuNDk0M0MyOC43MDU3IDQyLjQ1MjIgMjkuNDIyMiA0My4yNDYyIDMwLjMzMzMgNDMuNzVDMzAuNzk5MiA0NC4xNzk5IDMxLjExODcgNDQuNzQ0OSAzMS4yNDY5IDQ1LjM2NTdDMzEuMzc1MSA0NS45ODY2IDMxLjMwNTYgNDYuNjMxOSAzMS4wNDgyIDQ3LjIxMTJDMzAuNzkwNyA0Ny43OTA1IDMwLjM1ODIgNDguMjc0NiAyOS44MTE1IDQ4LjU5NTRDMjkuMjY0OCA0OC45MTYyIDI4LjYzMTMgNDkuMDU3NyAyOCA0OVoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNDk5NyAyNS42NjY2QzE4LjE0NCAyNS42NjY2IDE4LjY2NjMgMjUuMTQ0MyAxOC42NjYzIDI0LjQ5OTlDMTguNjY2MyAyMy44NTU2IDE4LjE0NCAyMy4zMzMzIDE3LjQ5OTcgMjMuMzMzM0MxNi44NTUzIDIzLjMzMzMgMTYuMzMzIDIzLjg1NTYgMTYuMzMzIDI0LjQ5OTlDMTYuMzMzIDI1LjE0NDMgMTYuODU1MyAyNS42NjY2IDE3LjQ5OTcgMjUuNjY2NloiIGZpbGw9IiMxQjVCRjciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjcuOTk5NyAxOC42NjY2QzI4LjY0NCAxOC42NjY2IDI5LjE2NjMgMTguMTQ0MyAyOS4xNjYzIDE3LjQ5OTlDMjkuMTY2MyAxNi44NTU2IDI4LjY0NCAxNi4zMzMzIDI3Ljk5OTcgMTYuMzMzM0MyNy4zNTUzIDE2LjMzMzMgMjYuODMzIDE2Ljg1NTYgMjYuODMzIDE3LjQ5OTlDMjYuODMzIDE4LjE0NDMgMjcuMzU1MyAxOC42NjY2IDI3Ljk5OTcgMTguNjY2NloiIGZpbGw9IiMxQjVCRjciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzguNDk5NyAyNS42NjY2QzM5LjE0NCAyNS42NjY2IDM5LjY2NjMgMjUuMTQ0MyAzOS42NjYzIDI0LjQ5OTlDMzkuNjY2MyAyMy44NTU2IDM5LjE0NCAyMy4zMzMzIDM4LjQ5OTcgMjMuMzMzM0MzNy44NTUzIDIzLjMzMzMgMzcuMzMzIDIzLjg1NTYgMzcuMzMzIDI0LjQ5OTlDMzcuMzMzIDI1LjE0NDMgMzcuODU1MyAyNS42NjY2IDM4LjQ5OTcgMjUuNjY2NloiIGZpbGw9IiMxQjVCRjciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K";
  const Image =
    "https://udevs.io/static/design-0951fd1e6afedab989f63e037535430f.png";
  const CRM =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NSA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjA0MTcgMzMuNzVIMTEuNDU4M0M4LjkyNzAzIDMzLjc1IDYuODc1IDM1Ljc2NDcgNi44NzUgMzguMjVWNDIuNzVDNi44NzUgNDUuMjM1MyA4LjkyNzAzIDQ3LjI1IDExLjQ1ODMgNDcuMjVIMTYuMDQxN0MxOC41NzMgNDcuMjUgMjAuNjI1IDQ1LjIzNTMgMjAuNjI1IDQyLjc1VjM4LjI1QzIwLjYyNSAzNS43NjQ3IDE4LjU3MyAzMy43NSAxNi4wNDE3IDMzLjc1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00My41NDE3IDMzLjc1SDM4Ljk1ODNDMzYuNDI3IDMzLjc1IDM0LjM3NSAzNS43NjQ3IDM0LjM3NSAzOC4yNVY0Mi43NUMzNC4zNzUgNDUuMjM1MyAzNi40MjcgNDcuMjUgMzguOTU4MyA0Ny4yNUg0My41NDE3QzQ2LjA3MyA0Ny4yNSA0OC4xMjUgNDUuMjM1MyA0OC4xMjUgNDIuNzVWMzguMjVDNDguMTI1IDM1Ljc2NDcgNDYuMDczIDMzLjc1IDQzLjU0MTcgMzMuNzVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5Ljc5MTcgNi43NUgyNS4yMDgzQzIyLjY3NyA2Ljc1IDIwLjYyNSA4Ljc2NDcyIDIwLjYyNSAxMS4yNVYxNS43NUMyMC42MjUgMTguMjM1MyAyMi42NzcgMjAuMjUgMjUuMjA4MyAyMC4yNUgyOS43OTE3QzMyLjMyMyAyMC4yNSAzNC4zNzUgMTguMjM1MyAzNC4zNzUgMTUuNzVWMTEuMjVDMzQuMzc1IDguNzY0NzIgMzIuMzIzIDYuNzUgMjkuNzkxNyA2Ljc1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy43NSAzMy43NVYzMS41QzEzLjc1IDMwLjMwNjUgMTQuMjMyOSAyOS4xNjE5IDE1LjA5MjQgMjguMzE4QzE1Ljk1MiAyNy40NzQxIDE3LjExNzggMjcgMTguMzMzMyAyN0gzNi42NjY3QzM3Ljg4MjIgMjcgMzkuMDQ4IDI3LjQ3NDEgMzkuOTA3NiAyOC4zMThDNDAuNzY3MSAyOS4xNjE5IDQxLjI1IDMwLjMwNjUgNDEuMjUgMzEuNVYzMy43NSIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNy41IDIwLjI1VjI3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
  const Team =
    "https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png";

  const Skitch =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4xMjc4IDIzLjI5NDlMMjcuOTU4NiA0Ni45NTc3TDguMDczMjQgMjMuMjk0OUgxNi4xMjc4WiIgZmlsbD0iI0VBNkMwMCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM5Ljc5MjEgMjMuMjk0OUwyNy45NjEzIDQ2Ljk1NzdMNDcuODQ2NyAyMy4yOTQ5SDM5Ljc5MjFaIiBmaWxsPSIjRUE2QzAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMTI3IDIzLjI5NDlIMzkuNzg4NUwyNy45NTc3IDQ2Ljk1NzdMMTYuMTI3IDIzLjI5NDlaIiBmaWxsPSIjRkRBRDAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuOTU3NyAxMC4xODAyTDE2Ljc0OTYgMTEuMzkwOEwxNi4xMjcgMjMuMjk0MUwyNy45NTc3IDEwLjE4MDJaIiBmaWxsPSIjRkREMjMxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuOTU4MyAxMC4xODAyTDM5LjE2NjQgMTEuMzkwOEwzOS43ODkxIDIzLjI5NDFMMjcuOTU4MyAxMC4xODAyWiIgZmlsbD0iI0ZERDIzMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3Ljg0NjcgMjMuMjk0OEwzOS4xNjk0IDExLjM5MTZMMzkuNzkyMSAyMy4yOTQ4SDQ3Ljg0NjdaIiBmaWxsPSIjRkRBRDAwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4wNzMyNCAyMy4yOTQ4TDE2Ljc1MDUgMTEuMzkxNkwxNi4xMjc4IDIzLjI5NDhIOC4wNzMyNFoiIGZpbGw9IiNGREFEMDAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNy45NTc3IDEwLjE4MDJMMTYuMTI3IDIzLjI5NDFIMzkuNzg4NUwyNy45NTc3IDEwLjE4MDJaIiBmaWxsPSIjRkVFRUI3Ii8+Cjwvc3ZnPgo=";

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-5">
        <h1 className="text-7xl text-blue-700 font-medium py-10 ">
          UI / UX design
        </h1>
        <div className="flex justify-between items-center">
          <div className="max-w-[47%]">
            <p className="text-2xl opacity-85 ">
              Our company takes a human-centered approach to design
            </p>
            <div className=" grid grid-cols-3 gap-5 mt-10">
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Ux</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={UI} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">UX</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Prototyping</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={Atomic} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Atomic</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Prototyping</p>
              </div>
              <div className="p-4 bg-blue-100 border rounded-lg">
                <img src={CRM} alt="img" className=" w-[56px] h-[56px]" />
                <p className="pl-2 text-lg font-medium">Prototyping</p>
              </div>
            </div>
            <p className="text-4xl font-medium mt-7">Dedicated team</p>
            <div className="flex gap-12 mt-8">
              <div>
                <img src={Figma} alt="img" />
                <p className="text-center text-lg font-medium ">Figma</p>
              </div>
              <div>
                <img src={Skitch} alt="img" />
                <p className="text-center text-lg font-medium ">Skitch</p>
              </div>
              <div>
                <img src={Figma} alt="img" />
                <p className="text-center text-lg font-medium ">Figma</p>
              </div>
              <div>
                <img src={Figma} alt="img" />
                <p className="text-center text-lg font-medium ">Figma</p>
              </div>
            </div>
          </div>
          <div className="max-w-[45%] py-11 mt-6 relative ">
            <img src={Team} alt="img" className=" relative" />
            <img src={Image} alt="img" className=" absolute top-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uix;

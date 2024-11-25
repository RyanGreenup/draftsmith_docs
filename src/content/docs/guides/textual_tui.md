# Notes TUI Documentation

## Overview

[The TUI](https://github.com/RyanGreenup/draftsmith_textual) is a terminal-based interface for managing and viewing notes. It provides a hierarchical tree view of notes, content preview, tabs, cut/paste and popups for back/forward links.

The TUI includes a QT-based GUI preview for viewing notes in a graphical interface. For unix-based systems [^1731991580], this GUI can automatically sync with the TUI for real-time updates.

[^1731991580]: An UNIX socket is used for communication between the TUI and GUI. When the TUI is launched, it creates a socket file in the `/tmp` directory. The GUI reads from this socket to receive updates from the TUI. When the GUI is launched, it connects to the socket file to receive updates from the TUI. When the TUI is closed, the socket file is removed. This has only been tested on Linux systems.

![](./textual_screenshot.png)

## Features

### Note Navigation
- **Tree View**: Notes are displayed in a hierarchical tree structure
- **Scrollable Content**: Note content can be scrolled within the preview pane
- **Tab Interface**: Switch between different views and functions using tabs

### Content Display
- **Markdown Support**: Notes are rendered in markdown format
- **Preview Mode**: View formatted content in real-time
- **Asset Handling**: Support for embedded assets and attachments

### Search and Filtering
- **Note Filtering**: Filter notes by various criteria
- **Quick Navigation**: Jump to specific notes using IDs
- **Tree Expansion**: Expand/collapse note hierarchies

## Keyboard Shortcuts

| Key            | Description               |
|----------------|---------------------------|
| **Navigation** |                           |
| `j`            | Move cursor down          |
| `k`            | Move cursor up            |
| `h`            | Collapse current node     |
| `l`            | Expand current node       |
| `b`            | Show backlinks            |
| `B`            | Show forwardlinks         |
| `'`            | Jump to marked note       |
| `H`            | Promote note in hierarchy |
| `L`            | Demote note in hierarchy  |
| **Folding**    |                           |
| `z`            | Cycle fold forward        |
| `Z`            | Cycle fold reverse        |
| `o`            | Unfold entire tree        |
| `O`            | Fold to first level       |
| **Tabs**       |                           |
| `t`            | Open new tab              |
| `ctrl+w`       | Close current tab         |
| `>`            | Switch to next tab        |
| `<`            | Switch to previous tab    |
| **Actions**    |                           |
| `e`            | Edit note                 |
| `E`            | Edit note in GUI          |
| `f`            | Filter notes              |
| `/`            | Use fzf to select note    |
| `s`            | Search notes              |
| `F`            | Toggle follow mode        |
| `r`            | Refresh view              |
| `f5`           | Toggle flat view          |
| `g`            | Open GUI preview          |
| `G`            | Toggle auto-sync          |
| `x`            | Mark note for move        |
| `p`            | Paste as children         |
| `escape`       | Clear marks               |
| `n`            | Create new note           |
| `D`            | Delete note               |
| `y`            | Yank (copy) link          |
| **System**     |                           |
| `q`            | Quit application          |

## Integration
The TUI interfaces with a backend API for:
- Note content retrieval
- Asset management
- Tag operations
- Task management

## Technical Details
- Built using the Textual TUI framework
- Supports dark/light mode
- Handles external asset URLs
- Manages note hierarchies and relationships

## Requirements
- Python 3.x
- Textual library
- Network connection to backend API

## Getting Started
1. Ensure backend API is running
2. Launch the TUI with appropriate base URL and socket path
3. Navigate the tree view to select notes
4. Use keyboard shortcuts for efficient navigation

## Tips
- Use tree expansion to manage large note hierarchies
- Take advantage of the scrollable preview for long content
- Utilize keyboard shortcuts for faster navigation

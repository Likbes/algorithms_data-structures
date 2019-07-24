"use strict";
var Memento;
(function (Memento) {
    // must have spec method to save snapshot
    var Editor = /** @class */ (function () {
        function Editor() {
        }
        Editor.prototype.setText = function (text) {
            this.text = text;
        };
        Editor.prototype.setCursor = function (x, y) {
            this.curX = x;
            this.curY = y;
        };
        Editor.prototype.setSelectionWidth = function (width) {
            this.selectionWidth = width;
        };
        Editor.prototype.createSnapshot = function () {
            return new Snapshot(this, this.text, this.curX, this.curY, this.selectionWidth);
        };
        return Editor;
    }());
    // save state of editor
    var Snapshot = /** @class */ (function () {
        function Snapshot(editor, text, curX, curY, selectionWidth) {
            this.editor = editor;
            this.text = text;
            this.curX = curX;
            this.curY = curY;
            this.selectionWidth = selectionWidth;
        }
        Snapshot.prototype.restore = function () {
            this.editor.setText(this.text);
            this.editor.setCursor(this.curX, this.curY);
            this.editor.setSelectionWidth(this.selectionWidth);
        };
        return Snapshot;
    }());
    var Command = /** @class */ (function () {
        function Command() {
        }
        Command.prototype.makeBackup = function (editor) {
            this.backup = editor.createSnapshot();
        };
        Command.prototype.undo = function () {
            this.backup ? this.backup.restore() : null;
        };
        return Command;
    }());
    var editor = new Editor();
    editor.setText('text');
    editor.setCursor(10, 50);
    editor.setSelectionWidth(100);
    console.log('old state: ', editor);
    var command = new Command();
    command.makeBackup(editor);
    // new state
    editor.setText('new text');
    editor.setCursor(100, 500);
    editor.setSelectionWidth(1000);
    console.log('set new state: ', editor);
    command.undo();
    console.log('return backup: ', editor);
})(Memento || (Memento = {}));

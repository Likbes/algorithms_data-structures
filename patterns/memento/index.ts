namespace Memento {
  // must have spec method to save snapshot
  class Editor {
    private text!: string;
    private curX!: number;
    private curY!: number;
    private selectionWidth!: number;

    public setText(text: string): void {
      this.text = text;
    }

    public setCursor(x: number, y: number): void {
      this.curX = x;
      this.curY = y;
    }

    public setSelectionWidth(width: number): void {
      this.selectionWidth = width;
    }

    public createSnapshot(): Snapshot {
      return new Snapshot(
        this,
        this.text,
        this.curX,
        this.curY,
        this.selectionWidth
      );
    }
  }

  // save state of editor
  class Snapshot {
    private editor: Editor;
    private text: string;
    private curX: number;
    private curY: number;
    private selectionWidth: number;

    constructor(
      editor: Editor,
      text: string,
      curX: number,
      curY: number,
      selectionWidth: number
    ) {
      this.editor = editor;
      this.text = text;
      this.curX = curX;
      this.curY = curY;
      this.selectionWidth = selectionWidth;
    }

    restore(): void {
      this.editor.setText(this.text);
      this.editor.setCursor(this.curX, this.curY);
      this.editor.setSelectionWidth(this.selectionWidth);
    }
  }

  class Command {
    private backup?: Snapshot;

    public makeBackup(editor: Editor) {
      this.backup = editor.createSnapshot();
    }

    public undo(): void {
      this.backup ? this.backup.restore() : null;
    }
  }

  const editor = new Editor();
  editor.setText('text');
  editor.setCursor(10, 50);
  editor.setSelectionWidth(100);
  console.log('old state: ', editor);

  const command = new Command();
  command.makeBackup(editor);

  // new state
  editor.setText('new text');
  editor.setCursor(100, 500);
  editor.setSelectionWidth(1000);
  console.log('set new state: ', editor);

  command.undo();
  console.log('return backup: ', editor);
}

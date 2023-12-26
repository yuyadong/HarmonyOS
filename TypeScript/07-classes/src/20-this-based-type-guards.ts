class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }

  isDirectory(): this is Directory {
    return this instanceof Directory;
  }

  isNetworked(): this is Networked & this {
    return this.networked;
  }

  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[];
  constructor() {
    super("", false);
    this.children = [];
  }
}

interface Networked {
  host: boolean;
}

const fso: FileSystemObject = new FileRep("foo/bar.text", "foo");
if (fso.isFile()) {
  fso.content;
} else if (fso.isDirectory()) {
  fso.children;
} else if (fso.isNetworked()) {
  fso.host;
}

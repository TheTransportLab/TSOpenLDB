export interface GetTOCListAsync {
  version: string;
  TOCList: TOCList;
}

interface TOCList {
  TOC: Array<TOC>;
}

interface TOC {
  attributes: TOCAttributes;
  $value: string;
}

interface TOCAttributes {
  toc: string;
}

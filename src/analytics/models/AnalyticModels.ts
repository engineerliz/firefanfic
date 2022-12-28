export interface PageModel {
  pageData: PageData;
  meta: MetaFields;
}

export interface PageData {
  title: string;
  url: string;
  path: string;
  referrer?: string;
  hash: string;
  search?: string;
  width: number;
  height: number;

}

export interface TrackModel {
  event: string;
  properties: any;
  userId: string;
  meta: MetaFields;
}

export interface MetaFields {
  timestamp: Date;
}

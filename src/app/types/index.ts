export interface ImageAttachment {
  src: string;
  width: number;
  height: number;
}

export interface PhotoAttachment {
  type: "PHOTO";
  image: ImageAttachment;
}

export interface LinkAttachment {
  type: "LINK";
  image: ImageAttachment;
  caption: string;
  titleLink: string;
  description: string;
  link: string;
}

export type Attachment = PhotoAttachment | LinkAttachment;

export interface NewsItem {
  id: number;
  text: string;
  date: number;
  type: string;
  attachments?: Attachment[];
}

export interface Post {
  id?: string;
  text?: string;
  post_status?: POST_STATUS;
  created_by?: string;
  deleted_by?: string;
  updated_by?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  prayed?: string[];
  didIPray?: boolean;
  isAnswered?: boolean;
}

export enum POST_STATUS {
  'READY_TO_POST' = 'READY_TO_POST',
  'POSTING' = 'POSTING',
  'POSTED' = 'POSTED',
  'POSTING_FAILED' = 'POSTING_FAILED',
  'POST_DELETING' = 'POST_DELETING',
  'POST_DELETED' = 'POST_DELETED',
}

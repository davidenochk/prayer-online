export interface Post {
  id?: string;
  text?: string;
  post_status?: POST_STATUS;
}

export enum POST_STATUS {
  'READY_TO_POST' = 'READY_TO_POST',
  'POSTING' = 'POSTING',
  'POSTED' = 'POSTED',
  'POSTING_FAILED' = 'POSTING_FAILED',
  'POST_DELETING' = 'POST_DELETING',
  'POST_DELETED' = 'POST_DELETED'
}

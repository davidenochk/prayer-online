export interface Group {
    id?: string;
    name?: string;
    other?: string;
    group_status?: GROUP_STATUS;
    created_by?: string;
    deleted_by?: string;
    updated_by?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
  }
  
  export enum GROUP_STATUS {
    'CREATED' = 'CREATED',
    'UPDATED' = 'UPDATED',
    'DELETED' = 'DELETED',
  }
  
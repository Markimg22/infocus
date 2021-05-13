export interface Task {
  id: string;
  title: string;
  is_completed: boolean;
  created_at?: Date;
}

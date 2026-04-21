export type UserProfile = {
  id: string;
  full_name: string;
  email: string;
  role: "student" | "admin";
};

export type CourseModule = {
  id: string;
  title: string;
  sort_order: number;
};

export type Lesson = {
  id: string;
  module_id: string;
  title: string;
  slug: string;
  description: string;
  video_guid: string | null;
  duration_seconds: number | null;
  is_preview: boolean;
  sort_order: number;
};

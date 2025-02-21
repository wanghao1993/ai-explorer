export declare namespace AiTypes {
  interface AiTool {
    id: number;
    logo_url: string;
    title: string;
    description: string;
    url: string;
    content: string;
    category_id: number;
    category: AiCategory;
    created_at: Date;
    updated_at: Date;
  }

  interface AiCategory {
    category_id: number;
    category_name: string;
    description?: string;
    submitter: string;
    created_at: Date;
    updated_at: Date;
  }
  interface AiTools {
    [key: string]: AiTool[];
  }

  enum VerifyType {
    REGISTER, // 注册
    PASSWORD, // 修改密码
  }
}
export {};

import z from 'zod';

export const UserSchemaPost = z.object({
  supabaseId: z.string(),
  email: z.email(),
});

export const UserSchemaPut = z.object({
  email: z.email().optional(),
  password: z.string().min(6).optional(),
  verified: z.boolean().optional(),
  permissions: z.array(z.string()).optional(),
  role: z.string().min(1).optional(),
  subscriptionPlan: z.string().min(1).optional(),
  profileImg: z.string().min(1).optional(),
  info: z.record(z.string(), z.any()).optional(),
});

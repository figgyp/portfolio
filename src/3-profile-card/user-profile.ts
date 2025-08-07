export type SocialNetworks = "github" | "linkedin" | "instagram" | "twitter";

export type UserProfile = {
  headshot?: string;
  name: string;
  bio: string;
  company?: string;
  role: string;
  email: string;
  socialHandles: {
    [key in SocialNetworks]?: string;
  };
};

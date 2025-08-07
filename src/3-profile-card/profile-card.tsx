import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";
import { Card } from "@ui/card.tsx";
import type { SocialNetworks, UserProfile } from "./user-profile.ts";
import { clsx } from "clsx";

type Props = {
  userProfile: UserProfile;
};

function ProfileCard({ userProfile }: Props) {
  const getSocialUrl = (type: SocialNetworks, login: string) => {
    switch (type) {
      case "github":
        return `https://github.com/${login}`;
      case "linkedin":
        return `https://linkedin.com/in/${login}`;
      case "instagram":
        return `https://instagram.com/${login}`;
      case "twitter":
        return `https://twitter.com/${login}`;
      default:
        console.warn("unexpected social url");
    }
  };

  const getSocialIcon = (type: SocialNetworks) => {
    switch (type) {
      case "github":
        return <RiGithubFill size={20} />;
      case "linkedin":
        return <RiLinkedinFill size={20} />;
      case "instagram":
        return <RiInstagramFill size={20} />;
      case "twitter":
        return <RiTwitterFill size={20} />;
      default:
        console.warn("unexpected social icon");
    }
  };

  return (
    <Card className="w-[340px] px-4 py-6 flex flex-col gap-10">
      <div className="flex flex-col gap-6 items-center">
        <img
          src={userProfile.headshot}
          height={64}
          width={64}
          alt={`Picture of ${userProfile.name}`}
        />
        <header>
          <h1 className="text-xl text-center">{userProfile.name}</h1>
          <small className="text-neutral-600 text-sm">
            {userProfile.role}
            {userProfile.company ? " @ " + userProfile.company : null}
          </small>
        </header>
        <p className="text-neutral-600 text-center">{userProfile.bio}</p>
      </div>
      <footer className="flex flex-col gap-6">
        <button
          type="button"
          className="h-11 text-white bg-indigo-700 rounded-sm shadow-sm cursor-pointer"
        >
          Contact me
        </button>
        <div className="flex gap-4 justify-center">
          {Object.entries(userProfile.socialHandles)
            .filter(([_, login]) => Boolean(login))
            .map(([type, login]) => (
              <a
                key={type}
                className={clsx(
                  "p-2 text-indigo-700 rounded-sm",
                  "hover:bg-neutral-50",
                  "focus:bg-neutral-50 focus:outline focus:outline-4 focus:outline-indigo-100 focus:rounded-sm", // TODO verify focus styles
                )}
                href={getSocialUrl(type as SocialNetworks, login)}
              >
                {getSocialIcon(type as SocialNetworks)}
              </a>
            ))}
        </div>
      </footer>
    </Card>
  );
}

export { ProfileCard };

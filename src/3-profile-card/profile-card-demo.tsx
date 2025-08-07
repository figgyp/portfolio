import { ProfileCard } from "./profile-card.tsx";
import profileImage from "./assets/profile.png";

const userProfile = {
  headshot: profileImage,
  name: "Sarah Dole",
  bio: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  company: "Microsoft",
  role: "Front End Engineer",
  email: "hi@sarahdole.dev",
  socialHandles: {
    github: "sarahdole",
    linkedin: "sarah-dole-1nt3g5v928452",
    instagram: "sarahdole-dev",
    twitter: "sadodev",
  },
};

function ProfileCardDemo() {
  return (
    <div className="font-noto pt-[120px] max-w-md mx-auto flex justify-center">
      <ProfileCard userProfile={userProfile} />
    </div>
  );
}

export { ProfileCardDemo };

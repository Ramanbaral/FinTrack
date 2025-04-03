import { SignUp } from '@clerk/nextjs';

export default function signup() {
  return (
    <div className="grid h-screen place-items-center">
      <SignUp />
    </div>
  );
}

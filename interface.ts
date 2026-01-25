interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  statTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "hitesh@hitesh.in",
  userId: 3344,
  role: "admin",
  githubToken: "github",
  statTrial: () => {
    return "Trail started";
  },
  getCoupon: (name: "morsh", off: 2) => {
    return 10;
  },
};

hitesh.email = "hitesh@hitesh.in";

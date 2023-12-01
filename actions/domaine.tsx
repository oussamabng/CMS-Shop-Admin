export const domaine =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://cms-shop-admin.vercel.app";

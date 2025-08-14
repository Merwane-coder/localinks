// src/lib/otp/redis.ts
import Redis, { RedisOptions } from "ioredis";

type MemTimer = ReturnType<typeof setTimeout>;
const isDev = process.env.NODE_ENV !== "production";
const disabled = process.env.DISABLE_REDIS === "1";
const raw = (process.env.REDIS_DATABASE_URI || "").trim();
const uri = raw.replace(/^"+|"+$/g, "");
const isSecure = uri.startsWith("rediss://");

function createMemoryRedis() {
  const store = new Map<string, string>();
  const timers = new Map<string, MemTimer>();
  return {
    async set(key: string, value: string, mode?: string, seconds?: number) {
      store.set(key, value);
      if (timers.has(key)) { clearTimeout(timers.get(key)!); timers.delete(key); }
      if (mode === "EX" && typeof seconds === "number") {
        const t = setTimeout(() => { store.delete(key); timers.delete(key); }, seconds * 1000);
        timers.set(key, t);
      }
      return "OK";
    },
    async get(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    async del(...keys: string[]) {
      let n = 0;
      for (const k of keys) {
        if (store.delete(k)) n++;
        if (timers.has(k)) { clearTimeout(timers.get(k)!); timers.delete(k); }
      }
      return n;
    },
    on(_event: string, _cb: (...args: any[]) => void) { /* noop */ },
  };
}

let redis: any;

if (disabled || (!uri && isDev)) {
  console.warn("⚠️  Redis en mode MÉMOIRE (dev). Aucune donnée OTP persistée.");
  redis = createMemoryRedis();
} else if (!uri && !isDev) {
  throw new Error("REDIS_DATABASE_URI is not properly configured");
} else {
  const options: RedisOptions = {
    retryStrategy: (times) => Math.min(times * 50, 2000),
    ...(isSecure ? { tls: { rejectUnauthorized: false } } : {}),
  };
  redis = new Redis(uri, options);
  redis.on("error", (err: unknown) => console.error("Redis connection error:", err));
  redis.on("connect", () => console.log("Connected to Redis successfully"));
}

export default redis;

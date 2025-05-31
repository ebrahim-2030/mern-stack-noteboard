import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {

    // apply rate limiting
    const result = await ratelimit.limit("my-limit-key");

    // if limit exceeded, respond with 429 status
    if (!result.success) {
      return res.status(429).json({
        message: "To many requests, please try again letter",
      });
    }

    next();
  } catch (err) {
    console.log("Rate limit error", err);
    next(err);
  }
};

export default ratelimiter;
